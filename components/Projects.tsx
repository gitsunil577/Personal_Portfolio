'use client'

import { FaExternalLinkAlt, FaCar, FaHospital, FaBrain } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      icon: FaBrain,
      title: 'AI Powered Skill and Career Advisor',
      description: 'AI-powered career advisory system using Google Gemini and Vertex AI for personalized learning paths. Features real-time interview coaching with Speech-to-Text, Video Intelligence, and automated ATS resume scoring with Document AI.',
      tags: ['Google Gemini', 'Vertex AI', 'Next.js', 'Node.js', 'MongoDB', 'Google Cloud'],
      demo: 'https://careercraft-frontend-1030709276859.us-central1.run.app/'
    },
    {
      icon: FaCar,
      title: 'Vehicle Rental System',
      description: 'Scalable vehicle rental platform using MERN stack with JWT authentication and Razorpay payment integration. Features 25+ RESTful APIs for vehicle operations, payments, and bookings with PDF invoice generation, SMS/email notifications via Twilio and Nodemailer.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Razorpay', 'Tailwind CSS', 'Firebase'],
      demo: 'https://rentx-five-vert.vercel.app'
    },
    {
      icon: FaHospital,
      title: 'Hospital Management System',
      description: 'Full-featured Hospital Management System frontend with 15+ responsive web pages featuring integrated payment processing, real-time search functionality, and GPS tracking. Includes secure authentication with reCAPTCHA validation and interactive dashboards for appointment/patient management.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'reCAPTCHA', 'GPS Tracking'],
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
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
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
