// Import stylesheets
import './style.css';
import { ICourse } from './ICourse.ts';

let course: ICourse = {
  title: 'TypeScript BootCamp',
  subTitle: 'Learn Fundamentals of TypeScript',
  lessonsCount: 10,
};

console.log(course);
console.log('course type: ', typeof course);

type Person = {
  name: string;
  age: number;
};

type Employee = {
  position: string;
  salary: number;
};

type PersonEmployee = Person & Employee;

const john: PersonEmployee = {
  name: 'John',
  age: 30,
  position: 'Manager',
  salary: 50000,
};

console.log(john);
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
