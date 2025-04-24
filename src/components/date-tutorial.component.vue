<script>
import  DatePicker  from 'primevue/datepicker';
import { ref } from "vue";

const buttondisplay = ref();
</script>

<template>
    <div class="flex-auto">
            <label for="buttondisplay" class="font-bold block mb-2"> Publication Date </label>
            <DatePicker v-model="buttondisplay" showIcon fluid :showOnFocus="false" inputId="buttondisplay" />
        </div>

</template>