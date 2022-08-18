import axios from 'axios';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';

export function useFetchPost(isPostLoading) {
  const currentId = ref(useRoute().params.id);
  const post = ref([]);
  const postTitle = ref('');
  const postBody = ref('');

  const fetchPost = async () => {
    isPostLoading.value = true;
    setTimeout(async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${currentId.value}`
        );
        post.value = response.data;
        postTitle.value = response.data.title;
        postBody.value = response.data.body;
        // console.log(currentId.value);
        isPostLoading.value = false;
      } catch (error) {
        console.log(error);
      } finally {
      }
    }, 500);
  };

  onMounted(fetchPost);

  return {
    currentId,
    post,
    postTitle,
    postBody,
    fetchPost,
  };
}
