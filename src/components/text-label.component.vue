<script setup>
import { ref, watch } from 'vue'
import InputText from 'primevue/inputtext'
import { IftaLabel } from 'primevue'

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  minLength: {
    type: Number,
    default: 0
  },
  maxLength: {
    type: Number,
    default: Infinity
  }
})

const value = ref('')
const isValid = ref(true)
const errorMessage = ref('')

watch(value, (newValue) => {
  if (props.text === 'Title' && newValue.length < 5) {
    isValid.value = false
    errorMessage.value = 'Title must be at least 5 characters long'
  } else if (props.text === 'Description' && newValue.length > 500) {
    isValid.value = false
    errorMessage.value = 'Description cannot exceed 500 characters'
  } else {
    isValid.value = true
    errorMessage.value = ''
  }
})
</script>

<template>
  <div class="input-container">
    <IftaLabel>
      <InputText 
        id="shared-text-label" 
        v-model="value" 
        variant="filled"
        :class="{ 'p-invalid': !isValid }"
        :maxlength="text === 'Description' ? 500 : undefined"
      />
      <label for="shared-text-label">{{ text }}</label>
    </IftaLabel>
    <small class="error-message" v-if="!isValid">{{ errorMessage }}</small>
  </div>
  <br>
</template>

<style scoped>
.input-container {
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
</style>