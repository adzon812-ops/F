'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ChevronLeft, 
  Camera, 
  MapPin, 
  DollarSign, 
  Maximize, 
  BedDouble, 
  Building2,
  Check
} from 'lucide-react'

const districts = ['Есиль', 'Алматинский', 'Сарыарка', 'Байконур', 'Нура']
const types = [
  { id: 'apartment', label: 'Квартира', icon: Building2 },
  { id: 'house', label: 'Дом', icon: Building2 },
  { id: 'office', label: 'Офис', icon: Building2 },
  { id: 'commercial', label: 'Коммерция', icon: Building2 },
  { id: 'land', label: 'Участок', icon: MapPin },
]

export default function AddObjectPage() {
  const [step, setStep] = useState(1)
  const [selectedType, setSelectedType] = useState('')
  const [price, setPrice] = useState('')
  const [formattedPrice, setFormattedPrice] = useState('')

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '')
    setPrice(raw)
    setFormattedPrice(raw.replace(/\B(?=(\d{3})+(?!\d))/g, ' '))
  }

  return (
    <div className="min-h-screen pb-24 bg-gray-50 dark:bg-gray-900">
      {/* Шапка */}
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Добавить объект</h1>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        {/* Прогресс */}
        <div className="flex gap-2 mb-8">
          {[1, 2, 3].map(s => (
            <div key={s} className={`flex-1 h-2 rounded-full ${s <= step ? 'bg-primary-500' : 'bg-gray-200 dark:bg-gray-700'}`} />
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Тип недвижимости
              </label>
              <div className="grid grid-cols-2 gap-3">
                {types.map(type => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`p-4 rounded-2xl border-2 text-center transition-all ${
                      selectedType === type.id
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400'
                        : 'border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:text-gray-300'
                    }`}
                  >
                    <type.icon className="w-6 h-6 mx-auto mb-2" />
                    <span className="font-medium">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Район
              </label>
              <select className="input-field">
                <option>Выберите район</option>
                {districts.map(d => <option key={d}>{d}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Адрес
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="text" placeholder="Улица, дом" className="input-field pl-12" />
              </div>
            </div>

            <button 
              onClick={() => setStep(2)}
              disabled={!selectedType}
              className="w-full py-4 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-300 text-white rounded-2xl font-medium transition-colors"
            >
              Продолжить
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            {/* Цена с разделителями! */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Цена (₸)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text"
                  value={formattedPrice}
                  onChange={handlePriceChange}
                  placeholder="0"
                  className="input-field pl-12 text-lg font-medium"
                />
              </div>
              {formattedPrice && (
                <p className="mt-2 text-primary-600 font-bold text-lg">
                  {formattedPrice} ₸
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Площадь, м²
                </label>
                <div className="relative">
                  <Maximize className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="number" className="input-field pl-12" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Комнат
                </label>
                <div className="relative">
                  <BedDouble className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="number" className="input-field pl-12" />
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => setStep(1)}
                className="flex-1 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Назад
              </button>
              <button 
                onClick={() => setStep(3)}
                className="flex-1 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-2xl font-medium transition-colors"
              >
                Продолжить
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Фотографии
              </label>
              <button className="w-full aspect-video rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-600 flex flex-col items-center justify-center gap-3 hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                <Camera className="w-10 h-10 text-gray-400" />
                <span className="text-gray-500">Загрузить фото</span>
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Описание
              </label>
              <textarea 
                rows={4}
                placeholder="Опишите объект..."
                className="input-field resize-none"
              />
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => setStep(2)}
                className="flex-1 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Назад
              </button>
              <button className="flex-1 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-2xl font-medium transition-colors flex items-center justify-center gap-2">
                <Check className="w-5 h-5" />
                Опубликовать
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
