import './assets/main.css';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import AutoComplete from 'primevue/autocomplete';
import RadioButton from 'primevue/radiobutton';
import InputNumber from 'primevue/inputnumber';
import DatePicker from 'primevue/datepicker';
import Checkbox from 'primevue/checkbox';
import PrimeVue from 'primevue/config';

import Button from 'primevue/button';

import Rating from 'primevue/rating';

import { createApp } from 'vue';

import App from './App.vue';
import Aura from '@primeuix/themes/aura';


const app = createApp(App);
app.use(PrimeVue, {

    theme: {

        preset: Aura

    }

});

app.component('Button', Button);
 app.component('Rating', Rating);
app.component('Checkbox', Checkbox);
app.component('RadioButton', RadioButton);
app.component('DatePicker', DatePicker);
app.component('FloatLabel', FloatLabel);
app.component('InputText', InputText);
app.component('AutoComplete', AutoComplete);
app.component('InputNumber', InputNumber);

 

app.mount('#app');