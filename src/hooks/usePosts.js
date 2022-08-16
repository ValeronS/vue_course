import axios from 'axios';
import { onMounted, ref } from 'vue';

export function usePosts() {
  const posts = ref([]);
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
        posts.value = response.data;
        // console.log(response);
        isPostLoading.value = false;
      }, 700);
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
