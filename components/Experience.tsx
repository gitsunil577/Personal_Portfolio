'use client'

const Experience = () => {
  const experiences = [
    {
      date: 'Aug 2025 - present',
      title: 'Web Developer',
      company: 'Academic Project',
      description: 'Developing and maintaining responsive web applications using Next.js and modern frontend technologies. Collaborating with design and backend teams to deliver high-quality user experiences.',
      responsibilities: [
        'Built reusable components and optimized application performance',
        'Implemented responsive designs and ensured cross-browser compatibility',
        'Participated in code reviews and mentored for other developers'
      ]
    },
    {
      date: 'Jun 2025 - July 2025',
      title: 'Data Analyst Intern',
      company: 'Central Tool Room & Training Centre, Bhubaneswar',
      description: 'Developed key performance indicator (KPI) dashboards for hospital administrators, tracking metrics like length of stay, readmission rates, and resource utilization to drive better management decisions',
      responsibilities: [
        'Developed Interactive Dashboard for Visualizing Hospital KPIs Performance',
        'Collaborated with cross-functional teams to gather requirements and deliver insights',
        'Learned and applied data analysis techniques to real-world scenarios'
      ]
    },
    {
      date: 'Aug 2024 - Sep 2024',
      title: 'Data Science Intern',
      company: 'NIST University, Berhampur',
      description: 'Worked on data preprocessing, exploratory data analysis, and building machine learning models using Python libraries such as Pandas, NumPy, and Scikit-learn. Gained hands-on experience in data visualization and model evaluation techniques.',
      responsibilities: [
        'Conducted data cleaning and preprocessing to ensure data quality',
        'Built and evaluated machine learning models for predictive analysis',
        'Created visualizations to communicate findings effectively'
      ]
    }
  ]

  return (
    <section id="experience" className="bg-gradient-to-b from-dark to-dark/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Work <span className="gradient-text">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div
                className="absolute w-4 h-4 bg-primary rounded-full border-4 border-dark transform"
                style={{
                  left: index % 2 === 0 ? 'auto' : '2rem',
                  right: index % 2 === 0 ? '-2.5rem' : 'auto',
                  top: '1.5rem'
                }}
              ></div>

              <div className="ml-16 md:ml-0 glass rounded-xl p-6 card-hover">
                <span className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-3">
                  {exp.date}
                </span>
                <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                <h4 className="text-secondary text-lg font-semibold mb-3">{exp.company}</h4>
                <p className="text-gray-400 mb-4">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start gap-2 text-gray-400">
                      <span className="text-primary mt-1">▹</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
