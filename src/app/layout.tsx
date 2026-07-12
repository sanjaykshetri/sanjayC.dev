import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Sanjay Chhetri | Data Scientist',
    template: '%s | Sanjay Chhetri',
  },
  description: 'Data science portfolio featuring machine learning, behavioral research, NLP, trustworthy AI, and applied analytics projects.',
  keywords: ['data science', 'machine learning', 'behavioral AI', 'NLP', 'trustworthy AI', 'applied analytics'],
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
