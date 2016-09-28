



console.log(x);
f1();

function f1() {
    console.log("in function: " + x);


    for(i = 0; i < 3; ++i) {
        f2();
    }

    var x = 10;

    console.log("in function: " + x);

}

function f2() {
    i = 5;
}

console.log(x);
var x = 20;
console.log(x);

