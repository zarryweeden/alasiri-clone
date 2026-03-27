import React from 'react'
import { Link } from 'react-router-dom'
import './NotFoundPage.css'

export default function NotFoundPage() {
  return (
    <div className="not-found">
      {/* Decorative blobs */}
      <div className="not-found__blob not-found__blob--1" aria-hidden="true" />
      <div className="not-found__blob not-found__blob--2" aria-hidden="true" />

      <div className="not-found__inner">
        {/* Watermark logo */}
        <div className="not-found__watermark" aria-hidden="true">
          <img src="/assets/logo3.png" alt="" />
        </div>

        <div className="not-found__content">
          <span className="not-found__code">404</span>

          <div className="not-found__car-icon" aria-hidden="true">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="64" width="64" xmlns="http://www.w3.org/2000/svg">
              <path d="M634.91 154.88C457.74-4.67 182.19-4.52 5.09 154.88c-6.66 6.16-7 16.54-.66 23.1l13.09 13.56c6.14 6.35 16.12 6.61 22.69.6 159.68-145.3 399.98-145.3 559.66 0 6.56 5.96 16.59 5.71 22.69-.6l13.09-13.56c6.34-6.56 6-16.94-.64-23.1zM320 336c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm-85.88-46.84C281.8 270.05 300.53 264 320 264c19.47 0 38.2 6.05 85.88 25.16 9.95 3.9 19.1 6.84 27.92 6.84 47.27 0 83.5-40.55 64.92-86.84-8.04-19.95-31.49-34.12-56.88-30.1-8.44 1.33-16.56 4.56-24.24 8.72C393.04 199.13 357.68 192 320 192c-37.64 0-73.04 7.13-97.6 19.78-7.68-4.16-15.8-7.39-24.24-8.72-25.39-4.02-48.84 10.15-56.88 30.1-18.58 46.29 17.65 86.84 64.92 86.84 8.82 0 17.97-2.94 27.92-6.84z" />
            </svg>
          </div>

          <h1 className="not-found__title">Page Not Found</h1>
          <p className="not-found__desc">
            Looks like this road doesn't lead anywhere. The page you're looking for
            doesn't exist or may have been moved.
          </p>

          <div className="not-found__actions">
            <Link to="/" className="not-found__btn not-found__btn--primary">
              Back to Home
            </Link>
            <Link to="/vehicle" className="not-found__btn not-found__btn--outline">
              Browse Vehicles
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
