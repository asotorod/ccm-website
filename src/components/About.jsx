const stats = [
  { number: '18+', label: 'Years Experience' },
  { number: '500+', label: 'Projects Completed' },
  { number: '5.0', label: 'Star Rating' },
  { number: '100%', label: 'Satisfaction Guaranteed' },
]

const certifications = [
  { name: 'GAF Certified', icon: '🏆' },
  { name: 'EPA Lead-Safe', icon: '✓' },
  { name: 'OSHA Certified', icon: '🛡️' },
  { name: 'BBB Accredited', icon: '⭐' },
]

function About() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="CCM Construction team at work"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#FF5722] text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="text-4xl font-heading font-bold">18+</p>
              <p className="text-orange-100">Years of Excellence</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-[#FF5722] font-semibold text-sm uppercase tracking-wider">About CCM</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-900 mt-2 mb-6">
              Building Trust, One Home at a Time
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Since 2005, CCM Construction has been the NY Metro area's trusted choice for quality home improvements. 
              We're a family-owned business committed to exceptional craftsmanship, honest pricing, and customer satisfaction.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of skilled professionals brings decades of combined experience to every project. 
              Whether it's a simple repair or a complete exterior renovation, we treat your home like it's our own.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <p className="text-2xl md:text-3xl font-heading font-bold text-[#FF5722]">{stat.number}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <span 
                  key={cert.name}
                  className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-700"
                >
                  <span>{cert.icon}</span>
                  {cert.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About