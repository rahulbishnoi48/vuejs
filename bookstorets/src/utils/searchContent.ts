import {Books,Book} from '@/interface/book-blogs';
type dataObj={
    searchField:string,
    search:string,
    books:Books, 
}

export const filterBooks =(data:dataObj):Books=>{
    const searchField = data.searchField;
    // if(typeof data.books===`object`){
        if(searchField===''){
            return data.books.filter((entry:Book)=>{
                return entry.title.match(data.search);
            })
        }else{
            return data.books.filter((entry:Book)=>{
                for (const [key, value] of Object.entries(entry)) {
                    if (key===searchField){
                        return value.match(data.search);
                    }else{
                        continue;
                    }
                }
            })
        }
    // }
}