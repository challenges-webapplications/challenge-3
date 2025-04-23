<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'


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
      <InputText v-model="value" type="text" size="large"  />
      <label for="shared-text-label">{{ text }}</label>
    </IftaLabel>
  </div>
</template>