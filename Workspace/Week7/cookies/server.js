var express = require('express')
var app = express()
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended : false}))
app.use(function(req, res, next){
    // console.log('headers: \n', req.headers)
    // console.log('=-=-=-=-=-=-=-=-=-=-=')
    next()
})


app.get('/', function(req,res){
    res.send('home page')
})

app.get('/set-cookie', function(req, res){
    res.cookie('cookie-key', 'cookie-value')
    res.send('we just set a cookie')
})


app.get('/temporary-cookie', function(req, res){
    // this cookie expires 30 days from now
    // res.cookie('temporary-cookie','temporary-value', {maxAge:1000 * 60 * 60 * 24 * 30})
    res.cookie('temporary-cookie','temporary-value', {maxAge:3000})
    res.send('')
})


var sessions = {}
app.get('/session', function(req, res){
    console.log('cookies? ','\n', req.cookies)
    if ( !req.cookies.sessionID ) {
        var sessionID = Math.random()
        sessions[sessionID] = { created : new Date() }
        // httpOnly cookies are invisible to javascript
        res.cookie('sessionID', sessionID, {httpOnly : true})
        res.send(`
            <h1>Your session was created at ${sessions[sessionID].created}</h1>
        `)

    }
    else {
        var sessionID = req.cookies.sessionID
        res.send(`
            <h1>You've had an active session since ${sessions[sessionID].created}</h1>
        `)
    }
    res.send('')
})


app.get('/sign-up', function(req, res){
    res.send(`
        <form method="POST" action="/sign-up">
            <input placeholder="username" name="username">
            <input placeholder="password" name="password">
            <input type="submit" value="SUBMIT!">
        </form>
    `)
})

app.get('/log-in', function(req, res){
    res.send(`
        <form method="POST" action="/log-in">
            <input placeholder="username" name="username">
            <input placeholder="password" name="password">
            <input type="submit" value="SUBMIT!">
        </form>
    `)
})

// in a real app, users would be stored in the database. user sessions might also be stored in a (different) database.
var users = {}
var userSessions = {}
app.post('/sign-up', function(req, res){
    console.log('body: \n', req.body)
    console.log('users: \n', users)
    console.log('=-=-=-=-=-=-=-=-=-=')
    if ( !(users[req.body.username]) ) {
        console.log('new user')
        users[req.body.username] = {
            username : req.body.username,
            password : req.body.password,
        }
        var userSessionID = Math.random()
        userSessions[userSessionID] = {username : req.body.username}
        res.cookie('userSessionID', userSessionID, {httpOnly:true})
        res.redirect('/dashboard')
    }
    else {
        res.send(`
            <h1>ERROR</h1>
            <p>That username exists.</p>
            <p><em>Try to be more creative.</em></p>
        `)
    }
})

app.post('/log-in', function(req, res){
    if ( users[req.body.username] && req.body.password === users[req.body.username].password){
        var userSessionID = Math.random()
        userSessions[userSessionID] = {username : req.body.username}
        res.cookie('userSessionID', userSessionID, {httpOnly : true})
        res.redirect('/dashboard')
    }
    else {
        res.send(`
            <h1>ERROR</h1>
            <p>Wrong username or password.</p>
            <p><em>Stop Hacking.</em></p>
        `)
    }
})

var isLoggedIn = function(req, res, next){
    if ( req.cookies.userSessionID && ( req.cookies.userSessionID in userSessions )){
        next()
    }
    else {
        res.redirect('/log-in')
    }
}

app.get('/dashboard', isLoggedIn, function(req, res){
    console.log('dashboard')
    var username = users[userSessions[req.cookies.userSessionID].username].username
    res.send(`
        <h1>Welcome back, ${username}.</h1>
        <p><em>We missed you.</em></p>
    `)
})


app.listen(4321)