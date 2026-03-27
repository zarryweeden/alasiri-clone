import React from 'react'
import './BlogPage.css'

const posts = [
  {
    id: 1,
    title: 'How to Choose Your Next Car in Kenya',
    date: 'March 2026',
    category: 'Buying Guide',
    excerpt:
      'Finding the right car in Kenya can be overwhelming. Here is our guide to making the best decision for your budget and lifestyle, from initial research to final purchase.',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Understanding Car Insurance in Mombasa',
    date: 'February 2026',
    category: 'Insurance',
    excerpt:
      'A comprehensive guide to vehicle insurance options available in Kenya, including third-party and comprehensive coverage — and how to get the best rates in Mombasa.',
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'Top 5 Family Cars Under 2 Million KES',
    date: 'January 2026',
    category: 'Top Picks',
    excerpt:
      "Looking for a reliable family vehicle without breaking the bank? We've curated the best options under 2 million KES that offer safety, space, and value.",
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Why Japanese Imports Are Popular in Kenya',
    date: 'December 2025',
    category: 'Market Insights',
    excerpt:
      'Japan remains the top source of used vehicles for Kenyan buyers. We explore why — fuel efficiency, reliability, and the role of trusted dealerships like Alasiri Motors.',
    readTime: '5 min read',
  },
  {
    id: 5,
    title: 'After-Sales Services: What You Need to Know',
    date: 'November 2025',
    category: 'Services',
    excerpt:
      'Once you own a car, the journey continues. Learn about riveting, alarm installation, and identity systems that protect your investment for years to come.',
    readTime: '3 min read',
  },
  {
    id: 6,
    title: 'Vehicle Delivery in Kenya: How It Works',
    date: 'October 2025',
    category: 'Services',
    excerpt:
      'From port clearance to your doorstep, our vehicle delivery service ensures your car arrives safely, fully insured, within 24–48 hours anywhere in Kenya.',
    readTime: '4 min read',
  },
]

const categoryColors = {
  'Buying Guide': { bg: '#dbeafe', text: '#1d4ed8' },
  'Insurance': { bg: '#fef9c3', text: '#854d0e' },
  'Top Picks': { bg: '#dcfce7', text: '#15803d' },
  'Market Insights': { bg: '#fce7f3', text: '#9d174d' },
  'Services': { bg: '#e0f2fe', text: '#0369a1' },
}

export default function BlogPage() {
  return (
    <div className="blog-page">
      <div className="blog-page__hero">
        {/* Decorative blobs */}
        <div className="blog-page__blob blog-page__blob--tl" aria-hidden="true" />
        <div className="blog-page__blob blog-page__blob--br" aria-hidden="true" />

        <div className="blog-page__hero-inner">
          <h1 className="blog-page__title">
            <span className="gradient-text">Our Blog</span>
          </h1>
          <p className="blog-page__subtitle">
            Insights, tips and news from the Alasiri Motors team
          </p>
        </div>
      </div>

      <div className="blog-page__content">
        <div className="blog-page__grid">
          {posts.map(post => {
            const catColor = categoryColors[post.category] || { bg: '#f3f4f6', text: '#374151' }
            return (
              <article key={post.id} className="blog-card">
                {/* Colored top bar */}
                <div
                  className="blog-card__bar"
                  style={{ background: 'linear-gradient(135deg, #16a34a, #059669)' }}
                />
                <div className="blog-card__body">
                  <div className="blog-card__meta">
                    <span
                      className="blog-card__category"
                      style={{ backgroundColor: catColor.bg, color: catColor.text }}
                    >
                      {post.category}
                    </span>
                    <span className="blog-card__date">{post.date}</span>
                    <span className="blog-card__read-time">{post.readTime}</span>
                  </div>
                  <h2 className="blog-card__title">{post.title}</h2>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <button className="blog-card__read-btn">
                    Read More
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </article>
            )
          })}
        </div>

        {/* Newsletter CTA */}
        <div className="blog-newsletter">
          <div className="blog-newsletter__inner">
            <h2 className="blog-newsletter__title">Stay in the loop</h2>
            <p className="blog-newsletter__subtitle">
              Get the latest vehicle listings and tips delivered straight to your WhatsApp.
            </p>
            <a
              href="https://wa.me/254727497935?text=Hello%21%20I%27d%20like%20to%20receive%20updates%20from%20Alasiri%20Motors."
              target="_blank"
              rel="noopener noreferrer"
              className="blog-newsletter__btn"
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              Join Our WhatsApp Updates
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
