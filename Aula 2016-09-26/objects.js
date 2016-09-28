let x = new Object();
x.a = 10;

x["O maior clube do mundo!!!!"] = "SLB";
console.log("o maior:" + x["O maior clube do mundo!!!!"]);
var a = "a";

console.log(x.a);


x.A = 20;

for(let k in x) {
    console.log(k + "=" + x[k]);
}

let f = function () {
    return "Benfica";

};
f.x = 123;

x = {
     a: 10,
    "O maior clube do mundo!!!!": "SLB",
    A: 20,
    b: f
 }

 console.log("stringify:" + JSON.stringify(x));


delete x.a;
console.log("-----------------")

for(let k in x) {
    console.log(k + "=" + x[k]);
}



console.log("--------------------------------");
console.log("Now with a function object");


x = function () {
    return "O maior";
}

x.a = 10;

x["O maior clube do mundo!!!"] = "SLB";
console.log(x["O maior clube do mundo!!!!"]);
var a = "a";

console.log(x.a);
console.log(x[""]);


x.A = 20;




for(let k in x) {
    console.log(k + "=" + x[k]);
}

delete x.a;
console.log("-----------------")

for(let k in x) {
    console.log(k + "=" + x[k]);
}


console.log(x());


