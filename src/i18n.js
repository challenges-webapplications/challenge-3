import en from './Locale/en.json';
 import ru from './Locale/ru.json';
 import ja from './Locale/ja.json';
 import { createI18n } from 'vue-i18n'
 
 
 const i18n = createI18n({
         locale: 'ru',
         fallbackLocale: 'en',
         messages: { en,ru,ja }
 
 })
 
 export default i18n;