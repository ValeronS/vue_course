import { ref } from 'vue';
import { useStore } from 'vuex';

export default function useCreatePost(posts) {
  const store = useStore();
  const dialogVisible = ref(store.state.post.dialogVisible);

  const createPost = (post) => {
    posts.value.push(post);
    store.commit('post/setPosts', posts.value);
    store.commit('post/setShowDialog', false);
    dialogVisible.value = store.state.post.dialogVisible;
  };

  const showDialog = () => {
    store.commit('post/setShowDialog', true);
    dialogVisible.value = store.state.post.dialogVisible;
  };

  return {
    dialogVisible,
    createPost,
    showDialog,
  };
}
