# 0x04. Typescript 

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## About 

![About](https://img.icons8.com/external-justicon-lineal-justicon/24/000000/external-about-online-marketing-justicon-lineal-justicon.png) This project is focused on learning TypeScript fundamentals including:

- Basic types
- Interfaces, classes and functions  
- Working with the DOM
- Generics
- Namespaces
- Declaration merging
- Ambient namespaces
- Nominal typing

## Resources 

![Reading](https://img.icons8.com/external-justicon-lineal-justicon/24/000000/external-reading-e-learning-justicon-lineal-justicon.png) ### Read or watch

- [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [TypeScript documentation](https://www.typescriptlang.org/docs/handbook/intro.html)

## Learning Objectives

![Learning objectives](https://img.icons8.com/external-justicon-lineal-justicon/24/000000/external-learning-e-learning-justicon-lineal-justicon-2.png) By the end of this project, you should be able to:

- Explain basic types in TypeScript
- Use interfaces, classes and functions  
- Work with the DOM using TypeScript
- Use generic types
- Organize code using namespaces
- Merge declarations
- Use an ambient namespace to import an external library
- Implement basic nominal typing with TypeScript

## Requirements

![Requirements](https://img.icons8.com/external-justicon-lineal-justicon/24/000000/external-requirement-business-justicon-lineal-justicon.png)

- Allowed editors: `vi`, `vim`, `emacs`, Visual Studio Code
- All files end with a new line
- TypeScript files use the `.ts` extension 
- `webpack` compiler should not show any errors  
- Includes a `README.md` at the root with project description

## Setup

![Terminal](https://img.icons8.com/external-justicon-lineal-justicon/24/000000/external-terminal-devops-justicon-lineal-justicon.png)

## Compilation 

![Compilation](https://img.icons8.com/external-justicon-lineal-justicon/24/000000/external-compilation-programming-justicon-lineal-justicon.png)

## Linting

![Linting](https://img.icons8.com/external-justicon-flat-justicon/24/000000/external-linting-programming-justicon-flat-justicon.png)


## Running Tests

![Testing](https://img.icons8.com/external-justicon-lineal-justicon/24/000000/external-testing-continuous-integration-justicon-lineal-justicon.png)

## Tasks

### 0. Interface for a student

- Create interface `Student` 
- Create two student variables using the interface
- Render a table with student names and locations

### 1. Let's build a Teacher interface

- Create `Teacher` interface with required attributes
- Add ability to add any attribute to `Teacher` objects

### 2. Extending the Teacher class 

- Create `Director` interface extending `Teacher` 
- Add `numberOfReports` attribute

### 3. Printing teachers

- Create `printTeacher` function to print first letter of first name and full last name
- Create `printTeacherFunction` interface for the function

### 4. Writing a class

- Create `StudentClass` class with specific methods
- Use interfaces to describe the constructor and class

### 5. Advanced types Part 1

- Create `DirectorInterface` and `TeacherInterface` interfaces
- Implement the interfaces in `Director` and `Teacher` classes
- Create `createEmployee` function to return `Director` or `Teacher` based on a salary parameter
  
### 6. Creating functions specific to employees

- Create `isDirector` type predicate function
- Create `executeWork` function to call different methods based on employee type

### 7. String literal types

- Create `Subjects` string literal type
- Create `teachClass` function that returns strings based on subject argument
  
### 8. Ambient namespaces

- Create `RowID` type and `RowElement` interface
- Create ambient namespace with types for `crud.js` module
- Use ambient namespace in `main.ts`

### 9. Namespace & Declaration merging 

- Create `Teacher` interface and `Subject` class in `Subjects` namespace
- Merge declarations to add experience attributes for different subjects
- Create classes for `Cpp`, `React`, and `Java` subjects

### 10. Update task 4 main file

- Import namespace objects 
- Create teacher instance
- Call subject methods on teacher

### 11. Brand convention & Nominal typing

- Create `MajorCredits` and `MinorCredits` interfaces and add brand property
- Create functions to sum credits based on brand property


