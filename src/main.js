import './assets/main.css'
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue';
import IftaLabel from 'primevue'


import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import App from './App.vue'
import Aura from '@primeuix/themes/aura';
import AutoComplete from 'primevue';
import RadioButton from 'primevue';
import InputNumber from 'primevue/inputnumber';
const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.component('RadioButton', RadioButton);
app.component('IftaLabel', IftaLabel);
app.component('FloatLabel', FloatLabel);
app.component('InputText', InputText);
app.component('AutoComplete', AutoComplete);
app.component('InputNumber', InputNumber);
app.mount('#app')