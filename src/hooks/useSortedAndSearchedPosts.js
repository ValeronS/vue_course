import { computed, ref } from 'vue';
import { useStore } from 'vuex';

export default function useSortedAndSearchedPosts(sortedPosts) {
  const store = useStore();
  const searchQuery = ref(store.state.post.searchQuery);

  const sortedAndSearchedPosts = computed(() => {
    return sortedPosts.value.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  return {
    searchQuery,
    sortedAndSearchedPosts,
  };
}
