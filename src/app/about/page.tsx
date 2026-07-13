import { Metadata } from 'next'
import { Brain, Database, Rocket, Microscope } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Sanjay Chhetri, a data scientist whose work bridges machine learning, behavioral science, and applied research.',
}

const expertise = {
  'Machine Learning & AI': ['Supervised Learning', 'NLP', 'Transformer Models', 'Recommendation Systems', 'Feature Engineering', 'Model Evaluation'],
  'Data Science': ['Python', 'SQL', 'R', 'Statistical Modeling', 'Experimental Design', 'Data Visualization'],
  'Software & Deployment': ['Streamlit', 'Next.js', 'React', 'Git', 'GitHub', 'Vercel', 'Docker'],
  'Research': ['Behavioral Science', 'Cognitive Science', 'Quantitative Methods', 'Experimental Psychology', 'Scientific Communication'],
}

const timeline = [
  {
    title: 'Research Assistant',
    subtitle: 'Montclair State University',
    description: 'Conducted behavioral and cognitive research using experimental methods and quantitative analysis.',
    icon: Microscope,
  },
  {
    title: 'Published Research',
    subtitle: 'Journal of Nonverbal Behavior',
    description: 'Published peer-reviewed work on face masks, first impressions, and social perception.',
    icon: Brain,
  },
  {
    title: 'Springboard Data Science Fellowship',
    subtitle: 'Machine Learning and Analytics Training',
    description: 'Advanced applied ML, statistics, and end-to-end project development across real-world datasets.',
    icon: Database,
  },
  {
    title: 'Machine Learning Portfolio',
    subtitle: 'NLP, Recommenders, Education Analytics',
    description: 'Built deployable projects spanning misinformation detection, recommender systems, and analytics dashboards.',
    icon: Rocket,
  },
  {
    title: 'TrustShield',
    subtitle: 'Trust and Risk Intelligence Platform',
    description: 'Designing a unified product direction for trustworthy AI across fraud, misinformation, and decision support workflows.',
    icon: Rocket,
  },
]

const researchInterests = [
  'Human-centered AI',
  'Trustworthy AI',
  'Misinformation Detection',
  'Behavioral Analytics',
  'Recommendation Systems',
  'Educational Data Science',
  'Fraud Detection',
  'Explainable Machine Learning',
]

const education = [
  'M.S. in Psychological Sciences - Montclair State University',
  'Graduate Certificate in Advanced Quantitative Methods - Montclair State University',
  'Springboard Data Science Career Track',
  'B.A. in Psychology - Ramapo College of New Jersey',
  'B.A. in Mathematics & English Literature - Tribhuvan University',
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">About</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Sanjay Chhetri
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              Data Scientist | Cognitive & Behavioral Scientist
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              My work sits at the intersection of machine learning, behavioral science, and applied research. Drawing on a background in cognitive science, behavioral research, and quantitative methods, I build human-centered AI and machine learning systems that help people make better decisions from complex data.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="pb-8 bg-white dark:bg-gray-950">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 border-primary-100 dark:border-primary-900 bg-gradient-to-r from-primary-50/70 to-white dark:from-gray-900 dark:to-gray-900">
              <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-4">Quick Facts</p>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-200">
                <li><span className="font-semibold">Location:</span> Greater Baltimore, Maryland</li>
                <li><span className="font-semibold">Open to:</span> Data Scientist, Applied AI, Machine Learning, Research Scientist roles</li>
                <li><span className="font-semibold">Specialties:</span> NLP, Behavioral AI, Trustworthy AI, Recommendation Systems</li>
                <li><span className="font-semibold">Publications:</span> 1 peer-reviewed journal article</li>
                <li><span className="font-semibold">Flagship Projects:</span> 4 featured projects</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Educational Foundation */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <SectionHeader
            label="Background"
            title="Educational Foundation"
            description="My interdisciplinary training across mathematics, psychology, and quantitative research."
          />
          <div className="max-w-4xl mx-auto space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              My academic journey has been intentionally interdisciplinary, bringing together mathematics, psychology, and quantitative research. This combination shapes how I approach machine learning, not only from the perspective of algorithms and data, but also through an understanding of how people think, learn, and make decisions.
            </p>
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-3">Education</p>
              <ul className="space-y-2">
                {education.map((item) => (
                  <li key={item} className="text-gray-600 dark:text-gray-300">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="section-container">
          <SectionHeader
            label="Now"
            title="Current Focus"
            description="The practical problems and system-level work I am focused on right now."
          />
          <div className="max-w-4xl mx-auto space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              I am currently focused on building intelligent systems that combine machine learning with behavioral science to solve real-world problems involving trust, misinformation, recommendation systems, educational analytics, and fraud detection.
            </p>
            <p>
              My work emphasizes end-to-end development, from data collection and statistical analysis to model development, deployment, visualization, and technical communication. I enjoy transforming research ideas into practical software products that are technically rigorous, interpretable, and useful to decision makers.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="section-container">
          <SectionHeader
            label="Narrative"
            title="My Story"
            description="A professional trajectory shaped by research, data science, and human-centered problem solving."
          />
          <div className="max-w-4xl mx-auto space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              My career has been shaped by a single question: how do people think, learn, and make decisions?
            </p>
            <p>
              That question first led me to mathematics, where I spent years helping students develop analytical reasoning and problem-solving skills. It later drew me into psychology and cognitive science, where I studied human judgment, misinformation, and behavioral decision-making through experimental research and advanced quantitative methods.
            </p>
            <p>
              Today, I bring these experiences together as a data scientist. My work combines machine learning, natural language processing, statistical modeling, and software engineering to build intelligent systems that solve real-world problems. I am particularly interested in applications where human behavior and artificial intelligence intersect, such as misinformation detection, recommendation systems, educational analytics, fraud detection, and trustworthy AI.
            </p>
            <p>
              I enjoy building complete, end-to-end data products that move from research questions and raw data to deployed applications. Whether developing predictive models, designing interactive dashboards, or publishing research, my goal is to create systems that are technically rigorous, interpretable, and useful to the people who rely on them.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="section-container">
          <SectionHeader
            label="Expertise"
            title="Areas of Expertise"
            description="Organized capabilities across machine learning, data science, software delivery, and research."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {Object.entries(expertise).map(([category, items]) => (
              <Card key={category} className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="default">{skill}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <SectionHeader
            label="Focus"
            title="Research Interests"
            description="Problem areas where I am most motivated to build, study, and deploy data-driven systems."
          />
          <div className="max-w-4xl mx-auto flex flex-wrap gap-2">
            {researchInterests.map((interest) => (
              <Badge key={interest} variant="primary">{interest}</Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Philosophy */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="section-container">
          <SectionHeader
            label="Approach"
            title="Professional Philosophy"
            description="How I think about impact, modeling, and decision support in data science."
          />
          <div className="max-w-4xl mx-auto">
            <Card className="p-7 border-primary-100 dark:border-primary-900 bg-gradient-to-br from-primary-50/60 to-white dark:from-gray-900 dark:to-gray-950">
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                I believe the most impactful data science combines technical excellence with a deep understanding of human behavior. Models do not make decisions; people do. For that reason, I am especially interested in developing AI systems that are interpretable, trustworthy, and designed to support better human judgment rather than replace it.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Selected Publications */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <SectionHeader
            label="Publications"
            title="Selected Publications"
            description="Peer-reviewed and technical writing outputs connected to this portfolio."
          />
          <div className="max-w-4xl mx-auto space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              Bjornsdottir, R.T., Wilson, J.P., & Chhetri, S. (2026). The Effect of Medical Face Masks on First Impressions Across Race and Time: Testing Social and Perceptual Explanations. Journal of Nonverbal Behavior.
            </p>
            <p>
              Additional technical writing, project documentation, and research reports are available throughout this portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* Beyond Data Science */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="section-container">
          <SectionHeader
            label="Outside Work"
            title="Beyond Data Science"
            description="Interests that strengthen the habits and mindset behind my technical work."
          />
          <div className="max-w-4xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              Outside of my professional work, I enjoy studying philosophy, Sanskrit, and the history of ideas, maintaining a regular contemplative practice, and spending time with my family. These pursuits reinforce qualities that I value in my work as well: curiosity, disciplined learning, patience, and thoughtful problem solving.
            </p>
          </div>
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <SectionHeader
            label="Future"
            title="Looking Ahead"
            description="Where I aim to contribute as AI transforms decision-making and human learning."
          />
          <div className="max-w-4xl mx-auto space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              Artificial intelligence is reshaping how people learn, work, and make decisions. My goal is to contribute to that transformation by developing AI systems that are technically robust, scientifically grounded, and designed to augment human judgment rather than replace it.
            </p>
            <p>
              I am particularly interested in opportunities where machine learning, behavioral science, and software engineering come together to create products that have meaningful real-world impact.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <SectionHeader
            label="Journey"
            title="Career Trajectory"
            description="A progression from behavioral research to end-to-end machine learning product development."
          />
          <div className="max-w-2xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-4 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-950 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-gray-200 dark:bg-gray-800 mt-2" />
                  )}
                </div>
                <div className="pb-8 last:pb-0">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mt-1 mb-1">{item.title}</h3>
                  <p className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-1">{item.subtitle}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
