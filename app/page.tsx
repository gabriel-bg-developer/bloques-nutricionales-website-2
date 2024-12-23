'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[80vh]">
          <Image
            src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1920&h=800"
            alt="Ganado alimentándose al atardecer"
            width={1920}
            height={800}
            className="object-cover brightness-75 absolute inset-0 h-full w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Bloques Nutricionales de Alta Calidad</h1>
              <p className="text-xl mb-8">La mejor nutrición para su ganado</p>
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full"
              >
                Ver Productos
              </Button>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nuestros Productos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: 'Bloque Mineral Equino',
                  description: 'Nutrición especializada para caballos',
                  image: 'https://images.unsplash.com/photo-1534773728080-33d31da27ae5?auto=format&fit=crop&w=500&h=500'
                },
                {
                  name: 'Bloque Mineral Ovino/Caprino',
                  description: 'Formulado para cabras y ovejas',
                  image: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&w=500&h=500'
                },
                {
                  name: 'Bloque Nutricional de Engorde',
                  description: 'Ideal para ganado de ceba',
                  image: 'https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?auto=format&fit=crop&w=500&h=500'
                },
                {
                  name: 'Bloque para Vacas Lecheras',
                  description: 'Optimizado para producción de leche',
                  image: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=500&h=500'
                }
              ].map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={500}
                      height={500}
                      className="object-cover h-full w-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <Button variant="outline" className="w-full">
                      Ver Detalles
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?auto=format&fit=crop&w=64&h=64"
                    alt="Calidad Premium"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Calidad Premium</h3>
                <p className="text-gray-600">Ingredientes seleccionados de la más alta calidad</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=64&h=64"
                    alt="Resultados Rápidos"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Resultados Rápidos</h3>
                <p className="text-gray-600">Fórmulas optimizadas para máximo rendimiento</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=64&h=64"
                    alt="Soporte Técnico"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Soporte Técnico</h3>
                <p className="text-gray-600">Asesoría especializada para nuestros clientes</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20">
          <div className="relative h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1920&h=600"
              alt="Paisaje ganadero"
              width={1920}
              height={600}
              className="object-cover brightness-50 absolute inset-0 h-full w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-white mb-6">¿Necesita más información?</h2>
                <p className="text-white text-xl mb-8">Contáctenos para obtener asesoría personalizada</p>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full"
                >
                  Contactar Ahora
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Agropecuaria Antari</h3>
              <p className="text-gray-400">Nutrición animal de calidad</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contacto</h3>
              <p className="text-gray-400">Teléfono: (123) 456-7890</p>
              <p className="text-gray-400">Email: info@antari.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Agropecuaria Antari. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

