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
    padding: 5px;
    border-radius: 3px;
    border: 0px;
    color: white;
    background: lightseagreen
}
</style>
