<template>
    <div style="width: 100%; text-align: center; padding: 20px">
        <label> Select a syllable type:
            <SelectSylType v-model="sylType" />
        </label>
        <br>
        <p class="display-name-area">
            {{ name }}
        </p>
        <BaseButton label="Generate" @click="generate" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { generateName } from '../app_modules/name-generator/NameGenerator'
import SelectSylType from './SelectSylType.vue'
import BaseButton from './base/BaseButton.vue'

const name = ref('')
const sylType = ref('Old_Norse')

/**
 *
 * @returns {void}
 */
async function generate () {
  name.value = await generateName({ syllable_count: 2 }, sylType.value)
}

</script>

<style scoped>
.display-name-area {
    min-height: 100px;
    padding: 10px;
}
</style>
