'use client'

import { useState } from 'react'
import { FaFileAlt, FaEye, FaTimes } from 'react-icons/fa'

const Resume = () => {
  const [showResume, setShowResume] = useState(false)

  const handleViewResume = () => {
    setShowResume(true)
  }

  const handleClose = () => {
    setShowResume(false)
  }

  return (
    <section id="resume" className="bg-gradient-to-b from-dark/50 to-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="gradient-text">Resume</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="glass rounded-xl p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <FaFileAlt className="text-5xl text-white" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4">View My Resume</h3>
            <p className="text-gray-400 mb-6">
              Click below to view my professional resume. You can explore my experience,
              education, skills, and achievements in detail.
            </p>

            <button
              onClick={handleViewResume}
              className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 btn-glow inline-flex items-center gap-2"
            >
              <FaEye size={20} />
              View Resume
            </button>

            <p className="text-sm text-gray-500 mt-4">
              Note: Resume is available for viewing only
            </p>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl h-[90vh] bg-dark rounded-xl overflow-hidden">
            {/* Header */}
            <div className="glass px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">Sunil Dalai - Resume</h3>
              <button
                onClick={handleClose}
                className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-all duration-300"
                aria-label="Close"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* PDF Viewer with protection */}
            <div className="relative w-full h-[calc(100%-4rem)]">
              <iframe
                src="/SunilResume.pdf#toolbar=0&navpanes=0&scrollbar=1"
                className="w-full h-full"
                title="Resume"
                style={{
                  border: 'none',
                  pointerEvents: 'auto'
                }}
              />
              {/* Overlay to prevent right-click on PDF */}
              <div
                className="absolute inset-0 pointer-events-none"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Resume
