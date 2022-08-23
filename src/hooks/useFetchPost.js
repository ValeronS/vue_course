import axios from 'axios';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { onMounted, ref } from 'vue';

export function useFetchPost() {
  const store = useStore();
  const currentId = ref(useRoute().params.id);
  const isPostLoading = ref(true);
  const post = ref([]);
  const postTitle = ref('');
  const postBody = ref('');

  const fetchPost = async () => {
    console.log(store.state.post.isPostLoading);
    store.commit('post/setLoading', true);
    isPostLoading.value = store.state.post.isPostLoading;
    setTimeout(async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${currentId.value}`
        );
        post.value = response.data;
        postTitle.value = response.data.title;
        postBody.value = response.data.body;

        store.commit('post/setLoading', false);
        isPostLoading.value = store.state.post.isPostLoading;
      } catch (error) {
        console.log(error);
      } finally {
      }
    }, 300);
  };

  onMounted(fetchPost);

  return {
    currentId,
    isPostLoading,
    post,
    postTitle,
    postBody,
    fetchPost,
  };
}
