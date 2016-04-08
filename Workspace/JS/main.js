var country = 'canada'
var country = 'texas'

var age = 19
var candrink = false

if ( age >= 21 ) { 
    candrink = true
}
else if ( age >= 18&& country === 'canada') {
    candrink = true
}
else {
    candrink = false
}

console.log('Will you be served?' + candrink)

    