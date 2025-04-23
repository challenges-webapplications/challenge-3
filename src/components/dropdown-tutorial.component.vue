<script setup>
import { ref } from 'vue'
import { AutoComplete } from 'primevue';
const value = ref(null);
const items = ref([]);

const categories = ['Programming', 'Design', 'Marketing'];

const search = (event) => {
    const query = event.query.toLowerCase();
    items.value = categories.filter(category => 
        category.toLowerCase().includes(query)
    );
}
</script>

<template>
    <div class="card flex justify-center">
        <AutoComplete v-model="value" dropdown :suggestions="items" @complete="search" />
    </div>
    <br>
</template>