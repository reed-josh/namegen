<template>
    <button><slot>{{ label }}</slot></button>
</template>

<script setup>
defineProps({
  label: String
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
