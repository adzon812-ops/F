'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, SlidersHorizontal, Star, ChevronRight } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { LangSwitch } from './LangSwitch'

const filters = [
  { id: 'all', label: 'Все' },
  { id: 'apartment', label: 'Квартиры' },
  { id: 'house', label: 'Дома' },
  { id: 'office', label: 'Офисы' },
  { id: 'commercial', label: 'Коммерция' },
]

interface HeaderProps {
  activeFilter: string
  setActiveFilter: (id: string) => void
  searchQuery: string
  setSearchQuery: (q: string) => void
}

export function Header({ activeFilter, setActiveFilter, searchQuery, setSearchQuery }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 px-4 pt-4 pb-2">
      <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-lg shadow-black/5 dark:shadow-black/20 p-4 space-y-4">
        
        {/* Верхняя строка: Логотип, переключатели, Риэлторы */}
        <div className="flex items-center justify-between gap-2">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30">
              <span className="text-xl sm:text-2xl font-bold text-white">F</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white block leading-tight">Flapy</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Астана</span>
            </div>
          </Link>

          {/* Переключатели темы и языка */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LangSwitch />
          </div>

          {/* Кнопка Риэлторы */}
          <Link 
            href="/agents"
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 rounded-xl hover:shadow-md transition-all group flex-shrink-0"
          >
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 fill-amber-500" />
            <span className="font-semibold text-amber-700 dark:text-amber-300 text-sm hidden sm:block">Риэлторы</span>
            <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Поиск */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Поиск по объектам..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 sm:py-3.5 bg-gray-100 dark:bg-gray-700 border-0 rounded-2xl focus:ring-2 focus:ring-green-500 focus:bg-white dark:focus:bg-gray-600 transition-all dark:text-white text-base"
          />
        </div>

        {/* Фильтры */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          <button className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-100 dark:bg-gray-700 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex-shrink-0">
            <SlidersHorizontal className="w-4 h-4" />
            <span className="hidden sm:inline">Фильтры</span>
          </button>
          
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                activeFilter === filter.id
                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
