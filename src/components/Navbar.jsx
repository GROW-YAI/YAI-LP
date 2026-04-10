import { useState } from 'react'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 left-0 w-full z-50 lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-sm bg-black/40 backdrop-blur-sm">
      {/* Brand */}
      <div className="flex-1 flex justify-between items-center">
        <a href="#" className="text-3xl font-extrabold text-[#722F37]">Meserkyi Wine</a>

        {/* Mobile Menu Button */}
        <button 
          id="mobileMenuBtn" 
          className="md:hidden focus:outline-none text-white"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* NAV MENU */}
      <nav 
        id="mobileMenu"
        className={`w-full md:flex md:w-auto md:items-center md:gap-8 text-white text-base font-medium ${isMobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-center mt-4 md:mt-0">
          <li><a className="hover:text-[#722F37]" href="#home" onClick={closeMobileMenu}>Home</a></li>
          <li><a className="hover:text-[#722F37]" href="#wines" onClick={closeMobileMenu}>Wines</a></li>
          <li><a className="hover:text-[#722F37]" href="#about-us" onClick={closeMobileMenu}>About</a></li>
          <li><a className="hover:text-[#722F37]" href="#management" onClick={closeMobileMenu}>Management</a></li>
          <li><a className="hover:text-[#722F37]" href="#why-us" onClick={closeMobileMenu}>Why Us</a></li>
          <li><a className="hover:text-[#722F37]" href="#contact" onClick={closeMobileMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar