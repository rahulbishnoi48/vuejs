import { Books } from "@/interface/book-blogs";


export const arrayForm =(data:Record<string, any> ):Books=>{
    const newArr=[];
    for (const [key, value] of Object.entries(data)) {
            newArr.push(data[key]);
    }
    return newArr;
}