import { calculator, clear } from "./utils/calcFunctions";

const form =document.querySelector('#calc') as HTMLFormElement;
const operationButton: Array<HTMLInputElement> = Array.prototype.slice.call(document.querySelectorAll('#btn'));

operationButton.forEach((element)=>{
    
    element.addEventListener('click',()=>{
        if(element.value==='<-'){
            clear(form);
        } else if(element.value === 'sin' || element.value ==='cos' || element.value==='tan' || element.value==='sqrt' ||
         element.value ==='log' || element.value ==='exp'  ){
             form.display.value+=`Math.${element.value}(`;
        } else if(element.value==='='){
            calculator(form);
        } else if(element.value==='n!'){
            form.display.value+='!';
        } else if(element.value==='^'){
            form.display.value+='Math.pow('
        } else if(element.value==='l2e'){
            form.display.value+='Math.LOG2E'
        } else if(element.value==='l10e'){
            form.display.value+='Math.log10'
        } else if(element.value ==='E' || element.value==='PI' || element.value==='LN2'){
            form.display.value+=`Math.${element.value}`
        } else if(element.value==='C'){
            form.display.value='';
        }
        
        else {
            form.display.value+=element.value;
        }
    })
});



