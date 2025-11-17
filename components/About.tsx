'use client'

import { FaTrophy, FaRegClock, FaCode } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: FaTrophy, value: '10+', label: 'Projects Completed' },
    { icon: FaRegClock, value: '2+', label: 'Years Experience' }, 
    { icon: FaCode, value: '5+', label: 'Core Technologies Mastered' },
  ]

  return (
    <section id="about" className="bg-gradient-to-b from-dark to-dark/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80 rounded-2xl glass overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center text-9xl">
                💼
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">
              I&apos;m a Web Developer
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              My passion lies in bringing ideas to life through code,
              combining technical expertise with creative problem-solving.
              I focus on delivering solutions that are not only beautiful and functional 
              but also built with clean, high-quality code.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I specialize in building responsive web applications, crafting intuitive user interfaces,
              and ensuring optimal performance across all platforms. Every project is an opportunity to
              learn, grow, and push the boundaries of what&apos;s possible.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center glass rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                  <stat.icon className="text-primary text-3xl mx-auto mb-2" />
                  <h4 className="text-2xl font-bold gradient-text">{stat.value}</h4>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 btn-glow mt-6"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
