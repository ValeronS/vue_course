import { ref } from 'vue';

export default function useCreatePost(posts) {
  const dialogVisible = ref(false);

  const createPost = (post) => {
    posts.value.push(post);

    // без таймаута не работает
    setTimeout(() => {
      dialogVisible.value = false;
    }, 1);
  };

  const showDialog = () => {
    dialogVisible.value = true;
  };

  return {
    dialogVisible,
    createPost,
    showDialog,
  };
}
