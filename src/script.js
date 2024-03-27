//Functional Programming in JavaScript
//Functional Programming is the process of 
//building software by composing pure functions,
//avoiding shared state, mutable data, 
//and side-effects.

//Assign a function to a variable
//Topic One: First Class Functions
//Lesson 1: Assign a function to a variable

//old way without arrow function
const someTopic = function printTopic(t) {
  return `You are learning ${t}`;
}

//new way with arrow function
const topic = (t) => `You are learning ${t}`; 

display(topic('JavaScript First Class Functions!'));
display(someTopic('JavaScript Functional Programming!'));
//----------------------------------------------
//Lesson 2: Pass a function as a parameter

const numbers = [1,2,3,4,];
//simple way to multiply each number by 2
const timesTwo = (number) => number * 2;

//using map to multiply each number by 2
const multiplyByTwo = numbers.map((n) => n * 2);

display(multiplyByTwo);
display(numbers);

//----------------------------------------------
//Lesson 3: Return a function from another function

//old way
function firstClassFunction() {
  return function() {
    display( 'I am a function returned from another function');
  }
}

//new way
const firstClass = () => () => display('I am a function returned from another function');

let returnedFunction = firstClassFunction();
returnedFunction();

let returnedFunction2 = firstClass();
returnedFunction2();

//----------------------------------------------
//Note:
//Benefits of first-class functions:
//1. They are Reusable
//2. They are Flexible
//3. They are Composable
//4. They are Testable
//5. They are Predictable
//6. They are Maintainable
//7. They are Debuggable
//8. They are Readable
//9. They are Scalable

//----------------------------------------------
//Topic Two: Pure Functions
//Note:
//Pure functions are functions that always return the same output given the same input.
//Pure functions do not produce side effects.

//Lesson 1: Pure Functions
//Given our topic function above
//const topic = (t) => `You are learning ${t}`;
//display(topic('JavaScript First Class Functions!'));
//we can say that the function is pure because it always returns the same output given the same input.

//Lesson 2: Impure Functions
//Given the variable and function below
let greeting = 'Hello';
const topic2 = (t) =>`${greeting} You are learning ${t}`;
display(topic2('Impure Functions!'));

//we can say that the topic2 function is impure 
//because it produces a different output given the same input.
//The output is dependent on the greeting variable which is outside the function.
//thereby changing the output of the function.
//This is an example of a side effect. and the variable greetings is the side effects

//----------------------------------------------
//Examples of side effects
//1. Reading or Changing the file system
//2. Inserting a record into a database
//3. Making an HTTP/API request or calls via a network (fetch/xhr//4. Changing or Mutating data or the input
//5. Printing to a screen or console or logging
//6. DOM Query/Manipulation or updating
//7. Reading from a global state

//Important Note:
//because we cannot predict the output of the function
//All from 1 to 8 all rely on external factors 
//with external work being involved
//A Pure function should be side effect free


//----------------------------------------------

//Lesson 3: Closure
//Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.
//simply a closure gives you access to an outer function's scope from an inner function.
//In JavaScript, closures are created every time a function is created, at function creation time.

//Example of Closure
// Outer function
const welcomeAuthor = () => {
  //Outer function variable
  let author = 'Anthony V. Claverie';
  //Inner function
  const welcome = () => `Welcome ${author}`;
  //return inner function
  return welcome;
};

//assign the outer function to a variable
const authorWelcome = welcomeAuthor();
display(authorWelcome());

//Use case for a Closure
//Track number of clicks on a button
//bad way
const updateClickCounter = () => {
  var counter = 0;
  return counter++;
};

const counterResult = updateClickCounter();
display(counterResult);
display(counterResult);
display(counterResult);
display(counterResult);
display(counterResult);
//Note how counterResult always returns 0
//This is because the counter variable is reinitialized to 0 every time the function is called

//good way
const updateClickCounter2 = () => {
  let counter = 0;

  //inner function
  const incrementCounter = () => counter++;

  //return inner function
  return incrementCounter;
};

const counterResult2 = updateClickCounter2();
display(counterResult2());
display(counterResult2());
display(counterResult2());
display(counterResult2());
display(counterResult2());

//Note how counterResult2 returns 0, 1, 2, 3, 4
//This is because the counter variable is stored in the closure
//and is not reinitialized every time the function is called

//My personal creative examples of Closures
const bookshelf = () => {
  // outer function variable
  const booklist = [];
  //inner function
  const addBook = (book) => {
    booklist.push(book);
    // booklist.forEach((b) => display(b));
  }

  //return inner function
  return {
    //wrapper function to access inner function
    shelf1(abook){
      addBook(abook);
    },
    //wrapper function to access inner outer function variable
    value() {
      return booklist;
    },
  };
};

const BookCase = bookshelf();

BookCase.shelf1('JavaScript for Beginners');
BookCase.shelf1('JavaScript for Intermediate');
BookCase.shelf1('JavaScript for Advanced');
BookCase.shelf1('JavaScript for Experts');
BookCase.shelf1('JavaScript for Masters');
BookCase.shelf1('JavaScript for Legends');
BookCase.value().forEach((b) => display(b));

//----------------------------------------------


