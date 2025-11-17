'use client'

import { FaCode, FaServer, FaTools } from 'react-icons/fa'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiPython, SiMongodb, SiGit, SiGithub, SiVisualstudiocode, SiFigma, SiDocker, SiMysql, SiPostman, SiExpress, SiAnaconda, SiVercel, SiRender } from 'react-icons/si'

const Skills = () => {
  const technologies = [
    { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
    { icon: SiCss3, name: 'CSS3', color: '#1572B6' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiReact, name: 'React', color: '#61DAFB' },
    { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
    { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
    { icon: SiPython, name: 'Python', color: '#FFE873' },
    { icon: SiGit, name: 'Git', color: '#F05032' },
    { icon: SiGithub, name: 'GitHub', color: '#181717' },
    { icon: SiVisualstudiocode, name: 'VS Code', color: '#007ACC' },
    { icon: SiPostman, name: 'Postman', color: '#EF5B25' },
    { icon: SiMongodb, name: 'MongoDB', color: '#589636' },
    { icon: SiExpress, name: 'Express', color: 'black' },
    {icon:SiVercel, name: 'Vercel', color: '#000000'},
    {icon:SiAnaconda, name: 'Anaconda', color: '#44A833'},
    {icon:SiRender, name: 'Render', color: '#24B47E'},
    { icon: SiDocker, name: 'Docker', color: '#2496ED' }
  ]

  return (
    <section id="skills" className="bg-gradient-to-b from-dark/50 to-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Technical <span className="gradient-text">Skills</span>
        </h2>

        {/* Technologies Grid */}
        <div className="glass rounded-xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <FaTools className="text-primary text-3xl" />
            <h3 className="text-2xl font-bold">Tools & Technologies</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 glass rounded-lg hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
              >
                <tech.icon className="text-4xl mb-2 transition-colors" style={{ color: tech.color }} />
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
