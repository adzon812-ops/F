'use client'

import { useState, useMemo } from 'react'
import { Header } from '@/components/Header'
import { PropertyCard } from '@/components/PropertyCard'
import { BottomNav } from '@/components/BottomNav'
import { AIAssistant } from '@/components/AIAssistant'

const properties = [
  {
    id: '1',
    title: '3-комнатная квартира в ЖК "Нурлы Жол"',
    price: 45000000,
    district: 'Есиль',
    address: 'пр. Кабанбай батыра, 21',
    area: 85,
    floor: '5/12',
    type: 'Квартира',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    owner: { name: 'Айжан К.', rating: 4.8, phone: '+77012345678' },
    date: '15 янв'
  },
  {
    id: '2',
    title: 'Офис 120 м² в бизнес-центре',
    price: 85000000,
    district: 'Алматинский',
    address: 'ул. Сатпаева, 30/2',
    area: 120,
    floor: '3/8',
    type: 'Офис',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    owner: { name: 'Бауыржан Р.', rating: 4.9, phone: '+77073456789' },
    date: '14 янв'
  },
  {
    id: '3',
    title: 'Коттедж 300 м² в закрытом посёлке',
    price: 180000000,
    district: 'Сарыарка',
    address: 'пос. Коктал, 12',
    area: 300,
    floor: '2 этажа',
    type: 'Дом',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    owner: { name: 'Елена М.', rating: 5.0, phone: '+77014567890' },
    date: '13 янв'
  },
  {
    id: '4',
    title: 'Студия 42 м² в ЖК "Би Сити Токио"',
    price: 28000000,
    district: 'Есиль',
    address: 'пр. Туран, 55',
    area: 42,
    floor: '12/25',
    type: 'Квартира',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    owner: { name: 'Дамир С.', rating: 4.7, phone: '+77075678901' },
    date: '12 янв'
  },
  {
    id: '5',
    title: 'Торговое помещение 200 м² на первой линии',
    price: 120000000,
    district: 'Байконур',
    address: 'пр. Республики, 10',
    area: 200,
    floor: '1/5',
    type: 'Коммерция',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    owner: { name: 'Серик Б.', rating: 4.6, phone: '+77016789012' },
    date: '11 янв'
  },
  {
    id: '6',
    title: 'Участок 10 соток под ИЖС',
    price: 35000000,
    district: 'Нура',
    address: 'мкр. Жетысу-2, уч. 45',
    area: 1000,
    floor: '-',
    type: 'Участок',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    owner: { name: 'Гульнар К.', rating: 4.8, phone: '+77077890123' },
    date: '10 янв'
  }
]

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProperties = useMemo(() => {
    return properties.filter(p => {
      const matchesFilter = activeFilter === 'all' || 
        (activeFilter === 'apartment' && p.type === 'Квартира') ||
        (activeFilter === 'house' && p.type === 'Дом') ||
        (activeFilter === 'office' && p.type === 'Офис') ||
        (activeFilter === 'commercial' && p.type === 'Коммерция')
      
      const matchesSearch = !searchQuery || 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.district.toLowerCase().includes(searchQuery.toLowerCase())
      
      return matchesFilter && matchesSearch
    })
  }, [activeFilter, searchQuery])

  return (
    <div className="min-h-screen pb-24 lg:pb-8">
      <Header 
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Объекты недвижимости
          </h1>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Найдено: {filteredProperties.length}
          </span>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400">Ничего не найдено</p>
            <button 
              onClick={() => {setActiveFilter('all'); setSearchQuery('')}}
              className="mt-4 text-primary-500 font-medium hover:underline"
            >
              Сбросить фильтры
            </button>
          </div>
        )}
      </main>

      <BottomNav />
      <AIAssistant />
    </div>
  )
}
