import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Sanjay Chhetri',
    template: '%s | Sanjay Chhetri',
  },
  description: 'Data scientist portfolio focused on machine learning, quantitative research, and behavioral AI.',
  keywords: ['data science', 'machine learning', 'behavioral AI', 'NLP', 'quantitative research', 'trust analytics'],
  authors: [{ name: 'Sanjay Chhetri' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sanjayc.dev',
    siteName: 'Sanjay Chhetri',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
