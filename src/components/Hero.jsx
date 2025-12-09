function Hero() {
  return (
    <section className="relative bg-dark-900 min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1632759145351-1d592919f522?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/80 to-dark-900/60"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FF5722]/20 border border-[#FF5722]/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#FF5722] rounded-full animate-pulse"></span>
            <span className="text-[#FF5722] text-sm font-medium">Trusted NY Metro Contractor Since 2005</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Quality Home Improvements You Can 
            <span className="text-[#FF5722]"> Trust</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Expert roofing, siding, gutters, and window installation throughout the NY Metro area. 
            Licensed, insured, and committed to excellence on every project.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-heading font-semibold text-lg px-8 py-4 rounded-lg transition-colors text-center">
              Get Your Free Estimate
            </a>
            <a href="#services" className="border-2 border-white text-white hover:bg-white hover:text-[#1E3A5F] font-heading font-semibold text-lg px-8 py-4 rounded-lg transition-colors text-center">
              Our Services
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-gray-700/50">
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#FF5722]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#FF5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Licensed & Insured</p>
                  <p className="text-gray-400 text-sm">Fully Registered</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#FF5722]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#FF5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">5-Star Rated</p>
                  <p className="text-gray-400 text-sm">500+ Happy Customers</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#FF5722]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#FF5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Fast Response</p>
                  <p className="text-gray-400 text-sm">24-48 Hour Estimates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero