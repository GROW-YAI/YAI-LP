import { useRef } from 'react'

function Wines() {
  const sliderRef = useRef(null)

  const wines = [
    { name: 'Classic Red', price: '$25', image: '/assets/pic3.jpg', link: 'https://paystack.com/buy/vintage-hsmztl' },
    { name: 'Vintage White', price: '$30', image: '/assets/white1.jpg', link: 'https://paystack.com/buy/vintage-hsmztl' },
    { name: 'Rosé Elegance', price: '$30', image: '/assets/rose1.jpg', link: 'https://paystack.com/buy/vintage-hsmztl' },
    { name: 'Golden Chardonnay', price: '$30', image: '/assets/gold1.jpg', link: 'https://paystack.com/buy/vintage-hsmztl' },
    { name: 'Dark Berry Blend', price: '$30', image: '/assets/pic2.jpg', link: 'https://paystack.com/buy/vintage-hsmztl' },
    { name: 'Limited Edition Pinot', price: '$30', image: '/assets/pinot2.jpg', link: 'https://paystack.com/buy/vintage-hsmztl' },
    { name: 'Signature Bordeaux', price: '$30', image: '/assets/pic5.jpg', link: 'https://paystack.com/buy/vintage-hsmztl' },
    { name: 'Royal Merlot', price: '$30', image: '/assets/wine2.jpg', link: 'https://paystack.com/buy/vintage-hsmztl' },
  ]

  // Drag to scroll functionality
  const handleMouseDown = (e) => {
    const slider = sliderRef.current
    if (!slider) return
    
    let isDown = true
    let startX = e.pageX - slider.offsetLeft
    let scrollLeft = slider.scrollLeft

    const handleMouseUp = () => {
      isDown = false
      slider.classList.remove('cursor-grabbing')
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mousemove', handleMouseMove)
    }

    const handleMouseMove = (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const walk = (x - startX) * 2
      slider.scrollLeft = scrollLeft - walk
    }

    slider.classList.add('cursor-grabbing')
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mousemove', handleMouseMove)
  }

  return (
    <section id="wines" className="min-h-screen bg-white flex flex-col items-center justify-center py-16 px-6 lg:px-16">
      {/* Section Title */}
      <h2 className="text-4xl lg:text-5xl font-bold uppercase text-[#A02B11] mb-12 text-center">
        Explore Our Wines
      </h2>

      {/* Wine Container */}
      <div 
        ref={sliderRef}
        className="wine-slider flex overflow-x-auto snap-x snap-mandatory space-x-6 pb-6 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 sm:space-x-0 max-w-6xl scroll-smooth w-full cursor-grab"
        onMouseDown={handleMouseDown}
      >
        {wines.map((wine, index) => (
          <div key={index} className="wine-card flex-shrink-0 snap-center bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center transition-transform duration-300 hover:scale-105 w-[85%] sm:w-auto mx-auto sm:mx-0">
            <img src={wine.image} alt={wine.name} className="w-full h-64 object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-[#A02B11]">{wine.name}</h3>
              <p className="text-gray-600 mt-2 font-medium">{wine.price}</p>
              <a href={wine.link}>
                <button className="mt-4 bg-[#A02B11] text-white px-4 py-2 rounded-full hover:bg-[#8C240E] transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Shop Now Button */}
      <a href="https://paystack.shop/mersakyi-winery" target="_blank" rel="noopener noreferrer" className="mt-12">
        <button className="bg-[#A02B11] text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wide hover:bg-[#8C240E] transition-colors duration-300 shadow-md">
          Shop Now
        </button>
      </a>
    </section>
  )
}

export default Wines