import { useState, useEffect } from "react";
import { menuData } from "../data";

export default function Menu() {
  const [isVisible, setIsVisible] = useState(false);

  // Get unique categories, filtering out any undefined/null values
  const categories = [...new Set(menuData.map(item => item.category).filter(Boolean))];

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const menuSection = document.getElementById("menu");
    if (menuSection) observer.observe(menuSection);

    return () => {
      if (menuSection) observer.unobserve(menuSection);
    };
  }, []);

  return (
    <section 
      id="menu" 
      className={`py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Section Heading */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-600 mb-3">Our Menu</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600 mt-2 text-base sm:text-lg max-w-2xl mx-auto">
            Taste the authentic flavors of South India — fresh, soulful, and unforgettable.
          </p>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {menuData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: isVisible ? 'fadeInUp 0.8s ease forwards' : 'none'
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-52 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {item.vegetarian && (
                  <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Veg
                  </span>
                )}
                {item.bestseller && (
                  <span className="absolute top-3 left-3 bg-orange-600 text-white text-xs px-2 py-1 rounded-full">
                    Bestseller
                  </span>
                )}
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-orange-600 font-bold">₹{item.price}</p>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state when no items exist */}
        {menuData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No menu items available.</p>
          </div>
        )}
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
