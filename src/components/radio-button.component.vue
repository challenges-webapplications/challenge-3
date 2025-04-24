<script setup>
import { ref, watch } from 'vue'
import RadioButton from 'primevue/radiobutton'


const props = defineProps({
  text: {
    type: String,
    required: true,
  }
})


</script>

<template>
    <div class="flex items-center gap-2">
        <RadioButton 
            v-model="selected"
            inputId="difficulty" 
            name="tutorial"
            value="selected" 
        />
        <label for="difficulty">{{ text }}</label>
    </div>
</template>

