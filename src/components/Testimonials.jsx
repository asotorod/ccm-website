import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Michael R.',
    location: 'Edison, NJ',
    rating: 5,
    text: 'CCM did an amazing job replacing our roof. Professional from start to finish, great communication, and the crew cleaned up perfectly every day. Highly recommend!',
    service: 'Roof Replacement',
  },
  {
    id: 2,
    name: 'Sarah T.',
    location: 'Woodbridge, NJ',
    rating: 5,
    text: 'We had new siding and gutters installed. The transformation is incredible! Fair pricing, quality materials, and the team was respectful of our property.',
    service: 'Siding & Gutters',
  },
  {
    id: 3,
    name: 'David L.',
    location: 'Old Bridge, NJ',
    rating: 5,
    text: 'After getting several quotes, CCM offered the best value without cutting corners. Our new windows have made a huge difference in our energy bills.',
    service: 'Window Installation',
  },
  {
    id: 4,
    name: 'Jennifer M.',
    location: 'Piscataway, NJ',
    rating: 5,
    text: 'Emergency roof repair after a storm. They came out the next day and fixed everything quickly. Saved us from water damage. Thank you CCM!',
    service: 'Roof Repair',
  },
  {
    id: 5,
    name: 'Robert K.',
    location: 'East Brunswick, NJ',
    rating: 5,
    text: 'Built us a beautiful composite deck. The design process was easy and the finished product exceeded our expectations. Perfect for summer entertaining!',
    service: 'Deck Construction',
  },
]

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-primary-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-2 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-primary-200">
            Don't just take our word for it. Here's what homeowners across Central New Jersey 
            have to say about their experience with CCM Construction.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-secondary-400 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-dark-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>

            {/* Rating Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-secondary-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-dark-900 font-heading mb-6 leading-relaxed">
              "{testimonials[activeIndex].text}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-heading font-bold text-dark-900">{testimonials[activeIndex].name}</p>
                <p className="text-gray-500 text-sm">{testimonials[activeIndex].location}</p>
                <p className="text-primary-600 text-sm font-medium">{testimonials[activeIndex].service}</p>
              </div>

              {/* Navigation */}
              <div className="flex gap-2">
                <button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-primary-600 hover:text-primary-600 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-primary-600 hover:text-primary-600 transition-colors"
                  aria-label="Next testimonial"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-8">
          <a href="#" className="inline-flex items-center gap-2 text-white hover:text-secondary-400 transition-colors">
            <span>See all reviews on Google</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials