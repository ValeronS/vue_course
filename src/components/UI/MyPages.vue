<template>
  <div class="page__wrapper">
    <div
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      class="page"
      :class="{ 'current-page': page === pageNumber }"
      @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-pages',
  props: {
    totalPages: {
      type: Number,
    },
    page: {
      type: Number,
    },
  },
  methods: {
    changePage(pageNumber) {
      this.$emit('changePage', pageNumber);
    },
  },
};
</script>

<style>
.page__wrapper {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.page {
  padding: 5px;
  cursor: pointer;
}

.current-page {
  border: 2px solid teal;
  border-radius: 5px;
}
</style>
