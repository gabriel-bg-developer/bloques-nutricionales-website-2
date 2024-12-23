import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-8 flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4">NutriBloque</h3>
          <p>Comprometidos con el éxito de los productores agropecuarios.</p>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
          <ul className="space-y-2">
            <li><Link href="/productos" className="hover:text-green-300">Productos</Link></li>
            <li><Link href="/ganaderia" className="hover:text-green-300">Ganadería</Link></li>
            <li><Link href="/siembra" className="hover:text-green-300">Siembra</Link></li>
            <li><Link href="/quienes-somos" className="hover:text-green-300">Quiénes Somos</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Contacto</h4>
          <p>Teléfono: (123) 456-7890</p>
          <p>Email: info@nutribloque.com</p>
          <p>Dirección: Calle Principal #123, Ciudad</p>
        </div>
        <div className="w-full md:w-1/4">
          <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-300">Facebook</a>
            <a href="#" className="hover:text-green-300">Instagram</a>
            <a href="#" className="hover:text-green-300">Twitter</a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-4 border-t border-green-700 mt-8 text-center">
        <p>&copy; 2023 NutriBloque. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

