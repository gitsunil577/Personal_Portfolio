'use client'

import { FaGithub, FaExternalLinkAlt, FaCar, FaCamera, FaHospital } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      icon: FaCar,
      title: 'Vehicle Rental System',
      description: 'A full-stack vehicle rental platform featuring user authentication, real-time vehicle availability tracking, a robust reservation management system, and secure payment gateway integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: ['https://github.com/gitsunil577/RentX_Frontend'],
      demo: 'https://rentx-five-vert.vercel.app'
    },
    {
      icon: FaCamera,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with smooth animations, interactive elements, and optimized performance.',
      tags: ['Next.Js', 'tailwindCSS', 'TypeScript'],
      github: '#',
      demo: '#'
    },
    {
      icon: FaHospital,
      title: 'hospital Management System',
      description: 'A comprehensive hospital management system with patient records, appointment scheduling, billing, and reporting features.',
      tags: ['HTML5', 'CSS3', 'javaScipt'],
      github: 'https://github.com/gitsunil577/HospitalManagement',
      demo: 'https://hospitalmanagement-daxg.onrender.com/'
    }
  ]

  return (
    <section id="projects" className="bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-xl overflow-hidden card-hover group"
            >
              {/* Project Icon/Image */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                <project.icon className="text-7xl text-primary group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={Array.isArray(project.github) ? project.github[0] : project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
                  >
                    <FaGithub size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
                  >
                    <FaExternalLinkAlt size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
