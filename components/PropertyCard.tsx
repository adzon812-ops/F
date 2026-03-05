'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Maximize, Phone, Heart } from 'lucide-react'
import { formatPrice } from '@/lib/utils'

interface Property {
  id: string
  title: string
  price: number
  district: string
  address: string
  area: number
  floor: string
  type: string
  image: string
  owner: {
    name: string
    rating: number
    phone: string
  }
  date: string
}

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="card group">
      {/* Изображение */}
      <Link href={`/object/${property.id}`} className="block relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Тип */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1.5 bg-primary-500 text-white text-xs font-semibold rounded-full shadow-lg">
            {property.type}
          </span>
        </div>

        {/* Дата */}
        <div className="absolute bottom-3 right-3">
          <span className="px-3 py-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur text-xs font-medium rounded-full dark:text-white">
            {property.date}
          </span>
        </div>

        {/* Лайк */}
        <button className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110">
          <Heart className="w-4 h-4 text-gray-600 dark:text-gray-300" />
        </button>
      </Link>

      {/* Контент */}
      <div className="p-5 space-y-3">
        <Link href={`/object/${property.id}`}>
          <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 leading-tight hover:text-primary-500 transition-colors">
            {property.title}
          </h3>
        </Link>

        <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-sm">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">{property.district}, {property.address}</span>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-1">
            <Maximize className="w-4 h-4" />
            <span>{property.area} м²</span>
          </div>
          <span>{property.floor}</span>
        </div>

        <div className="pt-3 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
          <span className="text-xl font-bold text-primary-500">
            {formatPrice(property.price)} ₸
          </span>
          <a
            href={`tel:${property.owner.phone}`}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-xl text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Звонок</span>
          </a>
        </div>

        {/* Риэлтор */}
        <div className="flex items-center gap-3 pt-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold">
            {property.owner.name[0]}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-gray-900 dark:text-white truncate text-sm">
              {property.owner.name}
            </p>
            <div className="flex items-center gap-1">
              <span className="text-amber-500 text-sm">★</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{property.owner.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
