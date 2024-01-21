/** Creating DataBase of quetions */

const database = {
    data: [
        {
            question: `let a = {}, b = {}
console.log(a == b)
console.log(a === b)`,
            options: {
                a: "false false",
                b: "false true",
                c: "true false",
                d: "true true"
            },
            correctAnswer: "a"
        },
        {
            question: `What will be the output of the following code?
console.log(5 + '5');
            `,
            options: {
                a: "55",
                b: "10",
                c: "undefined",
                d: "error"
            },
            correctAnswer: "a"
        },
        {
            question: `How do you check the type of a variable in JavaScript?`,
            options: {
                a: "typeof variable",
                b: "typeOf(variable)",
                c: "varType(variable)",
                d: "checkType(variable)"
            },
            correctAnswer: "a"
        },
        {
            question: `What is the purpose of the 'this' keyword in JavaScript?`,
            options: {
                a: "Refers to the current object",
                b: "Refers to the previous object",
                c: "Refers to the global object",
                d: "Refers to the parent object"
            },
            correctAnswer: "a"
        },
        {
            question: `Which of the following is not a valid way to declare a JavaScript variable?`,
            options: {
                a: "var x = 5;",
                b: "let y = 'Hello';",
                c: "const z;",
                d: "const a = [1, 2, 3];"
            },
            correctAnswer: "c"
        },
        {
            question: `What is the purpose of the 'use strict' directive in JavaScript?`,
            options: {
                a: "Enforces a more secure JavaScript coding style",
                b: "Declares a variable with strict scope",
                c: "Defines strict equality for comparisons",
                d: "Enforces cleaner and more readable code"
            },
            correctAnswer: "a"
        },
        {
            question: `What is the output of the following code?
console.log(typeof null);
            `,
            options: {
                a: "object",
                b: "null",
                c: "undefined",
                d: "string"
            },
            correctAnswer: "a"
        },
        {
            question: `How can you prevent a JavaScript function from being called as a constructor?`,
            options: {
                a: "Use the 'constructor' keyword",
                b: "Check for 'instanceof Function' inside the function",
                c: "Wrap the function in an IIFE",
                d: "Set the function's prototype to null"
            },
            correctAnswer: "c"
        },
        {
            question: `What does the 'event.preventDefault()' method do in JavaScript?`,
            options: {
                a: "Stops the event from bubbling up the DOM",
                b: "Prevents the default behavior associated with the event",
                c: "Halts the execution of the entire script",
                d: "Clears the event object properties"
            },
            correctAnswer: "b"
        },
        {
            question: `Which of the following statements about closures in JavaScript is true?`,
            options: {
                a: "A closure is created when a function is declared inside another function",
                b: "Closures cannot access variables from the outer function",
                c: "A closure is only formed with arrow functions",
                d: "Closures can only be used in asynchronous code"
            },
            correctAnswer: "a"
        }
    ]
};


module.exports = database