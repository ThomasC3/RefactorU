// function buttonClicker() {
//     array.reduce(function(memo, el) {
    
//     }, 30)
// }
// button.addEventListener('click', buttonClicker(days))

// 1. Write a function called Namer that accepts the following arguments:
// First Name:
// Last Name:
// Callback Function:

// 2. Write the callback function to be passed into Namer. It should accept the following argument:
// Full name of the person (first and last in a single string)

// The callback function should console.log the full name

// 3. Call Namer with arguments and pass in the callback.

// function Namer(collection, callback) {
//     var result = callback(collection)
//     return result
// }
// var fullName = Namer (['Tal', 'Box']), function(arg){
//     return arg.join(' ')
// })
// console.log(fullname)

useCallback(5, callbackX);

function useCallback(x, callbackX){
    document.write('hello' + '<br>');
    callback();
}

function callbackX(){
    document.write('This is the callbackX function')
}