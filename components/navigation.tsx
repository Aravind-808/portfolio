"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    { href: "/", label: "HOME 🏠" },
    { href: "/about", label: "ABOUT ME 🙋🏻" },
    { href: "/chat", label: "CHAT WITH  \"AI\"  ME 💬" },
    { href: "/projects", label: "MY PROJECTS 💻" },
    { href: "/photogallery", label: "PHOTO GALLERY 📸" }
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <nav className="flex items-center p-4 max-w-7xl mx-auto">
        {/* Menu button */}
        <button
          className="z-50 relative left-0 sm:hidden w-6 h-6 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          <span className="sr-only">Menu</span>
        </button>

        {/* Navigation links */}
        <div
          className={`
            absolute top-full left-0 right-0 bg-white sm:relative sm:top-auto text-xl sm:left-auto sm:right-auto
            sm:flex sm:items-center sm:space-x-4 sm:ml-4
            transition-all duration-300 ease-in-out
            ${isOpen ? "block" : "hidden sm:flex"}
          `}
        >
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={() => setIsOpen(false)}
              className={`
                block py-2 px-4 font-medium hover:underline hover:opacity-90 transition-opacity duration-300 ease-in-out
                ${pathname === route.href ? "opacity-100" : "opacity-90"}  
                sm:inline-block sm:py-0 sm:px-2
              `}
            >
              {route.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}