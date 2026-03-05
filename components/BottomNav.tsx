'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, PlusCircle, Repeat, MessageCircle, User } from 'lucide-react'
import { useMobile } from '@/hooks/useMobile'

const navItems = [
  { href: '/', icon: Home, label: 'Объекты' },
  { href: '/add', icon: PlusCircle, label: 'Добавить' },
  { href: '/exchange', icon: Repeat, label: 'Обмен' },
  { href: '/chat', icon: MessageCircle, label: 'Чат' },
  { href: '/profile', icon: User, label: 'Профиль' },
]

export function BottomNav() {
  const pathname = usePathname()
  const isMobile = useMobile()

  // Не показываем на десктопе!
  if (!isMobile) return null

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 z-50 pb-safe">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 p-2 min-w-[64px] rounded-xl transition-colors ${
                isActive 
                  ? 'text-primary-500' 
                  : 'text-gray-400 dark:text-gray-500'
              }`}
            >
              <item.icon 
                className={`w-6 h-6 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} 
              />
              <span className="text-[11px] font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
