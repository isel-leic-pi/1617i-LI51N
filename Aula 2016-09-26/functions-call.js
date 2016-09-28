


function sum(x, y) {
    x = x || 0;
    y = y || 0;

    // if(y == undefined && x == undefined)
    //     return 0;
    // if(y == undefined)
    //     return x;
    // if(x == undefined)
    //     return y;
    return x + y;
}

console.log(sum(undefined, 3));


function sum1() {
    let total = 0;
    for(let i = 0; i < arguments.length; ++i) {
        // if(arguments[i] != undefined && arguments[i] != null)
        //     total += arguments[i];

        total += Number(arguments[i]) || 0;
    }
    return total;
}

console.log("Call 1:" + sum1());
console.log("Call 2:" + sum1(2));
console.log("Call 3:" + sum1(2,3));
console.log("Call 4:" + sum1(2,3,4));
console.log("Call 5:" + sum1(2,3,4,5));
console.log("Call 6:" + sum1(2,undefined,4,undefined, null));
console.log("Call 7:" + sum1("2.3",undefined,4,undefined, null));






