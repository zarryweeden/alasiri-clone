import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Vehicles', to: '/vehicle' },
    { label: 'About Us', to: '/about-us' },
    { label: 'Our Blog', to: '/blog' },
  ]

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/'
    return location.pathname.startsWith(to)
  }

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        {/* Decorative elements */}
        <div className="header__deco" aria-hidden="true">
          <svg className="absolute top-0 right-0" style={{ width: 128, height: 128, opacity: 0.05 }} viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="#194e19" />
          </svg>
          <svg className="absolute" style={{ top: '50%', left: 40, width: 96, height: 96, opacity: 0.05 }} viewBox="0 0 100 100">
            <polygon points="50,5 85,35 85,75 50,95 15,75 15,35" fill="#194e19" />
          </svg>
        </div>
        <div className="header__deco-wave" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,50 Q300,30 600,50 T1200,50" stroke="#194e19" strokeWidth="1" fill="none" opacity="0.05" />
          </svg>
        </div>

        <div className="header__inner">
          <div className="header__row">
            {/* Logo */}
            <div>
              <Link to="/" className="header__logo-link">
                <div style={{ position: 'relative' }}>
                  <div className="header__logo-glow" />
                  <img
                    src="/assets/logo.png"
                    alt="Alasiri Motors"
                    className="header__logo-img"
                    width="160"
                    height="53"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="header__nav" aria-label="Main navigation">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`header__nav-link${isActive(link.to) ? ' active' : ''}`}
                >
                  <span>{link.label}</span>
                  <span className="header__nav-link__bar" />
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="header__actions">
              {/* Wishlist icon */}
              <Link to="/wishlist" className="header__icon-btn" aria-label="Wishlist">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z" />
                </svg>
              </Link>

              {/* CTA */}
              <Link to="/contact" className="header__cta">
                <span>Get in Touch</span>
                <div className="header__cta-bg" />
              </Link>

              {/* Mobile hamburger */}
              <button
                className="header__menu-btn"
                aria-label="Toggle menu"
                onClick={() => setMenuOpen(true)}
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu-overlay${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-label="Mobile navigation menu"
        aria-modal="true"
      >
        <div className="mobile-menu-panel">
          {/* Decorative */}
          <div className="mobile-menu__deco" aria-hidden="true">
            <svg style={{ position: 'absolute', top: 0, right: 0, width: 128, height: 128, opacity: 0.05 }} viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="80" fill="#194e19" />
            </svg>
            <svg style={{ position: 'absolute', top: '50%', left: 40, width: 96, height: 96, opacity: 0.05 }} viewBox="0 0 100 100">
              <polygon points="50,5 85,35 85,75 50,95 15,75 15,35" fill="#194e19" />
            </svg>
          </div>

          <div className="mobile-menu__header">
            <img src="/assets/logo1.png" alt="Alasiri Motors" className="mobile-menu__logo" />
            <button className="mobile-menu__close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 352 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
              </svg>
            </button>
          </div>

          <nav className="mobile-menu__nav">
            <div className="mobile-menu__nav-items">
              {navLinks.map((link, i) => (
                <div
                  key={link.to}
                  className="mobile-menu__nav-item"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <Link to={link.to} className="mobile-menu__nav-link">
                    <span>{link.label}</span>
                  </Link>
                </div>
              ))}

              <Link to="/contact" className="mobile-menu__cta">
                <span>Get in Touch</span>
                <div className="mobile-menu__cta-bg" />
              </Link>
            </div>

            {/* Contact info card */}
            <div className="mobile-menu__contact-card">
              <div className="mobile-menu__contact-row">
                <div className="mobile-menu__contact-icon" style={{ backgroundColor: 'rgba(59,130,246,0.125)', color: '#3b82f6' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                  </svg>
                </div>
                <div>
                  <p className="mobile-menu__contact-label">Email</p>
                  <a href="mailto:alasirimotors@gmail.com" className="mobile-menu__contact-value">alasirimotors@gmail.com</a>
                </div>
              </div>

              <div className="mobile-menu__contact-row">
                <div className="mobile-menu__contact-icon" style={{ backgroundColor: 'rgba(16,185,129,0.125)', color: '#10b981' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                  </svg>
                </div>
                <div>
                  <p className="mobile-menu__contact-label">Phone</p>
                  <a href="tel:+254727497935" className="mobile-menu__contact-value">+254 727 497 935</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
