<script setup>
import FormTutorials from './components/form-tutorials.component.vue'
import headerComponent from './components/header.component.vue';
</script>

<template>
  <div class="app-container">
    <header-component />
    <main class="main-content">
      <FormTutorials />
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding-top: 80px; /* Space for the fixed header */
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 20px;
}
</style>
