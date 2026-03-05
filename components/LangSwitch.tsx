'use client'

import { useState } from 'react'
import { Globe } from 'lucide-react'

export function LangSwitch() {
  const [lang, setLang] = useState<'ru' | 'kz'>('ru')

  return (
    <button
      onClick={() => setLang(lang === 'ru' ? 'kz' : 'ru')}
      className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium text-sm"
    >
      <Globe className="w-4 h-4" />
      {lang === 'ru' ? 'RU' : 'KZ'}
    </button>
  )
}
