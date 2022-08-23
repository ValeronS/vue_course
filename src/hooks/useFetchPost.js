import axios from 'axios';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { onMounted, ref } from 'vue';

export function useFetchPost() {
  const store = useStore();
  const currentId = ref(useRoute().params.id);
  const isPostLoading = ref(true);
  const postsLength = ref(0);
  const post = ref([]);
  const postTitle = ref('');
  const postBody = ref('');

  const fetchPost = async () => {
    store.commit('post/setLoading', true);
    isPostLoading.value = store.state.post.isPostLoading;
    setTimeout(async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${currentId.value}`
        );
        const allPosts = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        postsLength.value = allPosts.data.length;

        post.value = response.data;
        postTitle.value = response.data.title;
        postBody.value = response.data.body;

        store.commit('post/setLoading', false);
        isPostLoading.value = store.state.post.isPostLoading;
      } catch (error) {
        console.log(error);
      } finally {
      }
    }, 200);
  };

  onMounted(fetchPost);

  return {
    currentId,
    isPostLoading,
    postsLength,
    post,
    postTitle,
    postBody,
    fetchPost,
  };
}
