import React from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './LanguageSelector'

function LangT() {
  const{ t}= useTranslation()
  return (
    <div>
        <div className={container}>
          <LanguageSelector />
            <h1>{t("greeting")}</h1>
        </div>
    </div>
  )
}

export default LangT