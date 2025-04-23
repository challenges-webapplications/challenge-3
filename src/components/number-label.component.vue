<script setup>
import { ref } from 'vue'
import { InputNumber } from 'primevue/inputnumber'


const defaultvalue = ref(5);
const props = defineProps({
  text: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div class="p-field">
    <InputNumber id="shared-number-label" v-model="defaultvalue" input-id="integreonly" />
    <label for="shared-number-label">{{ text }}</label>
  </div>
</template>