<template>
  <input v-model="search" @input="updateSearch" type="text" class="search" />
</template>

<script>
export default {
  name: 'my-search',
  props: {
    search: [String, Number],
  },
  methods: {
    updateSearch(event) {
      this.$emit('update:search', event.target.value);
    },
  },
};
</script>

<style>
.search {
  width: 100%;
  margin-top: 10px;
  border: 1px solid teal;
  padding: 10px 15px;
  border-radius: 3px;
}
</style>
