<template>
  <select v-model="modelValue" @change="changeOption" class="select">
    <option disabled value="">Сортировка</option>
    <option v-for="option in options" :key="option.id" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
      console.log(event.target.value);
    },
  },
};
</script>

<style>
.select {
  text-align: center;
  color: teal;
  border: 1px solid teal;
  border-radius: 3px;
  background-color: #fff;
}
</style>
