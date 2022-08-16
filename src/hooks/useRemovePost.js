export default function useRemovePost(posts) {
  const removePost = (post) => {
    posts.value = posts.value.filter((p) => p.id !== post.id);
  };

  return {
    removePost,
  };
}
