<template>
    <select class="syl-select" :value="modelValue" @change="emitSelection">
        <option value="OLD_NORSE">Old Norse</option>
        <option value="ENGLISH">English</option>
        <option value="THADDEN">Haddish</option>
    </select>
</template>

<script setup>

const emit = defineEmits(['update:modelValue'])

defineProps({
  modelValue: String
})

/**
 *
 * @param {object} e
 */
function emitSelection (e) {
  emit('update:modelValue', e.target.value)
}
</script>

<style scoped>
.syl-select {
    padding: 5px;
    -webkit-appearance: auto;
}
</style>
