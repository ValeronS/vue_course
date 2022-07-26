<template lang="">
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <input
      v-model="post.title"
      class="input"
      type="text"
      placeholder="Название"
    />
    <input
      v-model="post.body"
      class="input"
      type="text"
      placeholder="Описание"
    />
    <button class="btn" @click="createPost">Создать</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      };
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;
  margin-top: 10px;
  border: 1px solid teal;
  padding: 10px 15px;
  border-radius: 5px;
}

.btn {
  margin-top: 5px;
  align-self: flex-end;
  padding: 5px 10px;
  background: none;
  color: teal;
  border: 1px solid teal;
  border-radius: 3px;
}
</style>
