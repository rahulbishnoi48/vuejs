export default{
    computed:{
        filterBooks: function(){
            return this.books.filter((entry)=>{
                return entry.title.match(this.search);
            })
        },
        filterBlogs: function(){
            return this.blogs.filter((entry)=> {
                return entry.title.match(this.search);
            })
        }
    }
}