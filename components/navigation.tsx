'use client'

import { Menu, X } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ME' },
    { href: '/chat', label: 'CHAT' },
    { href: '/me', label: 'PROJECTS' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <nav className="flex items-center p-4 max-w-7xl mx-auto">
        {/*menu*/}
        <button 
          className="p-2 z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
          style={{ marginRight: '4px' }}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
          <span className="sr-only">Menu</span>
        </button>

        {/*nav links*/}
        <div 
          className={`flex items-center space-x-0 transition-opacity duration-300 ease-in-out ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{
            marginLeft: isOpen ? '0.5px' : '0px',
          }}
        >
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={() => setIsOpen(false)}
              className={`py-2 px-2 font-medium hover:opacity-70 transition-opacity duration-300 ease-in-out ${
                pathname === route.href ? 'opacity-100' : 'opacity-50'
              }`}
            >
              {route.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

