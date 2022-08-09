<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__content" @keydown.esc="hideDialog">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin';

export default {
  name: 'my-dialog',
  mixins: [toggleMixin],
};
</script>

<style>
.dialog {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog__content {
  margin: auto;
  background: #eee;
  border-radius: 10px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
</style>
