'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ProjectCard from './ProjectCard'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing.',
    technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
    image: '/images/project1.jpg',
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.example.com',
  },
  {
    title: 'Task Management System',
    description: 'A collaborative task management application with real-time updates and team features.',
    technologies: ['Java', 'Spring Boot', 'WebSocket', 'MongoDB'],
    image: '/images/project2.jpg',
    githubUrl: 'https://github.com/yourusername/task-management',
    liveUrl: 'https://tasks.example.com',
  },
  {
    title: 'API Gateway Service',
    description: 'A microservices API gateway with authentication, rate limiting, and request routing.',
    technologies: ['Java', 'Spring Cloud Gateway', 'OAuth2', 'Redis'],
    image: '/images/project1.jpg',
    githubUrl: 'https://github.com/yourusername/api-gateway',
    liveUrl: null,
  },
]

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}