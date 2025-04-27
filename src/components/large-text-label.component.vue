<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'


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
    <FloatLabel>
      <label for="shared-text-label">{{ text }}</label>
      <InputText v-model="value" type="text" size="large"  />
    </FloatLabel>
  </div>
  <br>
</template>