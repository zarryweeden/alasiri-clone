import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const allCars = [
  {
    id: 'mercedes-benz-amg-e43',
    name: 'Mercedes Benz AMG E43 4MATIC',
    year: '2019',
    transmission: 'AMG Speedshift 9G-TRONIC',
    engine: '3.0L V6 Biturbo',
    price: 'Ksh 6,500,000',
    priceNum: 6500000,
    status: 'Available',
    image: '/assets/car4.jpg',
    description: 'FRESH IMPORT MERCEDES BENZ E43 AMGLINE 2019 Model. Engine: 3,000cc Twin Turbo. Low Mileage: 16,000km. Drivetrain: 4Matic. Obsidian Black with Black Nappa Leather.',
  },
  {
    id: 'subaru-outback-bt5-2024',
    name: 'SUBARU OUTBACK BT-5',
    year: '2024',
    transmission: 'Lineatronic CVT',
    engine: '1.8L Turbo',
    price: 'Ksh 5,500,000',
    priceNum: 5500000,
    status: 'Available',
    image: '/assets/car3.jpg',
    description: '1800CC PETROL TURBO. 48,000KM. Leather interior, Harmon Kardon Sound, EyeSight system, Lane Assist, Cruise Control, Symmetrical AWD, X-MODE.',
  },
  {
    id: 'subaru-outback-bt5-2021',
    name: 'SUBARU OUTBACK BT-5',
    year: '2021',
    transmission: 'Lineartronic CVT',
    engine: '1.8L Turbo',
    price: 'Ksh 5,000,000',
    priceNum: 5000000,
    status: 'Available',
    image: '/assets/car2.jpg',
    description: '1800CC PETROL TURBO. 73,000KM. EyeSight system, Symmetrical AWD, X-MODE, Driver Monitoring System, Alloy 18" Rims, LED Headlights.',
  },
  {
    id: 'mazda-6-atenza',
    name: 'Mazda 6 (Atenza)',
    year: '2019',
    transmission: '6-speed automatic',
    engine: '2.0L Skyactiv-G',
    price: 'Ksh 2,650,000',
    priceNum: 2650000,
    status: 'Available',
    image: '/assets/car1.jpg',
    description: 'Reliable, upscale sedan. i-Activsense suite, adaptive cruise, lane keep assist, blind spot monitor, LED headlights, dual-zone climate control.',
  },
]

export default function VehiclesPage() {
  const [searchParams] = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  const [search, setSearch] = useState(initialQuery)

  const filtered = allCars.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.description.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{ paddingTop: 96, minHeight: '80vh', background: '#fff', color: '#1e293b' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '48px 24px' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 700, marginBottom: 8 }}>
            <span style={{ background: 'linear-gradient(135deg,#16a34a,#059669)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Our Vehicles
            </span>
          </h1>
          <p style={{ opacity: 0.7, fontSize: 18 }}>Browse our full catalog of quality vehicles</p>
        </div>

        {/* Search */}
        <div style={{ maxWidth: 600, margin: '0 auto 48px', position: 'relative' }}>
          <input
            type="text"
            placeholder="Search vehicles (e.g., Subaru, Mercedes, Mazda)…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: '100%', padding: '14px 52px 14px 20px',
              borderRadius: 9999, border: '1px solid #d1d5db',
              fontSize: 16, fontFamily: 'Jost,sans-serif', outline: 'none',
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
            onFocus={e => { e.target.style.borderColor = '#16a34a'; e.target.style.boxShadow = '0 0 0 3px rgba(22,163,74,0.15)' }}
            onBlur={e => { e.target.style.borderColor = '#d1d5db'; e.target.style.boxShadow = 'none' }}
          />
          <svg style={{ position: 'absolute', right: 18, top: '50%', transform: 'translateY(-50%)', color: '#6b7280', pointerEvents: 'none' }}
            stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
          </svg>
        </div>

        {/* Results count */}
        <p style={{ textAlign: 'center', opacity: 0.55, marginBottom: 32, fontSize: 14 }}>
          Showing {filtered.length} vehicle{filtered.length !== 1 ? 's' : ''}
          {search ? ` for "${search}"` : ''}
        </p>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {filtered.map(car => (
            <Link key={car.id} to={`/vehicle/${car.id}`} style={{ display: 'block', textDecoration: 'none', height: '100%' }}>
              <div style={{
                borderRadius: 16, border: '1px solid #e2e8f0', overflow: 'hidden',
                background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                transition: 'box-shadow 0.3s', height: '100%', display: 'flex', flexDirection: 'column',
              }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'}
              >
                <div style={{ position: 'relative', height: 224, overflow: 'hidden', background: '#e5e7eb' }}>
                  <img src={car.image} alt={car.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                    loading="lazy"
                    onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  />
                  <span style={{
                    position: 'absolute', top: 8, right: 8, padding: '4px 8px',
                    fontSize: 12, fontWeight: 600, borderRadius: 9999,
                    background: '#dcfce7', color: '#15803d',
                  }}>
                    {car.status}
                  </span>
                </div>
                <div style={{ padding: 16, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: 8, fontSize: 13, color: '#6b7280', marginBottom: 4, flexWrap: 'wrap' }}>
                    <span>{car.year}</span>
                    <span>•</span>
                    <span>{car.transmission}</span>
                    <span>•</span>
                    <span>{car.engine}</span>
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: 18, color: '#1e293b', marginBottom: 8 }}>{car.name}</h3>
                  <p style={{ fontSize: 13, opacity: 0.7, marginBottom: 12, flex: 1, lineHeight: 1.55 }}>
                    {car.description}
                  </p>
                  <p style={{ fontSize: 20, fontWeight: 700, color: '#16a34a', marginTop: 'auto' }}>{car.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', paddingTop: 80, paddingBottom: 80 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            <p style={{ opacity: 0.6, fontSize: 18, marginBottom: 24 }}>
              No vehicles found matching "{search}"
            </p>
            <button
              onClick={() => setSearch('')}
              style={{
                padding: '10px 24px', borderRadius: 10, background: '#16a34a',
                color: '#fff', cursor: 'pointer', fontFamily: 'Jost,sans-serif',
                fontSize: 15, border: 'none',
              }}
            >
              Clear Search
            </button>
          </div>
        )}

        {/* WhatsApp CTA */}
        <div style={{ textAlign: 'center', marginTop: 64, padding: 40, borderRadius: 20, background: 'linear-gradient(135deg, rgba(22,163,74,0.06), rgba(5,150,105,0.06))', border: '1px solid rgba(22,163,74,0.15)' }}>
          <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Can't find what you're looking for?</h3>
          <p style={{ opacity: 0.7, marginBottom: 24 }}>We source any vehicle on request. Just tell us what you need.</p>
          <a
            href="https://wa.me/254727497935?text=Hello%20Alasiri%20Motors!%20I%20need%20help%20finding%20a%20specific%20vehicle."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '14px 28px', borderRadius: 12, background: '#25d366',
              color: '#fff', fontWeight: 600, fontSize: 16, fontFamily: 'Jost,sans-serif',
              textDecoration: 'none', transition: 'opacity 0.2s',
            }}
          >
            💬 Chat with Us on WhatsApp
          </a>
        </div>

      </div>
    </div>
  )
}
