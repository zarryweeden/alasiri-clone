import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const socialLinks = [
  {
    href: 'https://x.com/alasirimotors',
    label: 'Twitter / X',
    color: '#010a0f',
    hoverBg: 'rgba(1,10,15,0.08)',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    ),
  },
  {
    href: 'https://youtube.com/@alasirimotors4972',
    label: 'YouTube',
    color: '#ff0000',
    hoverBg: 'rgba(255,0,0,0.08)',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
      </svg>
    ),
  },
  {
    href: 'https://instagram.com/_alasirimotors',
    label: 'Instagram',
    color: '#e4405f',
    hoverBg: 'rgba(228,64,95,0.08)',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
      </svg>
    ),
  },
  {
    href: 'https://www.tiktok.com/@alasirimotors',
    label: 'TikTok',
    color: '#000000',
    hoverBg: 'rgba(0,0,0,0.08)',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
      </svg>
    ),
  },
  {
    href: 'https://wa.me/254727497935',
    label: 'WhatsApp',
    color: '#25d366',
    hoverBg: 'rgba(37,211,102,0.08)',
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      {/* Watermark */}
      <div className="footer__watermark" aria-hidden="true">
        <img src="/assets/logo3.png" alt="" />
      </div>

      <div className="footer__inner">
        <div className="footer__grid">
          {/* Brand column */}
          <div className="footer__brand">
            <div className="footer__logo-wrap">
              <div className="footer__logo-glow" />
              <img src="/assets/logo.png" alt="Alasiri Motors" className="footer__logo-img" />
            </div>

            <p className="footer__description">
              Your trusted motor vehicle sourcing &amp; buying intermediary based in Mombasa, Kenya.
              We offer scouting, insurance, promotions, after‑sales service, and vehicle delivery.
            </p>

            <div>
              <p className="footer__social-label">Follow Us</p>
              <div className="footer__social-list">
                {socialLinks.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="footer__social-link"
                    style={{ color: s.color }}
                  >
                    {s.icon}
                    <div className="footer__social-hover" style={{ backgroundColor: s.hoverBg }} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right columns */}
          <div className="footer__cols">
            {/* Quick Links */}
            <div className="footer__col">
              <h4 className="footer__col-title">
                <span>Quick Links</span>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="footer__col-title-arrow" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                </svg>
              </h4>
              <ul className="footer__links">
                {[
                  { label: 'Home', to: '/' },
                  { label: 'Insurance', to: '/#insurance-and-delivery' },
                  { label: 'Vehicles Delivery', to: '/#insurance-and-delivery' },
                  { label: 'Vehicles', to: '/vehicle' },
                  { label: 'Get in Touch', to: '/contact' },
                ].map(link => (
                  <li key={link.label}>
                    <Link to={link.to} className="footer__link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__col">
              <h4 className="footer__col-title">
                <span>Contact</span>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="footer__col-title-arrow" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                </svg>
              </h4>

              <div className="footer__contact-items">
                <a href="mailto:alasirimotors@gmail.com" className="footer__contact-card">
                  <div className="footer__contact-icon" style={{ backgroundColor: 'rgba(59,130,246,0.125)', color: '#3b82f6' }}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="footer__contact-label">Email</p>
                    <p className="footer__contact-value footer__contact-value--email">alasirimotors@gmail.com</p>
                  </div>
                </a>

                <a href="tel:0727497935" className="footer__contact-card">
                  <div className="footer__contact-icon" style={{ backgroundColor: 'rgba(16,185,129,0.125)', color: '#10b981' }}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="footer__contact-label">Calls / WhatsApp</p>
                    <p className="footer__contact-value footer__contact-value--phone">0727 497 935 / 0705 030 596</p>
                  </div>
                </a>

                <div className="footer__contact-card">
                  <div className="footer__contact-icon" style={{ backgroundColor: 'rgba(139,92,246,0.125)', color: '#8b5cf6' }}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                    </svg>
                  </div>
                  <div>
                    <p className="footer__contact-label">M-PESA</p>
                    <p className="footer__contact-value">0797 900 911</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <div className="footer__bottom-accent" />
          <div className="footer__bottom-row">
            <p className="footer__copyright">© 2026 Alasiri Motors. All rights reserved.</p>
            <p className="footer__dev">
              Developed by{' '}
              <a
                href="https://www.willsoft.co.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__dev-link"
              >
                Willsoft technologies
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
