'use client'

import { useState, useEffect } from 'react'
import { Globe } from 'lucide-react'

export function LangSwitch() {
  const [lang, setLang] = useState<'ru' | 'kz'>('ru')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Загружаем сохраненный язык
    const saved = localStorage.getItem('flapy-lang') as 'ru' | 'kz'
    if (saved) setLang(saved)
  }, [])

  const toggleLang = () => {
    const newLang = lang === 'ru' ? 'kz' : 'ru'
    setLang(newLang)
    localStorage.setItem('flapy-lang', newLang)
    // Перезагружаем для применения
    window.location.reload()
  }

  if (!mounted) {
    return (
      <button className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-gray-100 w-20 h-10">
        <div className="w-4 h-4" />
      </button>
    )
  }

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium text-sm"
    >
      <Globe className="w-4 h-4" />
      {lang.toUpperCase()}
    </button>
  )
}
