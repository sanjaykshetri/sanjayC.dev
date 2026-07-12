import { Metadata } from 'next'
import { FileDown, Code, LinkIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Download resume and explore professional links for Sanjay Chhetri.',
}

export default function ResumePage() {
  return (
    <div className="pt-16">
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="section-container max-w-3xl">
          <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-4">
            Resume
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Sanjay Chhetri
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
            Data Scientist | Machine Learning | Behavioral AI
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="/Sanjay_Chhetri_Resume_07-04-26.pdf"
              download
              className="btn-primary"
            >
              <FileDown size={16} />
              Download Resume PDF
            </a>
            <a
              href="https://github.com/sanjaykshetri"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Code size={16} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sanjaychhetri/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <LinkIcon size={16} />
              LinkedIn
            </a>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            The latest resume is available as a downloadable PDF.
          </p>
        </div>
      </section>
    </div>
  )
}
