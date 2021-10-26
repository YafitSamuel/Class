// =============================================class============================================================

// Class-
// A class is a template that has its objects that users use in Class' Keyword and 
// always have a large letter ratio.
// After creating the class a constructor is built which is after excluding objects with fields
// We will place the same information

class Cars {}

class Dog {
  name;
  age;
  type;
}

class Cat {
  name;
  age;
  type;
  constructor() {}
}

class Student {
  name;
  class;
  hight;
  constructor(nameFromOut, ageFromOut, hightFromOut) {
    this.name = nameFromOut;
    this.name = ageFromOut;
    this.name = hightFromOut;
  }
}

let student1 = new Student("yafit", "shir", 78);
let student2 = new Student("tikva", "shir", 4);

console.log(student1);
console.log(student2);

class work {
  name;
  lastName;
  year;
  phone;
  constructor(nameFromOut, lastNameFromOut, yearFromOut, phoneFromOut) {
    this.name = nameFromOut;
    this.lastName = lastNameFromOut;
    this.year = yearFromOut;
    this.phone = phoneFromOut;
  }
}

let work1 = new work("yafit", "shir", 78, 052346);
let work2 = new work("tikva", "shir", 4, 052346);
let work3 = new work("yafit", "shir", 78, 052346);

console.log(work1);
console.log(work2);
console.log(work3);

// 8. Create a user form:
// a. First name
// b. Last Name
// c. age
// Clicking Submit creates a user instance, with the same fields.
// The object will be printed to the log.
// The object will be printed to the screen.
// Display a table with the data.

class User {
  firstName;
  lastName;
  age;
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

btn.onclick = function () {
  let user1 = new User(firstName.value, lastName.value, age.value);
  console.log(user1);

  for (const item in user1) {
    document.write(`${item} :${user1[item]}`);
  }

  for (const item in user1) {
    document.write(
      `<table>
       <th>${item} </th>
       <th> : ${user1[item]} </th>
       </table>`
    );
  }

  document.write(`<button id="BTN"> ${user1.firstName} <button>`);

  BTN.onclick = function () {
    console.log(user1);
  };
};

class Student {
  firstName;
  lastName;
  age;
  email;
  Class;
  year;
  image;

  constructor(firstName, lastName, age, email, Class, image) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.Class = Class;
    this.year = year;
    this.image = image;
  }

  arrayTosString() {
    let str =
      this.firstName +
      this.lastName +
      this.age +
      this.email +
      this.class +
      this.year +
      this.image;
    return str.toString();
  }

  printToLog() {
    let console1 =
      this.firstName +
      this.lastName +
      this.age +
      this.email +
      this.Class +
      this.year +
      this.image;
    console.log(console1);
  }
}



