<script setup>
import { ref } from "vue";
// Import the Checkbox component from your UI library
// For example, if using PrimeVue:
import Checkbox from 'primevue/checkbox';

const publish = ref(false);
</script>

<template>
    <br>
    <div class="flex items-center gap-2">
            <Checkbox v-model="publish" name="publishButton" id="publish" />
            <label for="publish"> Published </label>
        </div>
</template>