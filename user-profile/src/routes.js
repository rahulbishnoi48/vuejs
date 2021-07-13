import profile from './components/profile.vue';
import posts from'./components/posts.vue';
import photos from './components/photos.vue';
import singlePost from './components/singlePosts.vue';

export default[
    {
        path: '/:id',component:profile
    },
    {
        path: '/posts/:id', component : posts
    },
    {
        path : '/posts/single/:postid',component : singlePost
    },
    {
        path : '/photos/:id' , component: photos
    }
]