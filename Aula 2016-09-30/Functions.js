

var lastState;


function Calculator(name) {
    //console.log("this is: ");
    //console.log(this);

    this.name = name;
    this.state = [];


    this.add = function(x, y) {
        // console.log("add:");
        // console.log(this);

        // I repeated the following three lines of code several
        // timer because I was cohersed by students.
        let res =  x + y;
        this.state.push(res);
        return res;
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

// 1st - as a global function:  this - Global object
Calculator();


// 2nd - as a constructor function: this - the object constructed by the new Operator
var c = new Calculator("calc1");
var c1 = new Calculator("calc2");

console.log(""+ c);
console.log(c1.toString());


// 3rd - as a method: this - the object expression used to call the function
c.add(2,3);

var res = c.add(5, c.getState())

console.log(res)




// var calc = new Calculator();
//
// calc.add(2,3);


