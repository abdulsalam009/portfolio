'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  {
    category: 'Backend',
    items: [
      { name: 'Java', level: 95 },
      { name: 'Spring Boot', level: 90 },
      { name: 'Hibernate/JPA', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'Microservices', level: 80 },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 75 },
      { name: 'TypeScript', level: 80 },
      { name: 'Next.js', level: 70 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Docker', level: 80 },
      { name: 'Kubernetes', level: 70 },
      { name: 'Git', level: 90 },
      { name: 'Maven/Gradle', level: 85 },
      { name: 'CI/CD', level: 75 },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 70 },
    ],
  },
]

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillCategory, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-background p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-4">{skillCategory.category}</h3>
                <div className="space-y-4">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          className="h-2 rounded-full bg-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
