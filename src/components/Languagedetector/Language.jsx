import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import {Translation, initReactI18next} from 'react-i18next'

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug:true,
    lng:"en",
    resources:{
       
        en:{
            Translation:{
                greeting:"Hello, Welcome!",

            },
        },
        fr:{
            Translation:{
                greeting:"Bonjour, Bienvenue!",

            },
        },
        hi:{
            Translation:{
                greeting:"नमस्ते, स्वागत है!",

            },

        }
    }
})