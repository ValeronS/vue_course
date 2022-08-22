import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

export function usePosts() {
  const store = useStore();
  const posts = ref(store.state.post.posts);
  const page = ref(1);
  const limit = ref(10);
  const totalPages = ref(0);
  const isPostLoading = ref(true);

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
        totalPages.value = Math.ceil(
          response.headers['x-total-count'] / limit.value
        );
        store.commit('post/setPosts', response);
        console.log(response);
        console.log(posts);
        isPostLoading.value = false;
      }, 500);
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
