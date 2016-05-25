var phoneNumber = prompt('What is your phone number? (Dont worry, we hate spam too)');

alert(phoneNumber.charAt(3)=== '-' && phoneNumber.charAt(7) === '-');

var birthDate = prompt('What is your birthdate?');

alert(birthDate.charAt(2)==='/' && birthDate.charAt(5) ==='/');

var zipCode = prompt('What is your zip code?');

alert(zipCode.length === 5 || (zipCode.charAt(5) === '-' && zipCode.length === 10));

var state = prompt('What state are you from?');

alert(/^[A-Z]/.test(state) && state.length === 2);

var married = prompt('Are you married?');

alert((married.toLowerCase()) === 'yes' || (married.toLowerCase() === 'no'));

