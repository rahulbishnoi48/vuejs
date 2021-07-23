"use strict";
var input = '';
var form = document.querySelector('#calc');
var displayInput = document.querySelector('.display');
var operationButton = document.querySelectorAll('#btn');
console.log(operationButton);
// operationButton.forEach((element)=>{
//     console.log(element.value);  
//     element.addEventListener('click',()=>{
//         if(element.nodeValue=='C'){
//             console.log('1');
//             input='';
//             console.log('rahul');
//         }
//     })
// });
var clear = function (calc) {
    var size = calc.display.value.length;
    calc.display.value = calc.display.value.substring(0, size - 1);
};
var calculator = function (calc) {
    var size;
    var n;
    if (calc.display.value.includes("!")) {
        size = calc.display.value.length;
        n = Number(calc.display.value.substring(0, size - 1));
        var f = 1;
        var i = void 0;
        for (i = 2; i <= n; i++) {
            f = f * i;
        }
        calc.display.value = String(f);
    }
    else if (calc.display.value.includes("%")) {
        size = calc.display.value.length;
        n = Number(calc.display.value.substring(0, size - 1));
        calc.display.value = String(n / 100);
    }
    else {
        calc.display.value = eval(calc.display.value);
    }
};
