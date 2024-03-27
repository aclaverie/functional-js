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
//Lesson 4: Store a function in an object

