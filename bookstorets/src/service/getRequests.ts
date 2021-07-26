import {Book, Books} from '@/interface/book-blogs';

export const getBooks =async(): Promise<Books>=>{
    const response  =await fetch('https://bookblogs-a9a81-default-rtdb.asia-southeast1.firebasedatabase.app/books.json');
    return response.json();
}


export const getBlogs = async(): Promise <Books>=>{
    const response = await fetch('https://bookblogs-a9a81-default-rtdb.asia-southeast1.firebasedatabase.app/blogs.json')
    return response.json();
}


export const getSingleBlog = async(id:string): Promise <Book>=>{
    const response =await fetch("https://bookblogs-a9a81-default-rtdb.asia-southeast1.firebasedatabase.app/blogs/"+id+'.json');
    const data = await response.json();
    return data;
}


export const getSingleBook = async(id:string): Promise <Book>=>{
    const response = await fetch("https://bookblogs-a9a81-default-rtdb.asia-southeast1.firebasedatabase.app/books/"+id+".json")
    const data= response.json();
    return data;
}