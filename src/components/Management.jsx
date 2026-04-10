function Management() {
  return (
    <section id="management" className="relative flex flex-col justify-between items-center min-h-screen bg-white px-6 py-12 lg:px-16">
      {/* Title */}
      <div className="w-full text-left">
        <h1 className="text-3xl lg:text-5xl font-bold uppercase text-[#A02B11]">
          About the Winemaker
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center max-w-3xl mt-8">
        <h2 className="text-2xl font-medium uppercase text-[#A02B11]/80 lg:text-4xl mb-4">
          Crafted with Heart & Heritage
        </h2>

        <p className="text-gray-700 leading-relaxed lg:leading-loose">
          At the heart of Mersakyi Enterprise is a visionary winemaker whose craft transforms the fruits of Ghana's farmlands into elegant wines. 
          Rooted in passion, precision, and purpose, every bottle tells a story of sustainability, innovation, and cultural pride.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed lg:leading-loose">
          Vivian Asiedu, the founder and winemaker of Mersakyi Enterprise, combines her deep agricultural roots and a passion for the environment, brings innovation and craftsmanship to every bottle. Her passion for blending tradition with modern 
          techniques has set Mersakyi apart in the world of fine wines. 
          Vivian is the definition of consistency when it comes to winemaking, every taste is unique as she always puts in her all in the business. A family and career woman who juggles work and family in absolute harmony which makes Mersakyi not just a business but one that cares about its customers like family.
        </p>
      </div>

      {/* Image at Bottom */}
      <div className="w-full flex justify-center mt-12">
        <img
          className="w-full max-w-lg h-72 object-cover shadow-lg transition-transform duration-700 ease-in-out hover:scale-105"
          src="/images/viv.png"
          alt="Mersakyi winemaker inspecting wine bottles"
        />
      </div>
    </section>
  )
}

export default Management