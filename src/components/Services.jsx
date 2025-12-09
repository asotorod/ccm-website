const services = [
  {
    id: 1,
    title: 'Roofing',
    description: 'Complete roof installation, repair, and replacement. Shingles, flat roofs, and metal roofing options.',
    image: 'https://images.unsplash.com/photo-1632759145354-523f54323578?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Asphalt Shingles', 'Metal Roofing', 'Flat Roofs', 'Emergency Repairs'],
  },
  {
    id: 2,
    title: 'Siding',
    description: 'Transform your home\'s exterior with durable, beautiful siding. Vinyl, fiber cement, and wood options.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Vinyl Siding', 'James Hardie', 'Cedar Shake', 'Insulated Options'],
  },
  {
    id: 3,
    title: 'Gutters',
    description: 'Protect your home with seamless gutters and downspouts. Professional installation and gutter guards.',
    image: 'https://images.unsplash.com/photo-1603807008857-ad66b70431aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Seamless Gutters', 'Gutter Guards', 'Downspouts', 'Copper Gutters'],
  },
  {
    id: 4,
    title: 'Windows',
    description: 'Energy-efficient window installation and replacement. Improve comfort and lower energy bills.',
    image: 'https://images.unsplash.com/photo-1604082787627-67810e0da5e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Double Hung', 'Bay Windows', 'Energy Star', 'Custom Sizes'],
  },
  {
    id: 5,
    title: 'Doors',
    description: 'Entry doors, storm doors, and patio doors. Enhance security and curb appeal.',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Entry Doors', 'Storm Doors', 'Sliding Doors', 'French Doors'],
  },
  {
    id: 6,
    title: 'Decks & Patios',
    description: 'Custom deck construction and patio installation. Create your perfect outdoor living space.',
    image: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Composite Decks', 'Wood Decks', 'Paver Patios', 'Railings'],
  },
]

function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#F7941D] font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-900 mt-2 mb-4">
            Our Professional Services
          </h2>
          <p className="text-gray-600 text-lg">
            From roof to foundation, we provide comprehensive home improvement services 
            with quality materials and expert craftsmanship.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-heading font-bold text-white">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                {/* Features */}
                <ul className="grid grid-cols-2 gap-2 mb-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-[#F7941D] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-[#F7941D] font-semibold hover:text-[#e8850f] transition-colors"
                >
                  Get a Quote
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services