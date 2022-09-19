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

<script>
import { defineComponent, ref } from 'vue'
import { generateName } from '../app_modules/name-generator/NameGenerator'
import SelectSylType from './SelectSylType.vue'
import BaseButton from './base/BaseButton.vue'

/**
 * @returns {object}
 */
function setup () {
  const name = ref('')
  const sylType = ref('Old_Norse')

  const generate = async () => {
    name.value = await generateName({ syllable_count: 2 }, sylType.value)
  }

  return { generate, name, sylType }
}

export default defineComponent({
  components: { SelectSylType, BaseButton },
  setup
})

</script>

<style scoped>
.display-name-area {
    min-height: 100px;
    padding: 10px;
}
</style>
