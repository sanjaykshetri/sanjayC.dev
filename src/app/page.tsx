import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, FileDown, FlaskConical, BarChart3, Sparkles, Code, LinkIcon } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

const highlights = [
  {
    icon: BarChart3,
    title: 'Projects',
    description: 'Applied ML case studies spanning trust systems, NLP pipelines, recommenders, and analytics products.',
    href: '/portfolio',
    color: 'text-primary-500',
    bg: 'bg-primary-50 dark:bg-primary-950',
  },
  {
    icon: FlaskConical,
    title: 'Research',
    description: 'Quantitative behavioral research and model evaluation work, with reproducible thinking and rigor.',
    href: '/portfolio#published-research',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-950',
  },
  {
    icon: Sparkles,
    title: 'Writing',
    description: 'Technical writing and reflections on AI systems, model trust, and decision intelligence.',
    href: '/blog',
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-950',
  },
  {
    icon: FileDown,
    title: 'Resume',
    description: 'Download my resume for roles in data science, quantitative research, and machine learning.',
    href: '/resume',
    color: 'text-sky-500',
    bg: 'bg-sky-50 dark:bg-sky-950',
  },
]

const featuredProjects = [
  {
    title: 'TrustShield',
    description: 'AI platform for trust and risk analytics across fraud, reviews, and misinformation workflows.',
    tags: ['Machine Learning', 'Risk Analytics', 'Product Engineering'],
    href: '/portfolio#trustshield',
  },
  {
    title: 'Tentacles of Misinformation',
    description: 'ML and NLP system for misinformation detection with explainable classification outputs.',
    tags: ['NLP', 'Misinformation', 'Explainability'],
    href: '/portfolio#tentacles',
  },
  {
    title: 'Teacher Assistant Dashboard',
    description: 'Education analytics platform for tracking student outcomes and early-risk detection.',
    tags: ['Education Analytics', 'Dashboards', 'Early Warning'],
    href: '/portfolio#teacher-assistant',
  },
  {
    title: 'Emotion-Based Book Recommender',
    description: 'NLP recommender system using semantic embeddings to map affective intent to book suggestions.',
    tags: ['NLP', 'Embeddings', 'Recommendation Systems'],
    href: '/portfolio#emotion-recommender',
  },
  {
    title: 'Published Behavioral Research',
    description: 'Master\'s thesis research on cognitive correlates of vulnerability to misinformation.',
    tags: ['Misinformation', 'Behavioral Science', 'Cognitive Science'],
    href: '/portfolio#published-research',
  },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-meditation-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
        {/* Decorative orbs */}
        <div aria-hidden="true" className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200 dark:bg-primary-900/20 rounded-full blur-3xl opacity-30" />
        <div aria-hidden="true" className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-meditation-200 dark:bg-meditation-900/20 rounded-full blur-3xl opacity-30" />

        <div className="relative section-container text-center py-24 pt-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 mb-8 shadow-sm">
            <Sparkles size={14} className="text-meditation-500" />
            Machine Learning · Behavioral AI · NLP · Trustworthy AI
          </div>

          <div className="relative mx-auto mb-8 h-44 w-44 overflow-hidden rounded-full border-4 border-white/80 shadow-2xl ring-1 ring-gray-200 dark:border-gray-800 dark:ring-gray-700 md:h-56 md:w-56">
            <Image
              src="/headshot.png"
              alt="Portrait of Sanjay Chhetri"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 224px, 176px"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Sanjay{' '}
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-meditation-600 dark:from-primary-400 dark:via-primary-300 dark:to-meditation-400 bg-clip-text text-transparent">
              Chhetri
            </span>
          </h1>

          <p className="text-base md:text-lg font-semibold tracking-wide text-gray-600 dark:text-gray-300 mb-5 uppercase">
            Data Scientist | Cognitive & Behavioral Scientist
          </p>

          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            My work sits at the intersection of machine learning, behavioral science, and applied research. Drawing on a background in cognitive science, behavioral research, and quantitative methods, I build human-centered AI and machine learning systems that help people make better decisions from complex data.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-16">
            <Link href="/portfolio" className="btn-primary text-base px-8 py-4">
              View Projects
              <ArrowRight size={18} />
            </Link>
            <Link href="/resume" target="_blank" rel="noopener noreferrer" className="btn-secondary text-base px-8 py-4">
              <FileDown size={18} />
              View Resume
            </Link>
            <a
              href="https://github.com/sanjaykshetri"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base px-8 py-4"
            >
              <Code size={18} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sanjaychhetri/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base px-8 py-4"
            >
              <LinkIcon size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="section-container">
          <SectionHeader
            label="Explore"
            title="Professional Focus Areas"
            description="Technical depth and product execution across machine learning, quantitative research, and decision systems."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <Link key={item.href} href={item.href}>
                <Card className="p-6 h-full group cursor-pointer">
                  <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <item.icon size={24} className={item.color} />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <SectionHeader
            label="Featured Work"
            title="Selected Projects"
            description="Highlights from applied machine learning, NLP, and behavioral science research."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Link key={project.href} href={project.href}>
                <Card className="p-6 h-full group cursor-pointer">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="primary">{tag}</Badge>
                    ))}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/portfolio" className="btn-primary">
              View All Projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
