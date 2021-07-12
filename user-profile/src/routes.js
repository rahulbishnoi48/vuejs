import profile from './components/profile.vue';
import posts from'./components/posts.vue';
import photos from './components/photos.vue';
import singlePost from './components/singlePosts.vue';

export default[
    {
        path: '/:profileid',component:profile
    },
    {
        path: '/posts', component : posts
    },
    {
        path : '/posts/:id',component : singlePost
    },
    {
        path : '/photos' , component: photos
    }
]