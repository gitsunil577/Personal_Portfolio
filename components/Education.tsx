'use client'

import { FaTrophy } from 'react-icons/fa'

const Education = () => {
  const education = [
    {
      date: '2022 - 2026',
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'NIST University, Berhampur',
      description: 'Focused on software engineering, data structures, algorithms, and web development.Participated in Smart India hackathons in 2024 and Gen AI hackathon in 2025.',
      achievement: 'CGPA: 8.6/10.0'
    },
    {
      date: '2020 - 2022',
      degree: 'Higher Secondary Education',
      institution: 'K.S.U.B Higher Secondary School, Bhanjanagar',
      description: 'Completed with specialization in Science (Physics, Chemistry, Mathematics).',
      achievement: 'Percentage: 80.16%'
    },
    {
      date: '2019 - 2020',
      degree: 'Secondary Education',
      institution: 'Mahamayee High School, Panthikari',
      description: 'Built a strong foundation in core subjects and discovered passion for technology and programming.',
      achievement: 'Percentage: 78%'
    }
  ]

  return (
    <section id="education" className="bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

          {education.map((item, index) => (
            <div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-auto md:right-auto md:top-6 w-4 h-4 bg-primary rounded-full border-4 border-dark transform md:-translate-x-1/2"
                style={{ left: index % 2 === 0 ? 'auto' : '2rem', right: index % 2 === 0 ? '-2.5rem' : 'auto' }}
              ></div>

              <div className="ml-16 md:ml-0 glass rounded-xl p-6 card-hover">
                <span className="inline-block bg-primary/2 Developed strong anal0 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-3">
                  {item.date}
                </span>
                <h3 className="text-2xl font-bold mb-2">{item.degree}</h3>
                <h4 className="text-primary text-lg font-semibold mb-3">{item.institution}</h4>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <div className="flex items-center gap-2 text-accent">
                  <FaTrophy />
                  <span className="font-semibold">{item.achievement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
