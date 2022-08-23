import Main from '@/pages/Main';
import { createRouter, createWebHashHistory } from 'vue-router';
import About from '@/pages/About';
import PostIdPage from '@/pages/PostIdPageCompApi';
import PostsPageCompositionApi from '@/pages/PostsPageCompositionApi';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/postspage/:id',
    component: PostIdPage,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/composition',
    component: PostsPageCompositionApi,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(process.env.BASE_URL),
});

export default router;
