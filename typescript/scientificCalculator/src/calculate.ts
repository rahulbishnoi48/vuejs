type calcObj= {
    display:{
        value:string
    }
}

type eventObj={
    target:{
        value:string
    }
};

let input:string='';

const form =document.querySelector('#calc') as HTMLFormElement;
const displayInput =document.querySelector('.display') as HTMLInputElement;

const operationButton = document.querySelectorAll('#btn');
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


const clear=(calc:calcObj):void=>{
    
    let size:number = calc.display.value.length;
    calc.display.value = calc.display.value.substring(0,size-1);
}

const calculator =(calc:calcObj):void=>{
    let size:number;
    let n:number;

    if(calc.display.value.includes("!")){
        size = calc.display.value.length;
        n = Number(calc.display.value.substring(0,size-1));
        let f:number=1;
        let i:number;
        for(i=2;i<=n;i++){
            f=f*i;
        }
        calc.display.value=String(f);
    }else if(calc.display.value.includes("%")){
        size = calc.display.value.length;
        n= Number(calc.display.value.substring(0,size-1));
        calc.display.value=String(n/100);
    }else{
        calc.display.value = eval(calc.display.value);
    }
}