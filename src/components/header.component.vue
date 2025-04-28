<script setup>
import LanguageSwitcher from './language-switcher.component.vue'
</script>

<template>
  <header class="app-header">
    <div class="header-content">
      <h1 class="app-title">{{ $t('message.title') }}</h1>
      <div class="language-switcher-container">
        <LanguageSwitcher />
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  background-color: #252525;
  color: #e0e0e0;
  padding: 15px 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid #333;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Changed from center to space-between */
}

.app-title {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
  color: #3949ab;
  text-align: center;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.language-switcher-container {
  margin-left: auto; /* Pushes the language switcher to the right */
}

@media (max-width: 768px) {
  .app-title {
    font-size: 1.4rem;
  }
  
  .header-content {
    flex-direction: column;
    gap: 10px;
  }
  
  .language-switcher-container {
    margin-left: 0;
  }
}
</style>