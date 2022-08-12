import { computed, ref } from 'vue';

export default function useSortedPosts(posts) {
  const selectedSort = ref('');

  const sortedPosts = computed(() => {
    let tempPosts = [...posts.value];
    if (selectedSort.value === '') {
      console.log('SelectedSort is empty');
      console.log(posts.value);
      return posts.value;
    } else if (typeof posts.value[0][selectedSort.value] === 'string') {
      tempPosts.sort((post1, post2) => {
        return post1[selectedSort.value]?.localeCompare(
          post2[selectedSort.value]
        );
      });
      console.log(tempPosts);
      console.log('Sorted by', selectedSort.value);
      return tempPosts;
    } else {
      tempPosts.sort((post1, post2) => {
        return post1.id - post2.id;
      });
      console.log(tempPosts);
      console.log('Sorted by', selectedSort.value);
      return tempPosts;
    }
  });

  return {
    selectedSort,
    sortedPosts,
  };
}
