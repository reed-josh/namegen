<template>
    <button><slot>{{ label }}</slot></button>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: { label: { type: String, default: 'Submit' } }
})
</script>

<style scoped>
button {
    padding: 8px;
    border-radius: 3px;
    border: 0px;
    color: white;
    background: lightseagreen;
    cursor: pointer;
}
button:hover {
  background: darkcyan;
}
</style>
