<script setup>
import { ref, watch } from 'vue'
import RadioButton from 'primevue/radiobutton'


const props = defineProps({
  text: {
    type: String,
    required: true,
  }
})

const difficultylevel = ref('')
watch(() => props.groupName, () => {
  difficultylevel.value = ''
})
</script>

<template>
    <div class="flex items-center gap-2">
        <RadioButton 
            v-model="difficultylevel" 
            inputId="difficulty" 
            name="tutorial"
            value="selected" 
        />
        <label for="difficulty">{{ text }}</label>
    </div>
</template>

