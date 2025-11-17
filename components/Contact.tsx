'use client'

import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const Contact = () => {
  const [state, handleSubmit] = useForm("mjkjzryr")

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'Sunildalai6128@gmail.com',
      link: 'mailto:Sunildalai6128@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 8457013810',
      link: 'tel:+918457013810'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Berhampur, India',
      link: 'https://www.google.com/maps/place/Brahmapur,+Odisha'
    }
  ]

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/gitsunil577', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sunil-dalai', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://x.com/Mr_S_Dalai_2005', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://www.instagram.com/mr.sunil.sl2029', label: 'Instagram' }
  ]

  return (
    <section id="contact" className="bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-gray-400 text-center text-lg mb-16 max-w-2xl mx-auto">
          Have a project in mind? Let&apos;s work together to create something amazing!
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-4 glass rounded-xl p-6 card-hover">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <info.icon className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{info.title}</h3>
                  <a
                    href={info.link}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-xl p-8">
            {state.succeeded ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. I&apos;ll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full bg-dark/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full bg-dark/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="w-full bg-dark/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                  />
                  <ValidationError 
                    prefix="Subject" 
                    field="subject"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="w-full bg-dark/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors resize-none"
                  ></textarea>
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 btn-glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact