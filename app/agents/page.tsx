'use client'

import { Star, Phone, MessageCircle, TrendingUp, Award, Filter } from 'lucide-react'
import Link from 'next/link'

const agents = [
  {
    id: '1',
    name: 'Айжан К.',
    agency: 'Элит Недвижимость',
    rating: 4.8,
    reviews: 24,
    deals: 156,
    phone: '+7 (701) 234-56-78',
    specialization: 'ЖК "Нурлы Жол", премиум',
    top: true,
    avatar: 'А'
  },
  {
    id: '2',
    name: 'Бауыржан Р.',
    agency: 'Астана Риелт',
    rating: 4.9,
    reviews: 31,
    deals: 203,
    phone: '+7 (707) 345-67-89',
    specialization: 'Коммерция, офисы',
    top: true,
    avatar: 'Б'
  },
  {
    id: '3',
    name: 'Елена М.',
    agency: 'Свой агент',
    rating: 5.0,
    reviews: 18,
    deals: 89,
    phone: '+7 (701) 456-78-90',
    specialization: 'Коттеджи, VIP',
    top: true,
    avatar: 'Е'
  },
  {
    id: '4',
    name: 'Дамир С.',
    agency: 'Новостройки Астаны',
    rating: 4.7,
    reviews: 42,
    deals: 178,
    phone: '+7 (707) 567-89-01',
    specialization: 'Новостройки, инвестиции',
    top: false,
    avatar: 'Д'
  },
  {
    id: '5',
    name: 'Серик Б.',
    agency: 'Бизнес Недвижимость',
    rating: 4.6,
    reviews: 28,
    deals: 134,
    phone: '+7 (701) 678-90-12',
    specialization: 'Торговые площади',
    top: false,
    avatar: 'С'
  }
]

export default function AgentsPage() {
  return (
    <div className="min-h-screen pb-24 lg:pb-8 bg-gray-50 dark:bg-gray-900">
      {/* Шапка */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link 
              href="/"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
            >
              ←
            </Link>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Топ риэлторов</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Фильтры */}
        <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar pb-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-xl text-sm font-medium shadow-sm">
            <Filter className="w-4 h-4" />
            По рейтингу
          </button>
          <button className="px-4 py-2 bg-white dark:bg-gray-800 rounded-xl text-sm font-medium shadow-sm">
            По сделкам
          </button>
          <button className="px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-xl text-sm font-medium">
            Топ месяца
          </button>
        </div>

        {/* Список */}
        <div className="space-y-4">
          {agents.map((agent, index) => (
            <div 
              key={agent.id}
              className={`bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm ${
                agent.top ? 'ring-2 ring-amber-100 dark:ring-amber-900/30' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Аватар с местом */}
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold ${
                    index < 3 
                      ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white' 
                      : 'bg-primary-500 text-white'
                  }`}>
                    {agent.avatar}
                  </div>
                  {index < 3 && (
                    <div className="absolute -top-2 -left-2 w-7 h-7 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                      #{index + 1}
                    </div>
                  )}
                </div>

                {/* Инфо */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">{agent.name}</h3>
                    {agent.top && <Star className="w-5 h-5 text-amber-500 fill-amber-500" />}
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{agent.agency}</p>
                  
                  <div className="flex items-center gap-4 text-sm mb-3">
                    <span className="flex items-center gap-1 text-amber-500">
                      <Star className="w-4 h-4 fill-amber-500" />
                      <span className="font-bold text-gray-900 dark:text-white">{agent.rating}</span>
                      <span className="text-gray-400">({agent.reviews})</span>
                    </span>
                    <span className="flex items-center gap-1 text-primary-600 dark:text-primary-400">
                      <TrendingUp className="w-4 h-4" />
                      {agent.deals} сделок
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 px-3 py-2 rounded-lg inline-block">
                    {agent.specialization}
                  </p>
                </div>
              </div>

              {/* Кнопки */}
              <div className="flex gap-3 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <a
                  href={`tel:${agent.phone}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Позвонить
                </a>
                <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-medium transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  Написать
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-emerald-50 dark:from-primary-900/20 dark:to-emerald-900/20 rounded-2xl text-center">
          <Award className="w-12 h-12 text-primary-500 mx-auto mb-3" />
          <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
            Хотите стать риэлтором Flapy?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
            Присоединяйтесь к профессиональному сообществу
          </p>
          <button className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium transition-colors shadow-lg shadow-primary-500/30">
            Подать заявку
          </button>
        </div>
      </main>
    </div>
  )
}
