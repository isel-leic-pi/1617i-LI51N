'use strict'

var lastState;


function Calculator(name) {
    //console.log("this is: ");
    //console.log(this);

    this.name = name;
    this.state = [];


    this.add = function(x, y) {
        // console.log("add:");
        console.log(this);

        // I repeated the following three lines of code several
        // timer because I was cohersed by students.
        let res =  x + y;
        this.state.push(res);
        return res;
    }

    this.addPlus = function() {
        let sum = 0;

        // for(let i = 0; i < arguments.length; ++i) {
        //     sum += arguments[i] || 0;
        // }

        // arguments.forEach = [].forEach;
        //arguments.forEach((e) => sum += e);

        //[].forEach.call(arguments, (e) => sum += e);
        Array.prototype.forEach.call(arguments, (e) => sum += e);

        return sum;
    }

    this.subtract = function(x, y) {
        let res =  x + y;
        this.state.push(res);
        return res;
    }

    this.divide = function(x, y) {
        let res =  x + y;
        this.state.push(res);
        return res;
    }

    this.multiply = function(x, y) {
        let res =  x + y;
        this.state.push(res);
        return res;
    }

    this.getState = function () {
        return this.state.length > 0 ? this.state.pop() : undefined;
    }

    this.toString = function() {
        return this.name;
    }
}


// Calling functions


console.log("---- Calling a function globally ----------");
// 1st - as a global function:  this - Global object
//Calculator();


console.log("---- Calling a function as a constructor function ----------");
// 2nd - as a constructor function: this - the object constructed by the new Operator
var c = new Calculator("calc1");
var c1 = new Calculator("calc2");


console.log("---- Calling a function as a method ----------");
console.log(""+ c);
console.log(c1.toString());


// 3rd - as a method: this - the object expression used to call the function
c.add(2,3);
var res = c.add(5, c.getState())
console.log(res)



// 4.1 rd - as a method: this - the object expression used to call the function
console.log("---- Calling a function using call ----------");
console.log(c.add.call(c1, 4, 6));


// 4.2 rd - as a method: this - the object expression used to call the function
console.log("---- Calling a function using apply ----------");
console.log(c.add.apply(c1, [4, 6]));


console.log("---- Calling a function using apply with arguments ----------");


console.log(c.addPlus(2,3,4,5));

var a = [1,2,3,4,5];
console.log(c.addPlus.apply(c, a));

