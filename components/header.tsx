'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Search, Menu, X } from 'lucide-react'
import LogoAntari from '@/public/images/LogoAntari.png'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src={LogoAntari}
              alt="Agropecuaria Antari"
              width={150}
              height={50}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>
          
          {/* Menú de escritorio */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-green-400 uppercase text-sm font-medium">
              Inicio
            </Link>
            <Link href="/productos" className="text-white hover:text-green-400 uppercase text-sm font-medium">
              Productos
            </Link>
            <Link href="/ganaderia" className="text-white hover:text-green-400 uppercase text-sm font-medium">
              Ganadería
            </Link>
            <Link href="/siembra" className="text-white hover:text-green-400 uppercase text-sm font-medium">
              Siembra
            </Link>
            <Link href="/contacto" className="text-white hover:text-green-400 uppercase text-sm font-medium">
              Contáctanos
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              className="text-white hover:text-green-400"
              aria-label="Buscar"
            >
              <Search className="h-5 w-5" />
            </button>
            
            {/* Botón de menú móvil */}
            <button 
              className="md:hidden text-white hover:text-green-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-white hover:text-green-400 uppercase text-sm font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/productos" 
                className="text-white hover:text-green-400 uppercase text-sm font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Productos
              </Link>
              <Link 
                href="/ganaderia" 
                className="text-white hover:text-green-400 uppercase text-sm font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Ganadería
              </Link>
              <Link 
                href="/siembra" 
                className="text-white hover:text-green-400 uppercase text-sm font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Siembra
              </Link>
              <Link 
                href="/contacto" 
                className="text-white hover:text-green-400 uppercase text-sm font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Contáctanos
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

