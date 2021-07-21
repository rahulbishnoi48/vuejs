type calcObj= {
    display:{
        value:string
    }
}


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