import { Cormorant_Garamond, EB_Garamond, Raleway } from 'next/font/google'

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

export const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-eb-garamond',
})

export const raleway = Raleway({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--font-raleway',
})
