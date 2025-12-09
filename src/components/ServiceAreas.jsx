const counties = [
  {
    name: 'Westchester County, NY',
    towns: ['Ossining', 'White Plains', 'Yonkers', 'New Rochelle', 'Mount Vernon', 'Tarrytown', 'Peekskill', 'Croton-on-Hudson'],
  },
  {
    name: 'Putnam County, NY', 
    towns: ['Carmel', 'Brewster', 'Mahopac', 'Cold Spring', 'Putnam Valley', 'Patterson', 'Southeast', 'Kent'],
  },
  {
    name: 'Rockland County, NY',
    towns: ['Nyack', 'Pearl River', 'Spring Valley', 'Nanuet', 'Suffern', 'Haverstraw', 'New City', 'Orangeburg'],
  },
  {
    name: 'Fairfield County, CT',
    towns: ['Stamford', 'Norwalk', 'Greenwich', 'Danbury', 'Bridgeport', 'Fairfield', 'Westport', 'Darien'],
  },
  {
    name: 'Bergen County, NJ',
    towns: ['Hackensack', 'Paramus', 'Fort Lee', 'Englewood', 'Teaneck', 'Ridgewood', 'Fair Lawn', 'Bergenfield'],
  },
]

function ServiceAreas() {
  return (
    <section id="service-areas" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#E8913A] font-semibold text-sm uppercase tracking-wider">Where We Work</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-900 mt-2 mb-4">
            Serving the NY Metro Area
          </h2>
          <p className="text-gray-600 text-lg">
            Proudly serving homeowners throughout Westchester, Putnam, Rockland, Fairfield, and Bergen Counties. 
            Don't see your town? Give us a call - we may still be able to help!
          </p>
        </div>

        {/* Map and Counties Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Placeholder */}
          <div className="bg-gray-100 rounded-2xl p-8 h-full min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#E8913A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#E8913A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl text-dark-900 mb-2">NY Metro Coverage</h3>
              <p className="text-gray-600">5 Counties • 40+ Towns</p>
              <p className="text-gray-500 text-sm mt-4">Interactive map coming soon</p>
            </div>
          </div>

          {/* Counties List */}
          <div className="space-y-6">
            {counties.map((county) => (
              <div key={county.name} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-heading font-bold text-lg text-dark-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#E8913A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {county.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {county.towns.map((town) => (
                    <span 
                      key={town}
                      className="bg-white px-3 py-1.5 rounded-full text-sm text-gray-700 border border-gray-200 hover:border-[#E8913A] hover:text-[#E8913A] transition-colors cursor-default"
                    >
                      {town}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Not sure if we service your area?</p>
          <a href="#contact" className="bg-[#E8913A] hover:bg-[#d17f2f] text-white font-heading font-semibold px-6 py-3 rounded-lg transition-colors inline-block">
            Contact Us to Find Out
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServiceAreas