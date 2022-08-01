<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',
};
</script>

<style>
.btn {
  padding: 5px 10px;
  background: none;
  color: teal;
  border: 1px solid teal;
  border-radius: 3px;
  cursor: pointer;
}

.flex_end {
  align-self: flex-end;
}

.margin_top {
  margin-top: 5px;
}

.margin_bottom {
  margin-bottom: 5px;
}
</style>
