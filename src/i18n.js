import en from './Locale/en.js'
import ja from './Locale/ja.js'
import ru from './Locale/ru.js'
 import { createI18n } from 'vue-i18n'
 
 
 const i18n = createI18n({
         locale: 'fr',
         fallbackLocale: 'en',
         messages: { en,ru,ja }
 
 })
 
 export default i18n;