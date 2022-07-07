<template>
    <div style="width: 100%; text-align: center; padding: 20px">
        <label> Select a syllable type:
            <SelectSylType v-model="sylType" />
        </label>
        <br>
        <a href="#" @click="generate">Generate</a>
        <p>
            {{ name }}
        </p>
        </div>
</template>


<script setup>
import { ref } from 'vue'
import { generateName } from '../app_modules/name-generator/NameGenerator';
import SelectSylType from './SelectSylType.vue'

const name = ref('')
const sylType = ref('OLD_NORSE')

function generate () {
    console.log(sylType.value)
    name.value = generateName({syllable_count: 2}, sylType.value)
}

</script>