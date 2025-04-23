<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import { IftaLabel } from 'primevue'


const props = defineProps({
  text: {
    type: String,
    required: true,
  }
})

const value = ref('')
</script>

<template>
  <div>
    <IftaLabel>
      <InputText id="shared-text-label" v-model="value" variant="filled" />
      <label for="shared-text-label">{{ text }}</label>
    </IftaLabel>

  </div>
  <br>
</template>

<style scoped>
</style>