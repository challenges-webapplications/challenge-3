<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SelectButton from 'primevue/selectbutton'

const { locale} = useI18n()
const languages = ref([
'en',
'fr',
'ru',
])
</script>

<template>
<div>
    <SelectButton v-model="locale" :options="languages" multiple aria-labelledby="multiple" />
</div>

</template>