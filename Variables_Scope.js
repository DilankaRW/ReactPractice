// Variable Scope
// let - Block Scope
// var - Function Scope
// const - Block Scope

var _var = 10;
let _let = 20;
const _const =  30;

function scopeTest() {
    var _var2 = 100;
    let _let2 = 200;
    const _const2 = 300;

    if (true) {
        var _var3 = 'one';
        let _let3 = 'two';
        const _const3 = 'three';
        console.log(_var3, _let3, _const3);
    }
    console.log(_var2, _let2, _const2);
}

scopeTest();

console.log(_var);