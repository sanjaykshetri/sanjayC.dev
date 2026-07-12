import { Metadata } from 'next'
import { Mail, Code, Tv, MessageSquare, MapPin, Briefcase } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { ContactForm } from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Sanjay Chhetri for collaborations, opportunities, or project discussions in data science and machine learning.',
}

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'For research collaborations, hiring conversations, and project inquiries.',
    value: 'sanjaykshetri@gmail.com',
    href: 'mailto:sanjaykshetri@gmail.com',
    color: 'text-primary-500',
    bg: 'bg-primary-50 dark:bg-primary-950',
  },
  {
    icon: Code,
    title: 'GitHub',
    description: 'Explore code, contribute to projects, or open an issue.',
    value: 'github.com/sanjaykshetri',
    href: 'https://github.com/sanjaykshetri',
    color: 'text-gray-700 dark:text-gray-300',
    bg: 'bg-gray-100 dark:bg-gray-800',
  },
  {
    icon: Tv,
    title: 'LinkedIn',
    description: 'Connect for professional updates and data science opportunities.',
    value: 'linkedin.com/in/sanjaychhetri',
    href: 'https://www.linkedin.com/in/sanjaychhetri/',
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-950',
  },
  {
    icon: MapPin,
    title: 'Location',
    description: 'Open to conversations with teams across the U.S.',
    value: 'Greater Baltimore Area',
    href: 'https://maps.google.com/?q=Greater+Baltimore+Area',
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-950',
  },
]

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="section-container">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-950 rounded-xl flex items-center justify-center">
              <MessageSquare size={24} className="text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">Contact</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-1">
                Let&apos;s Connect
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
            Whether you&apos;re interested in machine learning, AI, behavioral research, analytics, or potential collaboration, I&apos;d be happy to connect.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method) => (
              <a key={method.title} href={method.href} target={method.href.startsWith('mailto') ? '_self' : '_blank'} rel="noopener noreferrer">
                <Card className="p-6 h-full group cursor-pointer">
                  <div className={`w-12 h-12 ${method.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <method.icon size={24} className={method.color} />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{method.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{method.description}</p>
                  <p className="text-sm font-medium text-primary-600 dark:text-primary-400">{method.value}</p>
                </Card>
              </a>
            ))}
          </div>

          <Card className="p-6 max-w-4xl mx-auto mt-8">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary-50 dark:bg-primary-950 rounded-lg flex items-center justify-center">
                <Briefcase size={18} className="text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Currently seeking opportunities</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  I&apos;m interested in Data Scientist, Machine Learning Engineer, Applied AI, and Research Scientist roles where I can build machine learning systems and data-driven products that solve meaningful real-world problems.
                </p>
              </div>
            </div>
          </Card>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto mt-12">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
