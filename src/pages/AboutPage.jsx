import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 96, background: '#fff', color: '#1e293b', minHeight: '80vh' }}>

      {/* Hero */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, rgba(22,163,74,0.06) 0%, rgba(5,150,105,0.04) 100%)', padding: '64px 24px 80px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', opacity: 0.05, zIndex: 0 }}>
          <img src="/assets/logo3.png" alt="" style={{ width: 500, maxWidth: '80vw', transform: 'rotate(-12deg) scale(1.5)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto' }}>
          <p style={{ fontSize: 18, opacity: 0.7, marginBottom: 8 }}>Get to know</p>
          <h1 style={{ fontSize: 'clamp(36px,5vw,56px)', fontWeight: 700, color: '#16a34a', marginBottom: 16, position: 'relative', display: 'inline-block' }}>
            Alasiri Motors
            <svg style={{ position: 'absolute', bottom: -8, left: 0, width: '100%' }} height="8" viewBox="0 0 200 8" preserveAspectRatio="none">
              <path d="M0,5 Q50,0 100,5 T200,5" stroke="#16A34A" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </h1>
          <p style={{ fontSize: 'clamp(16px,2vw,20px)', lineHeight: 1.8, opacity: 0.85, marginTop: 24 }}>
            Your trusted motor vehicle sourcing and buying intermediary based in Mombasa, Kenya.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 24px' }}>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center', marginBottom: 64 }}>
          <div>
            <img src="/assets/about.png" alt="About Alasiri Motors" style={{ width: '100%', height: 'auto', borderRadius: 20 }} />
          </div>
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16, color: '#1e293b' }}>Who We Are</h2>
            <p style={{ fontSize: 16, lineHeight: 1.85, opacity: 0.85, marginBottom: 16 }}>
              At Alasiri Motors, we combine deep market knowledge with a client-first approach to help you find
              the perfect vehicle at the right price. Whether you're looking for a family car, a luxury sedan,
              or a rugged SUV, we scout the market on your behalf.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, opacity: 0.85 }}>
              We handle every step of the process — from sourcing and inspection to insurance, registration,
              and delivery — so you can drive away with total confidence.
            </p>
          </div>
        </div>

        {/* Services */}
        <div style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, textAlign: 'center', marginBottom: 8 }}>What We Offer</h2>
          <p style={{ textAlign: 'center', opacity: 0.6, marginBottom: 40 }}>A full end-to-end vehicle sourcing experience</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { icon: '🔍', title: 'Vehicle Sourcing & Scouting', desc: 'We search the market to find exactly what you need at the best price.' },
              { icon: '🛡️', title: 'Insurance Services', desc: 'Comprehensive coverage from top insurers. Quick quotes, best rates.' },
              { icon: '📢', title: 'Promotions & Marketing', desc: 'We help sellers reach more buyers through targeted marketing.' },
              { icon: '🔧', title: 'After Sales Service', desc: 'Riveting, alarms, identity systems and a 6-month warranty.' },
              { icon: '🚚', title: 'Vehicle Delivery', desc: 'Nationwide insured delivery to your location within 24–48 hours.' },
            ].map(s => (
              <div key={s.title} style={{ padding: 24, borderRadius: 16, border: '1px solid #e2e8f0', background: '#f8fafc', transition: 'box-shadow 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                <div style={{ fontSize: 32, marginBottom: 12 }}>{s.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 14, opacity: 0.7, lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Info grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 64 }}>
          <div style={{ padding: 28, borderRadius: 16, background: 'linear-gradient(135deg, rgba(22,163,74,0.08), rgba(5,150,105,0.05))', border: '1px solid rgba(22,163,74,0.2)' }}>
            <h3 style={{ fontWeight: 700, marginBottom: 12, fontSize: 18 }}>📍 Location</h3>
            <p style={{ opacity: 0.8, lineHeight: 1.7 }}>Mombasa, Kenya<br />Mombasa County 80100</p>
          </div>
          <div style={{ padding: 28, borderRadius: 16, background: 'linear-gradient(135deg, rgba(22,163,74,0.08), rgba(5,150,105,0.05))', border: '1px solid rgba(22,163,74,0.2)' }}>
            <h3 style={{ fontWeight: 700, marginBottom: 12, fontSize: 18 }}>🕐 Business Hours</h3>
            <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
              Mon – Fri: 8:00 AM – 6:00 PM<br />
              Saturday: 9:00 AM – 3:00 PM<br />
              Sunday: Closed
            </p>
          </div>
          <div style={{ padding: 28, borderRadius: 16, background: 'linear-gradient(135deg, rgba(22,163,74,0.08), rgba(5,150,105,0.05))', border: '1px solid rgba(22,163,74,0.2)' }}>
            <h3 style={{ fontWeight: 700, marginBottom: 12, fontSize: 18 }}>📞 Contact</h3>
            <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
              <a href="tel:+254727497935" style={{ color: '#16a34a', textDecoration: 'none' }}>+254 727 497 935</a><br />
              <a href="tel:+254705030596" style={{ color: '#16a34a', textDecoration: 'none' }}>+254 705 030 596</a><br />
              <a href="mailto:alasirimotors@gmail.com" style={{ color: '#16a34a', textDecoration: 'none' }}>alasirimotors@gmail.com</a>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '40px 24px', borderRadius: 20, background: 'linear-gradient(135deg, #16a34a, #059669)', color: '#fff' }}>
          <h3 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Ready to find your dream car?</h3>
          <p style={{ opacity: 0.9, marginBottom: 24, fontSize: 16 }}>Let us do the searching for you.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            <Link to="/vehicle" style={{ padding: '12px 28px', borderRadius: 10, background: '#fff', color: '#16a34a', fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
              Browse Vehicles
            </Link>
            <a
              href="https://wa.me/254727497935?text=Hello%20Alasiri%20Motors!%20I'd%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: '12px 28px', borderRadius: 10, background: 'rgba(255,255,255,0.15)', color: '#fff', fontWeight: 700, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)' }}
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
