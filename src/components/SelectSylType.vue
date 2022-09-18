<template>
  <h1>Default Set | {{ modelValue }} |</h1>
    <select class="syl-select" :value="modelValue" @change="emitSelection">
        <template v-for="option in sylOptions" :key="option">
          <option :value="option">{{ displayOptionWithoutSpaces(option) }}</option>
        </template>
    </select>
</template>

<script>

import { defineComponent, ref } from 'vue'
import { buildSylOptions } from '../app_modules/name-generator/NameGenerator.js'

export default defineComponent({
  emits: ['update:modelValue'],
  props: { modelValue: { type: String, default: 'Old_Norse' } },
  setup (props, { emit }) {
    const sylOptions = ref(buildSylOptions())

    const displayOptionWithoutSpaces = (opt) => opt.replaceAll('_', ' ')

    const emitSelection = (e) => emit('update:modelValue', e.target.value)

    return { sylOptions, displayOptionWithoutSpaces, emitSelection }
  }
})

</script>

<style scoped>
.syl-select {
    padding: 5px;
    appearance: auto;
}
</style>
