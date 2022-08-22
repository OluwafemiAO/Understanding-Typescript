let userInput: string | number;
let userName: string;

userInput = 5;
userInput = 'Femi';
if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
    // while (true) {}
}

generateError('An error occured!', 5000);