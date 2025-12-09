import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Service Areas', path: '/#service-areas' },
    { name: 'About', path: '/#about' },
    { name: 'Contact', path: '/#contact' },
  ]

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar - Black */}
      <div className="bg-black text-white py-2">
        <div className="container-custom flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+19145551234" className="flex items-center gap-2 hover:text-[#FF5722] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (914) 555-1234
            </a>
            <a href="mailto:info@123ccm.com" className="hidden sm:flex items-center gap-2 hover:text-[#FF5722] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@123ccm.com
            </a>
            <span className="hidden md:flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Ossining, NY
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden lg:inline">Licensed & Insured</span>
            <span className="hidden lg:inline">|</span>
            <span className="hidden lg:inline">NY HIC #12345678</span>
          </div>
        </div>
      </div>

      {/* Main Navigation - Dark Navy */}
      <nav className="bg-[#1E3A5F] shadow-lg">
        <div className="container-custom py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/Logo ccm.png" 
                alt="CCM Construction Inc." 
                className="h-14 md:h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="font-heading font-medium text-white hover:text-[#FF5722] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a 
                href="/#contact" 
                className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-heading font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Get Free Estimate
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-white/20 pt-4">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.path}
                    className="font-heading font-medium text-white hover:text-[#FF5722] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="/#contact" 
                  className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-heading font-semibold px-6 py-3 rounded-lg transition-colors text-center mt-2"
                >
                  Get Free Estimate
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header