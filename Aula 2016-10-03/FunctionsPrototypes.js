'use strict'

function Person(name, age) {
    this.name = name;
    this.age = age;

}

Person.prototype.toString = function () {
    return this.name + " is " + this.age + " years old";
}


function Student(name, age, number) {
    Person.call(this, name, age);
    this.number = number;
}



Student.prototype = Object.create(Person.prototype);
Student.prototype.toString = function () {
    return Person.prototype.toString.call(this) +  this.number;
}


var s = new Student(123);

s.toString();



Person.prototype.theGreatest = "SLB";



let p1 = new Person("João", 25);
let p2 = new Person("Ana", 22);

console.log("" + p1);
console.log(p2.toString());

console.log(p1.theGreatest);
console.log(p2.theGreatest);

console.log(p1.theMightyGreatest);
console.log(p2.theMightyGreatest);


Person.prototype.theMightyGreatest = "Benfica";


console.log(p1.theMightyGreatest);
console.log(p2.theMightyGreatest);

console.log(p1.constructor);
console.log(p2.constructor);

p1.toString = function () {
  return "bla, bla, bla";
}


console.log("" + p1);
console.log(p2.toString());


console.log(p1.toString == p2.toString);