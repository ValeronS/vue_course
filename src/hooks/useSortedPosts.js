import { computed, ref } from 'vue';
import { useStore } from 'vuex';

export default function useSortedPosts(posts) {
  const store = useStore();
  const sortOptions = ref(store.state.post.sortOptions);
  const selectedSort = ref(store.state.post.selectedSort);

  const sortedPosts = computed(() => {
    let tempPosts = [...posts.value];
    if (selectedSort.value === '') {
      console.log('SelectedSort is empty');
      // console.log(posts.value);
      return posts.value;
    } else if (selectedSort.value === 'titleUp') {
      tempPosts.sort((post1, post2) => {
        return post1.title?.localeCompare(post2.title);
      });
      return tempPosts;
    } else if (selectedSort.value === 'titleDown') {
      tempPosts.sort((post1, post2) => {
        return post2.title?.localeCompare(post1.title);
      });
      return tempPosts;
    } else if (selectedSort.value === 'bodyUp') {
      tempPosts.sort((post1, post2) => {
        return post1.body?.localeCompare(post2.body);
      });
      return tempPosts;
    } else if (selectedSort.value === 'idUp') {
      tempPosts.sort((post1, post2) => {
        return post1.id - post2.id;
      });
      return tempPosts;
    } else {
      tempPosts.sort((post1, post2) => {
        return post2.id - post1.id;
      });
      return tempPosts;
    }
  });

  return {
    sortOptions,
    selectedSort,
    sortedPosts,
  };
}
