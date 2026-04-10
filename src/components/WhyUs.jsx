function WhyUs() {
  const cards = [
    {
      title: 'Supporting Local Farmers',
      description: 'We buy surplus tomatoes and fruits from local farmers, reducing waste and providing them with sustainable income while crafting fine wine.',
      image: '/assets/farm1.jpg',
      alt: 'farmers farming'
    },
    {
      title: 'Luxury in Every Bottle',
      description: 'Our wine is crafted with precision, offering rich flavors and a premium experience for those who appreciate fine quality.',
      image: '/assets/luxury.jpg',
      alt: 'Luxury wine bottle'
    },
    {
      title: 'Eco-Friendly Commitment',
      description: 'From responsible sourcing to sustainable packaging, we prioritize environmental consciousness in every step.',
      image: '/assets/eco.jpg',
      alt: 'Eco-friendly farming'
    }
  ]

  return (
    <section id="why-us" className="py-16 bg-[#FFF8F5] text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#A02B11] mb-12 tracking-wide">
        Why Choose Us?
      </h2>

      <div className="cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-12 lg:px-20">
        {cards.map((card, index) => (
          <div key={index} className="card bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center border border-[#A02B11]/10 hover:scale-105">
            <div className="icon bg-[#A02B11]/10 text-[#A02B11] w-32 h-32 flex items-center justify-center rounded-2xl text-3xl mb-6 overflow-hidden">
              <img src={card.image} alt={card.alt} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold text-[#A02B11] mb-3">
              {card.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyUs