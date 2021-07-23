export default function arrayForm(data){
    console.log(data);
    let newArr=[];
    for(let key in data){
        data[key].id=key;
        newArr.push(data[key]);
    }
    return newArr;
}