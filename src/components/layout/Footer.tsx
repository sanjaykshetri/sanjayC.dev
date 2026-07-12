import Link from 'next/link'
import { Code, Linkedin, Mail, Brain } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-gradient-to-br from-primary-500 to-meditation-500 rounded-lg flex items-center justify-center text-white">
                <Brain size={15} />
              </div>
              <span className="font-semibold bg-gradient-to-r from-primary-600 to-meditation-600 dark:from-primary-400 dark:to-meditation-400 bg-clip-text text-transparent">
                Sanjay Chhetri
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Data Scientist focused on machine learning, quantitative research, and behavioral AI.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              {[
                { href: '/', label: 'Home' },
                { href: '/portfolio', label: 'Projects' },
                { href: '/portfolio#published-research', label: 'Research' },
                { href: '/blog', label: 'Writing' },
                { href: '/about', label: 'About' },
                { href: '/resume', label: 'Resume' },
                { href: '/contact', label: 'Contact' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-3">Connect</h3>
            <div className="flex flex-col gap-2">
              <a href="https://github.com/sanjaykshetri" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Code size={16} />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/sanjaykshetri/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Linkedin size={16} />
                LinkedIn
              </a>
              <Link href="/contact" 
                className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Mail size={16} />
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 text-center text-xs text-gray-400 dark:text-gray-600">
          © {new Date().getFullYear()} Sanjay Chhetri. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
