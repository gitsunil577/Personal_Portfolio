'use client'

import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark/50 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="text-gray-400">
            &copy; {currentYear} Personal Portfolio. All Rights Reserved.
          </p>
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Designed & Built with <FaHeart className="text-accent animate-pulse" /> by Sunil Dalai
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
