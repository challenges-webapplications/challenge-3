<script setup>
import  Rating  from 'primevue/rating';
import { ref } from 'vue';
const value = ref(null);
</script>

<template>
    <div class="card flex justify-center">
        <Rating v-model="value" />
    </div>

</template>