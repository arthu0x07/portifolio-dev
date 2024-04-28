'use client'

import { DotGothic16, Manrope } from 'next/font/google'

export const dotGothic16 = DotGothic16({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dotgothic16',
})

export const manrope = Manrope({
  subsets: ['latin'],
  weight: ['800', '600', '400', '300'],
  variable: '--font-manrope',
})

export function LoadFonts() {
  return (
    <style jsx global>
      {`
        :root {
          --font-dotgothic16: ${dotGothic16.style.fontFamily};
          --font-manrope: ${manrope.style.fontFamily};
        }
      `}
    </style>
  )
}
