export default function arrayForm(data){
    let newArr=[];
    for(let key in data){
        data[key].id=key;
        newArr.push(data[key]);
    }
    console.log(newArr);
    return newArr;
}