'use client'

import { useState } from 'react'
import { Bot, X, Sparkles, Wand2, TrendingUp, Shield } from 'lucide-react'

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Плавающая кнопка */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-4 lg:bottom-8 z-40 w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white rounded-full shadow-lg shadow-violet-500/40 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        aria-label="ИИ-помощник"
      >
        <Bot className="w-7 h-7" />
      </button>

      {/* Модальное окно */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50">
          <div className="bg-white dark:bg-gray-800 rounded-3xl w-full max-w-md shadow-2xl animate-slide-up">
            {/* Шапка */}
            <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">ИИ-помощник</h3>
                  <p className="text-sm text-gray-500">Flapy AI</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Возможности */}
            <div className="p-6 space-y-4">
              <button className="w-full flex items-center gap-4 p-4 bg-violet-50 dark:bg-violet-900/20 rounded-2xl hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-colors text-left">
                <Wand2 className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white block">Улучшить описание</span>
                  <span className="text-sm text-gray-500">Сделать текст продающим</span>
                </div>
              </button>

              <button className="w-full flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-left">
                <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white block">Анализ цены</span>
                  <span className="text-sm text-gray-500">Оценить рыночную стоимость</span>
                </div>
              </button>

              <button className="w-full flex items-center gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-2xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors text-left">
                <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white block">Юридическая проверка</span>
                  <span className="text-sm text-gray-500">Проверить документы</span>
                </div>
              </button>
            </div>

            {/* Ввод */}
            <div className="p-4 border-t border-gray-100 dark:border-gray-700">
              <div className="flex gap-2">
                <input 
                  type="text"
                  placeholder="Задайте вопрос ИИ..."
                  className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-700 border-0 rounded-xl focus:ring-2 focus:ring-violet-500 dark:text-white"
                />
                <button className="px-4 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded-xl font-medium transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
