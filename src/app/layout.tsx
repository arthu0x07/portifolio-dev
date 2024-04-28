import { LoadFonts } from '@/utils/fonts'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <LoadFonts />
      <body>{children}</body>
    </html>
  )
}
