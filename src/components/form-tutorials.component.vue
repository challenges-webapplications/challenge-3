<script setup>
import { ref } from 'vue'
import TextLabel from './text-label.component.vue'
import largeTextLabelComponent from './large-text-label.component.vue'
import DropdownTutorial from './dropdown-tutorial.component.vue'
import radioButtonComponent from './radio-button.component.vue'
import numberLabelComponent from './number-label.component.vue'
import dateTutorialComponent from './date-tutorial.component.vue'
import checkBoxComponent from './check-box.component.vue'
import ratingComponent from './rating.component.vue'
import buttonComponent from './button.component.vue'


const Title = ref('Title')
const Instructor = ref('Instructor')
const Description = ref('Description')
</script>

<template>
  <div class="form-container">
    <div class="form-card">
      <div class="form-header">
        <div class="avatar-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
          </svg>
        </div>
        <h2>TUTORIAL FORM</h2>
      </div>
      
      <div class="form-content">
        <div class="form-field">   
          <TextLabel :text="Title" />
        </div>
        <div class="form-field">
          <TextLabel :text="Description" />
        </div>
        <div class="form-field">
          <largeTextLabelComponent :text="Instructor" />
        </div>
        <div class="form-field">
          <DropdownTutorial />
        </div>
        <div class="form-field radio-group">
          <radioButtonComponent text="Begginer" groupName="group1" />
          <radioButtonComponent text="Intermediate" groupName="group2"/>
          <radioButtonComponent text="Advanced" groupName="group3"/>
        </div>
        <div class="form-field">
          <numberLabelComponent text="Duration"/>
        </div>
        <div class="form-field">
          <dateTutorialComponent text="Start Date"/>
        </div>
        <div class="form-field">
          <checkBoxComponent text="Publish"/>
        </div>
        <div class="form-field">
          <ratingComponent/>
        </div>
        <div class="form-field">
          <buttonComponent/>
        </div>
      </div>
      
      <div class="form-footer">
        <p>FORM TUTORIAL</p>
        <p class="small-text">DON'T HAVE AN ACCOUNT YET?</p>
      </div>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background-color: #121212;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e0e0e0;
}

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 20px;
}

.form-card {
  background-color: #1e1e1e;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 400px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid #333;
}

.form-header {
  padding: 30px 20px 20px;
  text-align: center;
  background-color: #252525;
}

.avatar-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #3949ab;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 15px;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.form-content {
  padding: 20px;
}

.form-field {
  margin-bottom: 20px;
  width: 100%;
}

.radio-group {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
}

.form-footer {
  padding: 15px;
  text-align: center;
  font-size: 12px;
  color: #aaa;
  background-color: #252525;
  border-top: 1px solid #333;
}

.small-text {
  font-size: 10px;
  margin-top: 5px;
  color: #777;
}

h2 {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #e0e0e0;
}

/* Add some dark theme styling for form elements */
input, select, textarea {
  background-color: #2d2d2d;
  border: 1px solid #444;
  color: #e0e0e0;
  border-radius: 4px;
  padding: 10px;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: #3949ab;
  box-shadow: 0 0 0 2px rgba(57, 73, 171, 0.3);
}

button {
  background-color: #3949ab;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #303f9f;
}

/* For checkbox and radio button styling */
input[type="checkbox"], input[type="radio"] {
  accent-color: #3949ab;
}
</style>