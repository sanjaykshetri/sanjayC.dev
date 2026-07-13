import { Metadata } from 'next'
import { FileDown, Code, LinkIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resume',
  description: 'View the resume and explore professional links for Sanjay Chhetri.',
}

export default function ResumePage() {
  return (
    <div className="pt-16">
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="section-container max-w-5xl">
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
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FileDown size={16} />
              Open PDF Directly
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

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-950">
            <iframe
              src="/Sanjay_Chhetri_Resume_07-04-26.pdf#toolbar=1&navpanes=0&scrollbar=1"
              title="Sanjay Chhetri resume"
              className="h-[70vh] min-h-[720px] w-full"
            />
          </div>

          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            If the embedded viewer does not load in your browser, use “Open PDF Directly”.
          </p>
        </div>
      </section>
    </div>
  )
}
