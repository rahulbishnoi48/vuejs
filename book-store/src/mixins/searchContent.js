export default{
    computed:{
        filterBooks: function(){
            return this.books.filter((entry)=>{
                return entry.title.match(this.search);
            })
        },
        filterBlogs: function(data){
            console.log(data);
            return data.blogs.filter((entry)=> {
                return entry.title.match(this.search);
            })
        }
    }
}