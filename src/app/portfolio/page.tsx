import { Metadata } from 'next'
import { BarChart3 } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected end-to-end projects in machine learning, NLP, recommender systems, educational analytics, and behavioral research.',
}

type ProjectAction = {
  label: string
  href?: string
}

type Project = {
  id: string
  title: string
  oneLine: string
  featured?: boolean
  technologies: string[]
  artifacts: string[]
  actions: ProjectAction[]
}

const selectedProjects: Project[] = [
  {
    id: 'tentacles',
    title: 'Tentacles of Misinformation',
    featured: true,
    oneLine: 'An end-to-end NLP and behavioral analytics platform for detecting misinformation using linguistic features, machine learning, and cognitive science.',
    technologies: ['Python', 'NLP', 'Scikit-learn', 'Hugging Face', 'Streamlit', 'Quarto', 'Machine Learning'],
    artifacts: ['Interactive Quarto Book', "Master's Thesis", 'Hugging Face / Streamlit Demo', 'GitHub Repository'],
    actions: [
      { label: 'Quarto Book', href: 'https://sanjaykshetri.github.io/tentacles-of-misinformation/' },
      { label: 'Live Dashboard', href: 'https://huggingface.co/spaces/sanjaykshetri/tentacles' },
      { label: 'View Code', href: 'https://github.com/sanjaykshetri/tentacles-of-misinformation/blob/main/capstone_notebook.ipynb' },
      { label: 'GitHub', href: 'https://github.com/sanjaykshetri/tentacles-of-misinformation' },
    ],
  },
  {
    id: 'teacher-assistant',
    title: 'Teacher Assistant Dashboard',
    oneLine: 'An AI-assisted educational analytics platform that integrates student performance, assessments, and interventions into actionable classroom insights.',
    technologies: ['Python', 'SQL', 'Streamlit', 'Pandas', 'Data Visualization'],
    artifacts: ['Interactive Dashboard', 'Jupyter Notebook', 'GitHub Repository'],
    actions: [
      { label: 'Live Demo', href: 'https://chhetriteacherassist.streamlit.app/' },
      { label: 'View Code', href: 'https://github.com/sanjaykshetri/Teacher_Assistant_Dashboard/blob/main/Teacher_Assistant_Dashboard_Technical_Report.ipynb' },
      { label: 'GitHub', href: 'https://github.com/sanjaykshetri/Teacher_Assistant_Dashboard' },
    ],
  },
  {
    id: 'emotion-recommender',
    title: 'Emotion-Based Book Recommender',
    oneLine: 'A semantic recommendation system that matches readers with books using transformer embeddings and natural language understanding.',
    technologies: ['Python', 'SBERT', 'Sentence Transformers', 'Streamlit', 'Recommendation Systems'],
    artifacts: ['Live Streamlit App', 'Jupyter Notebook', 'GitHub Repository'],
    actions: [
      { label: 'Live Demo', href: 'https://schhetribooksrecommend.streamlit.app/' },
      { label: 'View Code', href: 'https://github.com/sanjaykshetri/emotion-based-book-recommender/blob/main/notebooks/project_summary.ipynb' },
      { label: 'GitHub', href: 'https://github.com/sanjaykshetri/emotion-based-book-recommender' },
    ],
  },
  {
    id: 'published-research',
    title: 'Face Mask Research',
    oneLine: 'Peer-reviewed behavioral science research investigating how medical face masks influence first impressions across race and time.',
    technologies: ['R', 'Statistical Modeling', 'Experimental Design', 'Behavioral Science'],
    artifacts: ['Published Journal Paper', 'PDF', 'GitHub Repository (analysis/code, if available)'],
    actions: [
      { label: 'Published Article', href: 'https://link.springer.com/article/10.1007/s10919-026-00511-9' },
      { label: 'View PDF', href: '/facemask%20paper%20journal%20of%20nonverbal%20behavior.pdf' },
      { label: 'GitHub', href: 'https://github.com/sanjaykshetri/Face_mask_study/blob/main/norming_data_analysis.Rmd' },
    ],
  },
]

const trustShieldNote = {
  id: 'trustshield',
  title: 'TrustShield',
  description: 'TrustShield is an evolving platform initiative; selected projects below represent major bodies of work that inform its architecture and research direction.',
}

export default function PortfolioPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="section-container">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-950 rounded-xl flex items-center justify-center">
              <BarChart3 size={24} className="text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">Portfolio</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-1">
                Projects and Research
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
            Research and engineering at the intersection of NLP, machine learning, and educational technology.
          </p>
        </div>
      </section>

      <section className="pb-4 bg-white dark:bg-gray-950">
        <div className="section-container">
          <Card id={trustShieldNote.id} className="p-6 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-900">
            <p className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2">Platform Direction</p>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{trustShieldNote.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{trustShieldNote.description}</p>
          </Card>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="section-container">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">Selected Projects</h2>
            <p className="text-gray-600 dark:text-gray-300 italic max-w-4xl">
              A selection of end-to-end projects spanning machine learning, natural language processing, recommender systems, educational analytics, and behavioral research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectedProjects.map((project, index) => {
              const availableActions = project.actions.filter((action) => Boolean(action.href))

              return (
                <Card
                  key={project.id}
                  id={project.id}
                  className={`${project.featured ? 'md:col-span-2 p-8 lg:p-10 border-primary-200 dark:border-primary-900 bg-gradient-to-br from-primary-50/80 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950' : 'p-6'} flex flex-col`}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <h3 className={`${project.featured ? 'text-2xl md:text-3xl' : 'text-xl'} font-semibold text-gray-900 dark:text-gray-100`}>
                      {index + 1}. {project.title}
                    </h3>
                    {project.featured && <Badge variant="primary">Flagship Project</Badge>}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 border-l-4 border-primary-300 dark:border-primary-700 pl-4 mb-5 leading-relaxed">
                    {project.oneLine}
                  </p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="default">{tech}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-5">
                    <p className="text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-2">Artifacts</p>
                    <ul className="space-y-1.5">
                      {project.artifacts.map((artifact) => (
                        <li key={artifact} className="text-sm text-gray-600 dark:text-gray-300">{artifact}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                    {availableActions.map((action) => (
                      <a
                        key={action.label}
                        href={action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        {action.label}
                      </a>
                    ))}
                    {availableActions.length === 0 && (
                      <span className="text-sm text-gray-500 dark:text-gray-400">Artifact links coming soon.</span>
                    )}
                  </div>
                </Card>
              )
            })}
          </div>

          <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            Each project follows a consistent structure: one-sentence overview, technology badges, and action buttons that only appear when a public artifact link is available.
          </p>
        </div>
      </section>
    </div>
  )
}
