import { useStore } from 'vuex';

export default function useRemovePost(posts) {
  const store = useStore();

  const removePost = (post) => {
    store.commit(
      'post/setPosts',
      posts.value.filter((p) => p.id !== post.id)
    );
    posts.value = store.state.post.posts;
  };

  return {
    removePost,
  };
}
