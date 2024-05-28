import { changeLanguage } from 'i18next'
import React from 'react'


const language=[
    { code:"en", lang:"English"},
    {code:"fr", lang:"French"},
    {code:"h1", lang:"Hindi"}
]
function LanguageSelector() {
  return (
    <div className={btn-container}>
{language.map((lng)=>{
    return <button key={lng.code} onClick={()=>changeLanguage()}>{lng.lang}</button>
}



)}


    </div>
  )
}

export default LanguageSelector