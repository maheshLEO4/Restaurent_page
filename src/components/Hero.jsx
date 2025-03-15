export default function Hero() {
  // Function to handle smooth scrolling to the about section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1736239092023-ba677fd6751c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudCUyMCUyMHNvdXRoJTIwaW5kaWElMjAlMjBmb29kfGVufDB8fDB8fHww')",
      }}
      aria-label="Hero Section"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-brightness-75"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-10 lg:px-16 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-2 sm:mb-3 drop-shadow-lg">
          Welcome to{" "}
          <span className="text-orange-500 animate-fadeLoop">Aroma</span>
        </h1>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-orange-100 mb-1 sm:mb-2">
          Experience authentic South Indian cuisine like never before
        </h2>
        
        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-light mb-4 sm:mb-6 drop-shadow-md leading-relaxed">
          A Taste of South India that awakens your senses and brings comfort in every bite.
          Our dishes are crafted with passion, tradition, and a modern touch.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-2 sm:mt-4">
          <button className="bg-orange-600 hover:bg-orange-700 text-white text-sm sm:text-base font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 w-full sm:w-auto">
            Book a Table
          </button>
          <button className="bg-transparent border border-white text-white hover:bg-white hover:text-black text-sm sm:text-base font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white w-full sm:w-auto">
            Explore Menu
          </button>
        </div>
        
        {/* Subtle CTA line */}
        <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-300 italic tracking-wide">
          Fresh ingredients • Traditional flavors • Exceptional experience
        </p>
        
        {/* Down arrow animation for scroll cue - now clickable */}
        <button 
          onClick={scrollToAbout}
          className="mt-6 sm:mt-10 animate-bounce cursor-pointer focus:outline-none"
          aria-label="Scroll to About section"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-auto text-orange-400 hover:text-orange-300 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}