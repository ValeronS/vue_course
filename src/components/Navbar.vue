<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3 course project</div>
    <div class="nav__btns">
      <my-button @click="$router.push('/postspage')" class="margin_right"
        >Посты</my-button
      >
      <my-button @click="$router.push('/about')" class="margin_left"
        >Описание</my-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
};
</script>

<style>
.navbar {
  position: fixed;
  width: 100%;
  height: 50px;
  background-color: rgb(243, 243, 243);
  box-shadow: 2px 2px 4px grey;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nav__btns {
  display: flex;
}
</style>
