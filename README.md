## Modern Javascript 

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![ES6](https://img.shields.io/badge/ES6-ES2015-blue.svg?style=for-the-badge&logo=javascript)

**By:** Johann Kerbrat, Engineering Manager at Uber Works

**Weight:** 1

**Project will start Sep 25, 2023 4:00 AM, must end by Sep 26, 2023 4:00 AM** 

![Checker](https://img.shields.io/badge/checker-released-green.svg?style=for-the-badge)
![Auto review](https://img.shields.io/badge/auto_review-launch_at_deadline-orange.svg?style=for-the-badge)

### Concepts

For this project, we expect you to look at these concepts:

:globe_americas: Modern Javascript 

:wrench: Software Linter

### Resources

Read or watch:

[![ECMAScript 6](https://img.shields.io/badge/MDN-ECMAScript%206-blue.svg?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ECMAScript_6)

### Learning Objectives 

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6 
- Iterators and for-of loops

### Requirements

**General**

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using the Jest Testing Framework  
- Your code will be analyzed using the linter ESLint along with specific rules that we’ll provide
- All of your functions must be exported

**Setup**

- Install NodeJS 12.11.x
- Install Jest, Babel, and ESLint
in your project directory, install Jest, Babel and ESList by using the supplied package.json and run npm install.

**Configuration files**  

Add the files below to your project directory

- package.json
- babel.config.js
- .eslintrc.js

**Finally...**

Don’t forget to run npm install from the terminal of your project folder to install all necessary project dependencies.

### Tasks

0. Const or let?

mandatory

Modify

function taskFirst to instantiate variables using const

function taskNext to instantiate variables using let

```js
export function taskFirst() {
var task = 'I prefer const when I can.';
return task; 
}
