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
  <main>
    <div>   
        <TextLabel :text="Title" />
    </div>
    <div>
        <TextLabel :text="Description" />
    </div>
    <div>
        <largeTextLabelComponent :text="Instructor" />
    </div>
    <div>
        <DropdownTutorial />
    </div>
    <div>
        <radioButtonComponent text="Begginer" groupName = "group1" />
        <radioButtonComponent text="Intermediate" groupName = "group2"/>
        <radioButtonComponent text="Advanced" groupName = "group3"/>
    </div>
    <div>
        <numberLabelComponent text="Duration"/>
    </div>
    <div>
        <dateTutorialComponent text="Start Date"/>
    </div>
    <div>
        <checkBoxComponent text="Publish"/>
    </div>
  </main>
  <div>
    <br>
    <ratingComponent/>
  </div>
  <div>
    <buttonComponent/>
  </div>
</template>
