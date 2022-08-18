import Main from '@/pages/Main';
import { createRouter, createWebHashHistory } from 'vue-router';
import PostsPage from '@/pages/PostsPage';
import About from '@/pages/About';
// import PostIdPage from '@/pages/PostIdPage';
import PostIdPage from '@/pages/PostIdPageCompApi';
import PostsPageWithStore from '@/pages/PostsPageWithStore';
import PostsPageCompositionApi from '@/pages/PostsPageCompositionApi';

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
    path: '/postspage/:id',
    component: PostIdPage,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/store',
    component: PostsPageWithStore,
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
