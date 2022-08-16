import axios from 'axios';
import { ref } from 'vue';

export default function useloadMorePosts(posts, page, limit, totalPages) {
  if (page.value > 0) {
  }
  const loadMorePosts = async () => {
    page.value += 1;
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
      totalPages.value = Math.ceil(
        response.headers['x-total-count'] / limit.value
      );
      posts.value = [...posts.value, ...response.data];
      // console.log(response);
    } catch (error) {
      console.log('Ошибка: ', error);
    } finally {
    }
  };

  return {
    loadMorePosts,
  };
}
