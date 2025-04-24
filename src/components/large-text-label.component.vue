<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import IftaLabel from 'primevue/iftalabel'


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
      <label for="shared-text-label">{{ text }}</label>
      <InputText v-model="value" type="text" size="large"  />
    </IftaLabel>
  </div>
  <br>
</template>