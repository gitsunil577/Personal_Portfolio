'use client'

import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa'

const Achievement = () => {
  const achievements = [
    {
      icon: FaTrophy,
      title: 'National Finalist (Top 90 of 200K+ Teams)',
      event: 'Google Cloud GenAI Exchange Hackathon',
      description: 'Developed CareerCraft AI, a production-ready ecosystem using Gemini 1.5 Flash, Vertex AI, and Document AI for personalized career roadmapping and Built a scalable architecture on Google Cloud Run with featuring automated CI/CD pipelines.',
      tags: ['Gemini 1.5 Flash', 'Vertex AI', 'Document AI', 'Google Cloud Run', 'CI/CD'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: FaMedal,
      title: '1st Prize (South Region) & 3rd Runner-Up (State Level)',
      event: 'Odisha AI Symposium',
      description: 'Honored as a State-Level winner at an official pre-summit event for the India AI Impact Summit 2026. Collaborated on a scalable AI solution mentored by AHRC, IIT Bhubaneswar, focused on human-centric and ethical AI development.',
      tags: ['AI Development', 'IIT Bhubaneswar', 'Ethical AI', 'Human-Centric AI'],
      color: 'from-blue-500 to-purple-500'
    }
  ]

  return (
    <section id="achievements" className="bg-gradient-to-b from-dark to-dark/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Achievements</span> & Recognition
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="glass rounded-xl overflow-hidden card-hover group"
            >
              {/* Achievement Header */}
              <div className={`h-32 bg-gradient-to-br ${achievement.color} flex items-center justify-center relative overflow-hidden`}>
                <achievement.icon className="text-6xl text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              {/* Achievement Content */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <FaAward className="text-primary text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-secondary font-semibold text-lg">
                      {achievement.event}
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {achievement.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievement
