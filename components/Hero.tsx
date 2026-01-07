'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaChevronDown } from 'react-icons/fa'

const Hero = () => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const roles = [
    'Full Stack Developer',
    'Frontend Developer',
    'AI/ML Enthusiast',
    'Problem Solver'
  ]

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length
      const fullText = roles[i]

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 50 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-secondary/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-primary text-lg md:text-xl">Hi, I&apos;m</p>
            <h1 className="text-5xl md:text-7xl font-bold">
              Sunil <span className="gradient-text">Dalai</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-300">
              {text}
              <span className="animate-pulse text-primary">|</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-xl">
             Dedicated developer specializing in creating innovative and visually compelling digital experiences with a commitment to clean, maintainable code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 btn-glow"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="glass hover:bg-white/10 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: FaGithub, href: 'https://github.com/gitsunil577' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sunil-dalai'},
                { icon: FaTwitter, href: 'https://x.com/Mr_S_Dalai_2005'},
                { icon: FaInstagram, href: 'https://www.instagram.com/mr.sunil.sl2029' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                  aria-label="Social media link"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Image/Animation */}
          <div className="relative flex items-center justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full glass flex items-center justify-center animate-float">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/profile.png"
                  alt="Sunil Dalai Profile"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full rounded-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <FaChevronDown size={32} className="text-primary" />
        </a>
      </div>
    </section>
  )
}

export default Hero
