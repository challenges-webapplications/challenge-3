<script setup>
import { ref } from 'vue'
import InputNumber from 'primevue/inputnumber'

const defaultvalue = ref(5);
const props = defineProps({
  text: {
    type: String,
    required: true,
  }
})

const errorMessage = ref('')
const isValid = ref(true)

const validateDuration = (value) => {
  if (value < 5) {
    errorMessage.value = 'Duration must be at least 5 minutes'
    isValid.value = false
    return false
  } else if (value > 600) {
    errorMessage.value = 'Duration cannot exceed 600 minutes'
    isValid.value = false
    return false
  }
  errorMessage.value = ''
  isValid.value = true
  return true
}
</script>

<template>
  <br>
  <div class="p-field">
    <label for="shared-number-label">{{ text }}</label>
    <br>
    <InputNumber 
      id="shared-number-label" 
      v-model="defaultvalue" 
      input-id="integreonly"
      :min="5"
      :max="600"
      :class="{ 'p-invalid': !isValid }"
      @input="validateDuration($event)"
    />
    <small class="error-message" v-if="!isValid">{{ errorMessage }}</small>
  </div>
</template>

<style scoped>
.p-field {
  width: 100%;
}

.error-message {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
}

:deep(.p-invalid) {
  border-color: #ef4444 !important;
}

:deep(.p-invalid:focus) {
  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2) !important;
}

:deep(.p-inputnumber) {
  width: 100%;
}
</style>