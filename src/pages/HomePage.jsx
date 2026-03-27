import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './HomePage.css'

/* ── Car Data ── */
const cars = [
  {
    id: 'mercedes-benz-amg-e43',
    name: 'Mercedes Benz AMG E43 4MATIC',
    year: '2019',
    transmission: 'AMG Speedshift 9G-TRONIC 9-speed automatic',
    engine: '3.0L V6 Biturbo',
    price: 'Ksh\u00a06,500,000',
    priceNum: 6500000,
    status: 'Available',
    image: '/assets/car4.jpg',
    description:
      'FRESH IMPORT MERCEDES BENZ E43 AMGLINE\n2019 Model\nEngine: 3,000cc Twin Turbo\nTransmission: 9 Speed Automatic\nFuel: Petrol\nLow Mileage: 16,000km\nDrivetrain: 4Matic',
  },
  {
    id: 'subaru-outback-bt5-2024',
    name: 'SUBARU OUTBACK BT-5',
    year: '2024',
    transmission: 'Lineatronic CVT',
    engine: '1.8L',
    price: 'Ksh\u00a05,500,000',
    priceNum: 5500000,
    status: 'Available',
    image: '/assets/car3.jpg',
    description:
      'SUBARU OUTBACK BT-5\n2024\n1800CC PETROL TURBO\n48,000KM\nLEATHER INTERIOR\nHARMON KARDON SOUND SYSTEM\nEYE SIGHT SYSTEM',
  },
  {
    id: 'subaru-outback-bt5-2021',
    name: 'SUBARU OUTBACK BT-5',
    year: '2021',
    transmission: 'Lineartronic CVT',
    engine: '1.8 litre',
    price: 'Ksh\u00a05,000,000',
    priceNum: 5000000,
    status: 'Available',
    image: '/assets/car2.jpg',
    description:
      'SUBARU OUTBACK BT-5\n2021\n1800CC PETROL TURBO\n73,000KM\nLEATHER INTERIOR\nEYE SIGHT SYSTEM\nSYMMETRICAL ALL WHEEL DRIVE\nX-MODE',
  },
  {
    id: 'mazda-6-atenza',
    name: 'Mazda 6 (Atenza)',
    year: '2019',
    transmission: '6 speed automatic',
    engine: '2.0L',
    price: 'Ksh\u00a02,650,000',
    priceNum: 2650000,
    status: 'Available',
    image: '/assets/car1.jpg',
    description:
      'The 2019 Mazda 6 GJEFP is a reliable, upscale sedan. Features i-Activsense suite, standard automatic braking, lane keep assist, adaptive cruise control.',
  },
]

const budgetRanges = [
  { label: '0 - 500K', min: 0, max: 500000 },
  { label: '500K - 1M', min: 500000, max: 1000000 },
  { label: '1M - 2M', min: 1000000, max: 2000000 },
  { label: '2M - 3M', min: 2000000, max: 3000000 },
  { label: '3M - 5M', min: 3000000, max: 5000000 },
  { label: '5M - 10M', min: 5000000, max: 10000000 },
  { label: 'Above 10M', min: 10000000, max: Infinity },
]

/* ── Main Component ── */
export default function HomePage() {
  const [searchTab, setSearchTab] = useState('name')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeBudget, setActiveBudget] = useState(null)
  const navigate = useNavigate()

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (searchQuery) params.set('q', searchQuery)
    if (activeBudget !== null) {
      params.set('minPrice', budgetRanges[activeBudget].min)
      params.set('maxPrice', budgetRanges[activeBudget].max)
    }
    navigate(`/vehicle?${params.toString()}`)
  }

  return (
    <div className="homepage page-enter">

      {/* ━━━━━━━━━━ HERO ━━━━━━━━━━ */}
      <section className="hero">
        {/* Green glow blobs */}
        <div className="hero__blobs" aria-hidden="true">
          <div style={{
            position: 'absolute', left: '15%', top: '25%', width: '32vw', height: '42vw',
            background: 'radial-gradient(circle at 30% 30%, rgba(22,163,74,0.18) 0%, rgba(22,163,74,0.08) 35%, rgba(22,163,74,0.02) 65%, transparent 100%)',
            filter: 'blur(60px)', transform: 'translate(-50%,-50%)', borderRadius: '50%',
          }} />
          <div style={{
            position: 'absolute', right: '12%', bottom: '18%', width: '40vw', height: '30vw',
            background: 'radial-gradient(circle at 40% 40%, rgba(22,163,74,0.14) 0%, rgba(22,163,74,0.06) 40%, transparent 80%)',
            filter: 'blur(60px)', transform: 'translate(50%,50%)', borderRadius: '50%',
          }} />
        </div>

        {/* Watermark logo */}
        <div className="hero__watermark" aria-hidden="true">
          <img src="/assets/logo2.png" alt="" style={{ transform: 'rotate(-12deg) scale(1.5)', opacity: 0.2 }} />
        </div>

        {/* Hero text + CTAs */}
        <div className="hero__content">
          <h1 className="hero__title">
            Your trusted car<br />
            <span className="gradient-text">sourcing marketplace.</span>
          </h1>

          <div className="hero__ctas">
            <Link to="/vehicle?page=1&limit=12" className="hero__btn hero__btn--primary">
              <span className="hero__btn-text">Explore Vehicles</span>
              <span className="hero__btn-overlay" aria-hidden="true" />
            </Link>
            <Link to="/contact" className="hero__btn hero__btn--outline">
              <span className="hero__btn-text">Get in Touch</span>
              <span className="hero__btn-overlay hero__btn-overlay--outline" aria-hidden="true" />
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="hero__scroll" onClick={() => {
            document.getElementById('find-your-car')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            <div style={{ position: 'relative' }}>
              <svg className="hero__scroll-icon" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
              </svg>
            </div>
            <span className="hero__scroll-label" style={{ fontFamily: 'var(--font-pacifico)' }}>scroll down</span>
          </div>
        </div>

        {/* Mobile hero image */}
        <div className="hero__mobile-img">
          <div className="hero__blobs" aria-hidden="true">
            <div style={{ position: 'absolute', left: '15%', top: '25%', width: '32vw', height: '42vw', background: 'radial-gradient(circle at 30% 30%, rgba(22,163,74,0.18) 0%, transparent 100%)', filter: 'blur(60px)', transform: 'translate(-50%,-50%)', borderRadius: '50%' }} />
          </div>
          <img src="/assets/hero_3.png" alt="Hero car" className="hero__mobile-car" />
        </div>
      </section>

      {/* ━━━━━━━━━━ FIND YOUR CAR ━━━━━━━━━━ */}
      <section id="find-your-car" className="find-car">
        <h2 className="find-car__title">Your next drive awaits</h2>
        <p className="find-car__subtitle">
          Explore vehicles curated for your{' '}
          <span className="find-car__accent">lifestyle and budget.</span>
        </p>

        {/* Search mode tabs */}
        <div className="find-car__tabs">
          <button
            className={`find-car__tab${searchTab === 'name' ? ' active' : ''}`}
            onClick={() => setSearchTab('name')}
          >
            Search by Name
          </button>
          <button
            className={`find-car__tab${searchTab === 'body' ? ' active' : ''}`}
            onClick={() => setSearchTab('body')}
          >
            Filter by Body Type
          </button>
        </div>

        {/* Budget range filter */}
        <div className="find-car__budget">
          <h3 className="find-car__budget-title">Filter by budget</h3>
          <div className="find-car__budget-chips">
            {budgetRanges.map((b, i) => (
              <button
                key={b.label}
                className={`find-car__budget-chip${activeBudget === i ? ' active' : ''}`}
                onClick={() => setActiveBudget(activeBudget === i ? null : i)}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search input + button */}
        <div className="find-car__search-wrap">
          <div className="find-car__search-box">
            <input
              type="text"
              placeholder="Search vehicle (e.g., Demio, Vitz)"
              className="find-car__search-input"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
            />
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="find-car__search-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
            </svg>
          </div>
          <div className="find-car__search-btn-wrap">
            <button className="find-car__search-btn" onClick={handleSearch}>Search</button>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━ FRESH ARRIVALS ━━━━━━━━━━ */}
      <div className="arrivals">
        {/* Blobs */}
        <div className="arrivals__blobs" aria-hidden="true">
          <div style={{ position: 'absolute', left: '5%', top: '10%', width: '35vw', height: '45vw', background: 'radial-gradient(circle at 30% 30%, rgba(22,163,74,0.08) 0%, transparent 100%)', filter: 'blur(70px)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', right: '5%', bottom: '5%', width: '40vw', height: '30vw', background: 'radial-gradient(circle at 60% 60%, rgba(22,163,74,0.06) 0%, transparent 80%)', filter: 'blur(70px)', borderRadius: '50%' }} />
        </div>
        {/* Watermark */}
        <div className="arrivals__watermark" aria-hidden="true">
          <img src="/assets/logo3.png" alt="" style={{ transform: 'rotate(-12deg) scale(1.5)', opacity: 0.05 }} />
        </div>

        <div className="arrivals__inner">
          <div className="arrivals__heading">
            <h2 className="arrivals__title"><span className="gradient-text">Fresh Arrivals</span></h2>
            <p className="arrivals__subtitle">Handpicked gems waiting for their next journey</p>
          </div>

          {/* Car grid */}
          <div className="car-grid">
            {cars.map(car => (
              <Link key={car.id} to={`/vehicle/${car.id}`} className="car-card-link">
                <div className="car-card">
                  <div className="car-card__img-wrap">
                    <img src={car.image} alt={car.name} className="car-card__img" loading="lazy" />
                    <span className="car-card__badge">{car.status}</span>
                  </div>
                  <div className="car-card__body">
                    <div className="car-card__meta">
                      <span>{car.year}</span>
                      <span className="car-card__dot">•</span>
                      <span className="car-card__meta-ellipsis">{car.transmission}</span>
                      <span className="car-card__dot">•</span>
                      <span>{car.engine}</span>
                    </div>
                    <h3 className="car-card__name">{car.name}</h3>
                    <p className="car-card__desc">{car.description}</p>
                    <div className="car-card__footer">
                      <p className="car-card__price">{car.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="arrivals__pagination">
            <button className="arrivals__page-btn" disabled>Previous</button>
            <button className="arrivals__page-btn arrivals__page-btn--active">1</button>
            <button className="arrivals__page-btn">2</button>
            <button className="arrivals__page-btn">3</button>
            <button className="arrivals__page-btn">4</button>
            <button className="arrivals__page-btn">Next</button>
          </div>

          {/* View full catalog CTA */}
          <div className="arrivals__catalog-link-wrap">
            <Link to="/vehicle?page=1&limit=12" className="arrivals__catalog-link">
              <span>View Our Full Catalog</span>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* ━━━━━━━━━━ INSURANCE & DELIVERY ━━━━━━━━━━ */}
      <section id="insurance-and-delivery" className="services">
        {/* Blobs */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
          <div style={{ position: 'absolute', left: '10%', top: '20%', width: '35vw', height: '45vw', background: 'radial-gradient(circle at 30% 30%, rgba(22,163,74,0.18) 0%, transparent 100%)', filter: 'blur(60px)', transform: 'translate(-50%,-50%)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', right: '10%', bottom: '10%', width: '40vw', height: '30vw', background: 'radial-gradient(circle at 40% 40%, rgba(22,163,74,0.14) 0%, transparent 80%)', filter: 'blur(60px)', transform: 'translate(50%,50%)', borderRadius: '50%' }} />
        </div>
        {/* Watermark */}
        <div className="services__watermark" aria-hidden="true">
          <img src="/assets/logo3.png" alt="" style={{ transform: 'rotate(-12deg) scale(1.5)', opacity: 0.1 }} />
        </div>

        <div className="services__inner">
          <div className="services__heading">
            <h2 className="services__title">
              Peace of mind,{' '}
              <br className="services__title-br" />
              <span className="gradient-text">delivered.</span>
            </h2>
            <p className="services__subtitle">Insurance • Vehicle delivery • After‑sales — all taken care of.</p>
          </div>

          <div className="services__grid">
            <ServiceCard
              icon={<InsuranceIcon />}
              title="Insurance"
              desc="Comprehensive coverage from top insurers. Quick quotes, best rates."
              waMsg="I'm interested in insurance for my vehicle"
              btnLabel="Get Quote"
            />
            <ServiceCard
              icon={<DeliveryIcon />}
              title="Vehicle Delivery"
              desc="Nationwide delivery. Insured transit, 24‑48 hrs to your location."
              waMsg="Hello, I'd like to arrange delivery for a vehicle"
              btnLabel="Arrange Delivery"
            />
            <ServiceCard
              icon={<AfterSalesIcon />}
              title="After Sales"
              desc="Riveting • Alarms • Identity systems. 6‑month warranty included."
              waMsg="Hello, I'd like to know more about your after sales services (riveting, alarms, identity)"
              btnLabel="Ask Us"
            />
          </div>

          <div className="services__footer">
            <p className="services__footer-text">Still have questions? We're just a message away.</p>
            <a
              href="https://wa.me/254727497935?text=Hello%2C%20I'd%20like%20to%20know%20more%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="services__wa-btn"
            >
              <WAIcon size={24} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━ ABOUT ━━━━━━━━━━ */}
      <section id="about" className="about-section">
        <div className="about-section__blob" aria-hidden="true" />

        <div className="about-section__inner">
          <div className="about-section__layout">
            {/* Image — hidden on mobile */}
            <div className="about-section__img-col">
              <img src="/assets/about.png" alt="About Alasiri Motors" className="about-section__img" width="600" height="400" />
            </div>

            {/* Text content */}
            <div className="about-section__content">
              <div className="about-section__heading">
                <span className="about-section__pre">Get to know</span>
                <span className="about-section__name">
                  Alasiri Motors
                  <svg className="about-section__underline" height="8" viewBox="0 0 200 8" preserveAspectRatio="none">
                    <path d="M0,5 Q50,0 100,5 T200,5" stroke="#16A34A" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </div>

              <p className="about-section__desc">
                We are a trusted motor vehicle sourcing and buying intermediary based in Mombasa, Kenya.
                Our mission is to provide a seamless, convenient experience for clients looking to acquire,
                insure, and maintain their vehicles.
              </p>

              <div className="about-section__services">
                <h3 className="about-section__services-title">What we offer:</h3>
                <ul className="about-section__services-grid">
                  {[
                    'Vehicle Sourcing & Scouting',
                    'Insurance Services & Consultation',
                    'Promotions & Marketing',
                    'After Sales Service (Riveting, Alarms, Identity)',
                    'Vehicle Delivery Services',
                  ].map(item => (
                    <li key={item} className="about-section__service-item">
                      <CheckCircleIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

/* ── Sub-components ── */

function ServiceCard({ icon, title, desc, waMsg, btnLabel }) {
  return (
    <div className="service-card">
      <div className="service-card__icon-wrap">{icon}</div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{desc}</p>
      <a
        href={`https://wa.me/254727497935?text=${encodeURIComponent(waMsg)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="service-card__btn"
      >
        <WAIcon size={20} />
        {btnLabel}
      </a>
    </div>
  )
}

function WAIcon({ size = 20 }) {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height={size} width={size} xmlns="http://www.w3.org/2000/svg">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  )
}

function InsuranceIcon() {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" style={{ color: '#16a34a' }} height="24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z" />
    </svg>
  )
}

function DeliveryIcon() {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" style={{ color: '#16a34a' }} height="24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z" />
    </svg>
  )
}

function AfterSalesIcon() {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" style={{ color: '#16a34a' }} height="24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z" />
    </svg>
  )
}

function CheckCircleIcon() {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" style={{ color: '#16a34a', flexShrink: 0 }} height="18" width="18" xmlns="http://www.w3.org/2000/svg">
      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
    </svg>
  )
}
