import React, { useState } from 'react'
import './ContactPage.css'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Hello Alasiri Motors!\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nMessage: ${form.message}`
    )
    window.open(`https://wa.me/254727497935?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  return (
    <div className="contact-page">
      <div className="contact-page__inner">
        {/* Heading */}
        <div className="contact-page__heading">
          <h1 className="contact-page__title">
            <span className="gradient-text">Get in Touch</span>
          </h1>
          <p className="contact-page__subtitle">We'd love to hear from you</p>
        </div>

        <div className="contact-page__grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h2 className="contact-info__title">Contact Information</h2>

            <div className="contact-info__items">
              <a href="mailto:alasirimotors@gmail.com" className="contact-info__item">
                <div className="contact-info__icon-wrap" style={{ background: 'rgba(59,130,246,0.12)', color: '#3b82f6' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                  </svg>
                </div>
                <div>
                  <p className="contact-info__label">Email</p>
                  <p className="contact-info__value">alasirimotors@gmail.com</p>
                </div>
              </a>

              <a href="tel:+254727497935" className="contact-info__item">
                <div className="contact-info__icon-wrap" style={{ background: 'rgba(16,185,129,0.12)', color: '#10b981' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
                  </svg>
                </div>
                <div>
                  <p className="contact-info__label">Phone / WhatsApp</p>
                  <p className="contact-info__value">+254 727 497 935</p>
                </div>
              </a>

              <a href="tel:+254705030596" className="contact-info__item">
                <div className="contact-info__icon-wrap" style={{ background: 'rgba(16,185,129,0.12)', color: '#10b981' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
                  </svg>
                </div>
                <div>
                  <p className="contact-info__label">Phone 2</p>
                  <p className="contact-info__value">+254 705 030 596</p>
                </div>
              </a>

              <div className="contact-info__item">
                <div className="contact-info__icon-wrap" style={{ background: 'rgba(139,92,246,0.12)', color: '#8b5cf6' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                  </svg>
                </div>
                <div>
                  <p className="contact-info__label">M-PESA</p>
                  <p className="contact-info__value">0797 900 911</p>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon-wrap" style={{ background: 'rgba(245,158,11,0.12)', color: '#f59e0b' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M288 0C129 0 0 129 0 288s129 288 288 288 288-129 288-288S447 0 288 0zm0 512C146.6 512 32 397.4 32 256S146.6 0 288 0s256 114.6 256 256-114.6 256-256 256zm-32-167.7c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm32-264.3c-44.2 0-80 35.8-80 80v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16c0-26.5 21.5-48 48-48s48 21.5 48 48v8c0 13.3-5.1 26.1-14.3 35.7l-34.5 36.2C280.6 201.5 272 218.1 272 236v12c0 8.8 7.2 16 16 16s16-7.2 16-16v-12c0-10 4.3-19.5 11.8-26.2l34.5-36.2C363.2 160 374 141.3 374 120v-8c0-44.2-35.8-80-80-80z" />
                  </svg>
                </div>
                <div>
                  <p className="contact-info__label">Location</p>
                  <p className="contact-info__value">Mombasa, Kenya (80100)</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="contact-info__hours">
              <h3 className="contact-info__hours-title">Business Hours</h3>
              <div className="contact-info__hours-list">
                <div className="contact-info__hours-row">
                  <span>Monday – Friday</span>
                  <span className="contact-info__hours-time">8:00 AM – 6:00 PM</span>
                </div>
                <div className="contact-info__hours-row">
                  <span>Saturday</span>
                  <span className="contact-info__hours-time">9:00 AM – 3:00 PM</span>
                </div>
                <div className="contact-info__hours-row">
                  <span>Sunday</span>
                  <span style={{ color: '#ef4444', fontWeight: 500 }}>Closed</span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/254727497935?text=Hello%20Alasiri%20Motors!%20I%20have%20a%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info__wa-btn"
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            <h2 className="contact-form__title">Send a Message</h2>
            {submitted ? (
              <div className="contact-form__success">
                <div className="contact-form__success-icon">✅</div>
                <h3 className="contact-form__success-title">Message Sent!</h3>
                <p className="contact-form__success-text">
                  Your message has been opened in WhatsApp. We'll respond as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="contact-form__success-btn"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__field">
                  <label className="contact-form__label">Full Name <span className="contact-form__required">*</span></label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="contact-form__input"
                  />
                </div>

                <div className="contact-form__field">
                  <label className="contact-form__label">Email Address <span className="contact-form__required">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="contact-form__input"
                  />
                </div>

                <div className="contact-form__field">
                  <label className="contact-form__label">Phone / WhatsApp <span className="contact-form__required">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+254 7XX XXX XXX"
                    required
                    className="contact-form__input"
                  />
                </div>

                <div className="contact-form__field">
                  <label className="contact-form__label">Message <span className="contact-form__required">*</span></label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you're looking for or any questions you have..."
                    required
                    rows={5}
                    className="contact-form__textarea"
                  />
                </div>

                <button type="submit" className="contact-form__submit">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                  Send via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
