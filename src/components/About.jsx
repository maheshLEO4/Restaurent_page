import { useState, useEffect } from "react";

const images = [
  "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=800",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
  "https://images.unsplash.com/photo-1556745750-68295fefafc5?w=800",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800"
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Auto-loop slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4 seconds per slide
    
    return () => clearInterval(interval);
  }, []);
  
  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      observer.observe(aboutSection);
    }
    
    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  // Manual control for slideshow
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      id="about" 
      className={`py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Section Heading */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-600 mb-3">About Aroma</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Discover the tradition, taste, and essence of South Indian hospitality.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Slideshow - Fixed Implementation */}
          <div className="w-full lg:w-2/5 relative rounded-lg shadow-xl overflow-hidden h-80 md:h-96">
            {/* Current image only - more reliable than absolute positioning */}
            <img
              src={images[currentIndex]}
              alt={`Aroma Restaurant Ambience ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-700"
            />
            
            {/* Slideshow Controls */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 
                    ${index === currentIndex ? "w-6 bg-orange-600" : "bg-white/70 hover:bg-white"}`}
                />
              ))}
            </div>
          </div>
          
          {/* Text Section */}
          <div className="w-full lg:w-3/5 mt-8 lg:mt-0">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-800">Our Story</h3>
            <div className="w-16 h-1 bg-orange-400 mb-6"></div>
            
            <p className="text-gray-700 mb-5 text-base sm:text-lg leading-relaxed">
              Aroma Restaurant is more than just a dining experience — it's a journey through the rich culinary heritage of South India.
              From the aroma of sizzling spices to the warmth of traditional flavors, we bring you food that tells a story.
            </p>
            
            <p className="text-gray-700 mb-5 text-sm sm:text-base leading-relaxed">
              Founded in 2010, Aroma was born from a passion to serve authentic home-style South Indian cuisine with a modern twist.
              We use traditional recipes passed down for generations and source fresh, local ingredients to bring you a taste that feels like home.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <div className="flex items-center">
                <div className="bg-orange-100 p-3 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-800">Authentic Recipes</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-orange-100 p-3 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-800">Fresh Ingredients</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-orange-100 p-3 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-800">Traditional Methods</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}