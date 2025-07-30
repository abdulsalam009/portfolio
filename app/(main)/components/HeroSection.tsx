'use client'

import { motion } from 'framer-motion'
import { Download, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-primary">John Doe</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground">
                Full Stack Java Developer
              </h2>
              <p className="text-lg mb-8 max-w-lg">
                I build robust and scalable web applications using modern Java technologies and frameworks.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <a href="#projects">
                    View My Work <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/resume.pdf" download>
                    Download CV <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary"
            >
              <Image
                src="/images/avatar.jpg"
                alt="Profile Picture"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
