'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase } from 'lucide-react'

const experiences = [
  {
    company: 'Tech Solutions Inc.',
    position: 'Senior Java Developer',
    duration: '2021 - Present',
    description: [
      'Led a team of 5 developers to build a microservices-based SaaS platform',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Optimized database queries improving API response times by 40%',
    ],
  },
  {
    company: 'Digital Innovations LLC',
    position: 'Java Developer',
    duration: '2018 - 2021',
    description: [
      'Developed RESTful APIs for enterprise applications using Spring Boot',
      'Integrated third-party payment and authentication services',
      'Mentored junior developers in best practices and code reviews',
    ],
  },
  {
    company: 'StartUp Ventures',
    position: 'Junior Java Developer',
    duration: '2016 - 2018',
    description: [
      'Built core features for the company flagship product',
      'Participated in agile development processes and sprint planning',
      'Fixed critical bugs and improved application stability',
    ],
  },
]

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-6 rounded-lg shadow-sm border"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold">{exp.position}</h3>
                      <span className="text-sm text-muted-foreground">{exp.duration}</span>
                    </div>
                    <h4 className="text-lg font-medium text-primary mb-4">{exp.company}</h4>
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
