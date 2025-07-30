'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from './ui/button'
import ThemeToggle from './ThemeToggle'

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-1">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/yourusername" target="_blank">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/yourusername" target="_blank">
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:your.email@example.com">
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}