function Hero() {
  return (
    <div id="home" className="w-full h-screen bg-no-repeat bg-cover bg-center bg-[url('/assets/bg1.jpg')]">
      {/* HERO SECTION */}
      <div className="w-[90%] mx-auto h-full flex items-center justify-between py-10">
        <div className="lg:w-fit">
          <div className="sm:text-6xl xs:text-5xl text-left text-white font-serif font-extrabold uppercase">
            <h1>Indulge</h1>
            <h1>in</h1>
            <h1 className="bg-[#722F37]/60 text-white rounded-sm px-1 shadow-sm shadow-white/50">Luxury</h1>
            <h1>Today</h1>
          </div>

          <div className="w-full flex items-center justify-between mt-6 py-2 px-4 uppercase bg-[#722F37] hover:bg-[#5a222b] rounded-sm transition-all duration-300 cursor-pointer">
            <a href="#wines">
              <h3 className="text-white text-lg font-semibold">Shop Now</h3>
            </a>
            <div className="w-[40%] flex items-center text-white text-4xl gap-0">
              <hr className="w-full border border-white/50 relative -right-3" />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <p className="text-md text-white bg-black/30 font-semibold mt-1 capitalize rounded-lg p-2">
            15% off your first order
          </p>
        </div>

        <div className="hidden md:flex flex-col gap-2 items-center text-2xl text-white mt-6">
          <a href="#" className="w-9 h-9 rounded-full bg-black/40 hover:bg-[#722F37] flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" className="w-9 h-9 rounded-full bg-black/40 hover:bg-[#722F37] flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" className="w-9 h-9 rounded-full bg-black/40 hover:bg-[#722F37] flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero