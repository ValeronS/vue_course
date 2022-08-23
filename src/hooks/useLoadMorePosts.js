import axios from 'axios';
import { useStore } from 'vuex';
import { ref } from 'vue';

export default function useloadMorePosts(posts, page, limit) {
  const store = useStore();
  const loadMorePosts = async () => {
    store.commit('post/setPage', page.value++);
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
        {
          params: {
            _page: page.value,
            _limit: limit.value,
          },
        }
      );
      store.commit('post/setPosts', [...posts.value, ...response.data]);
      posts.value = store.state.post.posts;
      // console.log('useLoadMorePosts');
    } catch (error) {
      console.log('Ошибка: ', error);
    } finally {
    }
  };

  return {
    loadMorePosts,
  };
}
