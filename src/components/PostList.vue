<template lang="">
  <div class="post" v-for="post in posts">
    <div><strong>Название: </strong>{{ post.title }}</div>
    <div><strong>Описание: </strong>{{ post.body }}</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.post {
  padding: 10px;
  border: 2px solid teal;
  margin-top: 10px;
  border-radius: 5px;
}
</style>
