<template lang="">
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <input
      v-bind:value="title"
      @input="title = $event.target.value"
      class="input"
      type="text"
      placeholder="Название"
    />
    <input
      v-bind:value="body"
      @input="body = $event.target.value"
      class="input"
      type="text"
      placeholder="Описание"
    />
    <button class="btn">Создать</button>
  </form>
</template>

<script>
export default {};
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
