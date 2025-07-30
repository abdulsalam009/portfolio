'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Cpu } from 'lucide-react'

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    { name: 'Java Development', icon: <Code className="h-6 w-6" /> },
    { name: 'Database Design', icon: <Database className="h-6 w-6" /> },
    { name: 'System Architecture', icon: <Cpu className="h-6 w-6" /> },
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
              <p className="mb-4">
                I'm a passionate Full Stack Developer with 5+ years of experience specializing in Java-based web applications. 
                I love solving complex problems and building efficient, scalable solutions.
              </p>
              <p className="mb-4">
                My journey in software development began when I built my first Java application in college, and I've been 
                hooked ever since. I thrive in collaborative environments and enjoy mentoring junior developers.
              </p>
              <p>
                When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new programming languages.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">What I Do</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{skill.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {index === 0 && 'Building robust backend systems with Java and Spring'}
                        {index === 1 && 'Designing efficient database schemas and queries'}
                        {index === 2 && 'Creating scalable and maintainable system architectures'}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
