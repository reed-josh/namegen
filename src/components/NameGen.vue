<template>
    <div style="width: 100%; text-align: center; padding: 20px">
        <label> Select a syllable type:
            <SelectSylType v-model="sylType" @change="(title) => sylTitle = title" />
        </label>
        <br>
        <p class="display-name-area">
            {{ name }}
        </p>
        <BaseButton :label="buttonText" @click="generate" />
    </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'
import { generateName } from '../app_modules/name-generator/NameGenerator'
import SelectSylType from './SelectSylType.vue'
import BaseButton from './base/BaseButton.vue'

/**
 * @returns {object}
 */
function setup () {
  const name = ref('')
  const sylTitle = ref('')
  const sylType = ref('Old_Norse')

  const buttonText = computed(() => sylType.value ? `Generate A ${sylTitle.value} Name` : 'Generate')

  const generate = async () => {
    name.value = await generateName({ syllable_count: 2 }, sylType.value)
  }

  return { generate, name, sylType, sylTitle, buttonText }
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
