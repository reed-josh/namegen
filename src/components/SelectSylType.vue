<template>
    <select class="syl-select" :value="modelValue" @change="emitSelection">
        <option value="oldnorse">Old Norse</option>
        <option value="english">English</option>
        <option value="thadden">Haddish</option>
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
