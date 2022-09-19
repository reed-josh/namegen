<template>
    <div style="width: 100%; text-align: center; padding: 20px">
        <label> Select a syllable type:
            <SelectSylType v-model="state.sylType" @change="(title) => state.sylTitle = title" />
        </label>
        <br>
        <div class="display-name-area">
            {{ state.name }}
        </div>
        <BaseButton :label="buttonText" @click="generate" />
    </div>
</template>

<script>
import { defineComponent, computed, reactive } from 'vue'
import { generateName } from '../app_modules/name-generator/NameGenerator'
import SelectSylType from './SelectSylType.vue'
import BaseButton from './base/BaseButton.vue'

export default defineComponent({
  components: { SelectSylType, BaseButton },
  setup () {
    const state = reactive({
      name: '',
      sylType: 'Old_Norse',
      sylTitle: ''
    })
    const buttonText = computed(() => state.sylType ? `Generate A ${state.sylTitle} Name` : 'Generate')

    const generate = async () => {
      state.name = await generateName({ syllable_count: 2 }, state.sylType)
    }

    return { generate, state, buttonText }
  }
})

</script>

<style scoped>
.display-name-area {
    min-height: 100px;
    max-width: 500px;
    margin: 1em auto;
    padding: 10px;
    font-size: 2em;
    border-radius: 8px;
    background-color: #383838;
    color: white;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
}
</style>
