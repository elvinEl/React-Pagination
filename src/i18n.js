import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backgend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'


// const resources = {

//     az: {
//         translation: {
//             welcome: 'Xoş Gəlmisiniz',
//         }
//     },
//     en: {
//         translation: {
//             welcome: 'Welcome',
//         }
//     }

// }


i18n
    .use(initReactI18next)
    .use(Backgend)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'Az',
        // resources
    })

export default i18n