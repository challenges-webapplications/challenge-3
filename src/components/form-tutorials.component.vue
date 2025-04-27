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
import LanguageSwitcher from './language-switcher.component.vue'

const Title = ref('Title')
const Description = ref('Description')
const Instructor = ref('Instructor')
const category = ref(null)
const difficulty = ref('Beginner')
const duration = ref(5)
const startDate = ref(null)
const isPublished = ref(false)
const rating = ref(0)

const formErrors = ref({})

const validateForm = () => {
    const errors = {}
    
    if (!Title.value || Title.value === 'Title' || Title.value.length < 5) {
        errors.title = 'Title must be at least 5 characters long'
    }
    
    if (!Description.value || Description.value === 'Description') {
        errors.description = 'Description is required'
    }
    
    if (!Instructor.value || Instructor.value === 'Instructor') {
        errors.instructor = 'Instructor name is required'
    }
    
    if (!category.value) {
        errors.category = 'Category is required'
    }
    
    if (!startDate.value) {
        errors.startDate = 'Start date is required'
    }
    
    formErrors.value = errors
    return Object.keys(errors).length === 0
}

const handleSave = () => {
    if (validateForm()) {

        const formData = {
            title: Title.value,
            description: Description.value,
            instructor: Instructor.value,
            category: category.value,
            difficulty: difficulty.value,
            duration: duration.value,
            startDate: startDate.value,
            isPublished: isPublished.value,
            rating: rating.value
        }
        
        console.log('Saving form data:', formData)
    }
}

const handleCancel = () => {
    Title.value = 'Title'
    Description.value = 'Description'
    Instructor.value = 'Instructor'
    category.value = null
    difficulty.value = 'Beginner'
    duration.value = 5
    startDate.value = null
    isPublished.value = false
    rating.value = 0
    formErrors.value = {}
}
</script>

<template>

  <div class="form-container">
    <div class="form-card">
      <div class="language-switcher">
        <LanguageSwitcher />
      </div>
      <div class="form-header">
        <div class="avatar-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
          </svg>
        </div>
        <h2>Tutorial Form</h2>
      </div>
      
      <div class="form-content">
        <div class="form-field">   
          <TextLabel :text="Title" :minLength="5" />
          <small class="error-message" v-if="formErrors.title">{{ formErrors.title }}</small>
        </div>
        <div class="form-field">
          <TextLabel :text="Description" :maxLength="500" />
          <small class="error-message" v-if="formErrors.description">{{ formErrors.description }}</small>
        </div>
        <div class="form-field">
          <largeTextLabelComponent :text="Instructor" />
          <small class="error-message" v-if="formErrors.instructor">{{ formErrors.instructor }}</small>
        </div>
        <div class="form-field">
          <DropdownTutorial v-model="category" />
          <small class="error-message" v-if="formErrors.category">{{ formErrors.category }}</small>
        </div>
        <div class="form-field radio-group">
          <radioButtonComponent v-model="difficulty" text="Beginner" value="Beginner" groupName="difficulty" />
          <radioButtonComponent v-model="difficulty" text="Intermediate" value="Intermediate" groupName="difficulty"/>
          <radioButtonComponent v-model="difficulty" text="Advanced" value="Advanced" groupName="difficulty"/>
        </div>
        <div class="form-field">
          <numberLabelComponent v-model="duration" text="Duration"/>
        </div>
        <div class="form-field">
          <dateTutorialComponent v-model="startDate" text="Start Date"/>
          <small class="error-message" v-if="formErrors.startDate">{{ formErrors.startDate }}</small>
        </div>
        <div class="form-field">
          <checkBoxComponent v-model="isPublished" text="Publish"/>
        </div>
        <div class="form-field">
          <ratingComponent v-model="rating"/>
        </div>
        <div class="form-field">
          <buttonComponent @save="handleSave" @cancel="handleCancel"/>
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
  position: relative;
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

.error-message {
    color: #ef4444;
    font-size: 0.875rem;
    margin-top: 0.25rem;
    display: block;
}

.language-switcher {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
}


</style>