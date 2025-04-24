<script setup>
import { defineEmits } from 'vue'
import Button from 'primevue/button'

const emit = defineEmits(['save', 'cancel'])

const handleSave = () => {
    emit('save')
}

const handleCancel = () => {
    emit('cancel')
}
</script>

<template>
    <div class="button-container">
        <Button class="save-button" label="Save" icon="pi pi-check" iconPos="right" @click="handleSave" />
        <Button class="cancel-button" label="Cancel" icon="pi pi-times" @click="handleCancel" />
    </div>
</template>

<style scoped>
.button-container {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
}

:deep(.save-button) {
    background-color: #3949ab;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    color: white;
    font-weight: 500;
    transition: background-color 0.2s ease;
}

:deep(.save-button:hover) {
    background-color: #303f9f;
}

:deep(.cancel-button) {
    background-color: transparent;
    border: 1px solid #444;
    padding: 12px 24px;
    border-radius: 6px;
    color: #e0e0e0;
    font-weight: 500;
    transition: all 0.2s ease;
}

:deep(.cancel-button:hover) {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: #666;
}

:deep(.pi) {
    margin: 0 8px;
    color: currentColor;
}
</style>