import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton.jsx'
import DarkModeToggle from './components/DarkModeToggle/DarkModeToggle.jsx'
import HomePage from './pages/HomePage.jsx'
import VehiclesPage from './pages/VehiclesPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import WishlistPage from './pages/WishlistPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app" data-theme="light">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vehicle" element={<VehiclesPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <DarkModeToggle />
      </div>
    </BrowserRouter>
  )
}
