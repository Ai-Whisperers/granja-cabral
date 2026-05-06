import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Granja Cabral — Huevos frescos en Coronel Oviedo',
  description: 'Huevos frescos recolectados diariamente. Delivery en Coronel Oviedo y Ruta 2. Del nido a tu mesa.',
  icons: '/images/icons/favicon.png',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
