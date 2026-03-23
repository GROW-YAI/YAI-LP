function AboutUs() {
  return (
    <section id="about-us" className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
      {/* Image Column */}
      <div className="w-full h-64 lg:w-1/2 lg:h-auto flex justify-center items-center">
        <img
          className="h-70 w-full object-cover shadow-lg transition-transform duration-700 ease-in-out hover:scale-105 lg:h-[80vh]"
          src="/assets/pic1.jpg"
          alt="Bottles of Mersakyi fruit wine on display"
        />
      </div>

      {/* Text Column */}
      <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        {/* Text Wrapper */}
        <div className="flex flex-col p-12 md:px-16">
          {/* 🍷 About Us Title */}
          <h1 className="text-3xl lg:text-5xl font-extrabold uppercase text-[#A02B11] mb-4">
            About Us
          </h1>

          <h2 className="text-2xl font-medium uppercase text-[#A02B11]/80 lg:text-4xl">
            Made with Passion
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed">
            At Mersakyi Enterprise, we transform surplus fruits and tomatoes into fine wine, reducing food waste and supporting farmers. Our innovative approach enhances sustainability while offering a premium, unique wine experience. Our main aim is to support local farmers, create luxurious and tasty wine from fruits and impact the environment positively to improve sustainability and growth.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs