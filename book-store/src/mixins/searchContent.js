export default{
    computed:{
        filterBooks: function(data){
            let searchField = data.searchField
            if(searchField===''){
                return data.books.filter((entry)=>{
                    return entry.title.match(this.search);
                })
            }else{
                return data.books.filter((entry)=>{
                    return entry[searchField].match(this.search);
                })
            }
            
        },
        filterBlogs: function(data){

            let searchField = data.searchField
            if(searchField===''){
                return data.blogs.filter((entry)=>{
                    return entry.title.match(this.search);
                })
            }else{
                return data.blogs.filter((entry)=>{
                    return entry[searchField].match(this.search);
                })
            }
        }
    }
}