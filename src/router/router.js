import Main from '@/pages/Main';
import { createRouter, createWebHistory } from 'vue-router';
import PostsPage from '@/pages/PostsPage';
import About from '@/pages/About';
import PostIdPage from '@/pages/PostIdPage';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/postspage',
    component: PostsPage,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/postspage/:id',
    component: PostIdPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
