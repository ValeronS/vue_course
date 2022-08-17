<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input
      v-model="searchQuery"
      placeholder="Поиск по теме..."
      class="search"
    />
    <div class="app__btns">
      <my-select v-model="selectedSort" :options="sortOptions" />
      <my-button @click="showDialog">Создать пост</my-button>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list
      :posts="sortedAndSearchedPosts"
      v-if="!isPostLoading"
      @remove="removePost"
    />
    <div class="page-loading" v-else>Идет загрузка...</div>

    <div
      v-if="posts.length > 0"
      v-intersection="loadMorePosts"
      class="observer"
    ></div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import { ref } from 'vue';
import { usePosts } from '@/hooks/usePosts';
import useSortedPosts from '@/hooks/useSortedPosts';
import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts';
import useLoadMorePosts from '@/hooks/useLoadMorePosts';
import useRemovePost from '@/hooks/useRemovePost';
import useCreatePost from '@/hooks/useCreatePost';

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержимому' },
        { value: 'id', name: 'По ID поста' },
      ],
    };
  },
  setup(props) {
    const { posts, page, limit, totalPages, isPostLoading } = usePosts();
    const { selectedSort, sortedPosts } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedAndSearchedPosts(sortedPosts);
    const { loadMorePosts } = useLoadMorePosts(posts, page, limit, totalPages);
    const { removePost } = useRemovePost(posts);
    const { dialogVisible, createPost, showDialog } = useCreatePost(posts);

    return {
      posts,
      page,
      limit,
      totalPages,
      isPostLoading,
      selectedSort,
      sortedPosts,
      searchQuery,
      sortedAndSearchedPosts,
      loadMorePosts,
      removePost,
      dialogVisible,
      createPost,
      showDialog,
    };
  },
};
</script>

<style>
h1 {
  text-align: center;
  margin-bottom: 5px;
}

.app__btns {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
