import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

export function usePosts() {
  const store = useStore();
  const posts = ref(store.state.post.posts);
  const page = ref(store.state.post.page);
  const limit = ref(store.state.post.limit);
  const totalPages = ref(store.state.post.totalPages);
  const isPostLoading = ref(store.state.post.isPostLoading);

  const fetching = async () => {
    try {
      setTimeout(async () => {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: page.value,
              _limit: limit.value,
            },
          }
        );
        store.commit(
          'post/setTotalPages',
          Math.ceil(response.headers['x-total-count'] / limit.value)
        );
        totalPages.value = store.state.post.totalPages;
        // console.log(store.state.post.totalPages);

        store.commit('post/setPosts', response.data);
        posts.value = store.state.post.posts;

        store.commit('post/setLoading', false);
        isPostLoading.value = store.state.post.isPostLoading;
      }, 300);
    } catch (error) {
      console.log('Ошибка: ', error);
    } finally {
    }
  };

  onMounted(fetching);

  return {
    posts,
    page,
    limit,
    totalPages,
    isPostLoading,
  };
}
