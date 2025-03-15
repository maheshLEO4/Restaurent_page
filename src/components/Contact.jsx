export default function Contact() {
    return (
      <section id="contact" className="py-16 bg-[#2a3a1d] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Contact Us
          </h2>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Contact Info */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-gray-800">
              <h3 className="text-2xl font-semibold mb-6">Reach Us</h3>
              <div className="space-y-4 text-base">
                <p>
                  <span className="font-semibold">📍 Address:</span> 123 Aroma Street,
                  Food City, South India
                </p>
                <p>
                  <span className="font-semibold">📞 Phone:</span> +91 98765 43210
                </p>
                <p>
                  <span className="font-semibold">✉️ Email:</span>{' '}
                  contact@aromarestaurant.com
                </p>
                <p>
                  <span className="font-semibold">🕒 Open Hours:</span> 10:00 AM – 10:00 PM
                  (All Days)
                </p>
              </div>
            </div>
  
            {/* Social Links */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-gray-800">
              <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
              <ul className="space-y-4 text-base">
                <li>
                  🔗{' '}
                  <a
                    href="#"
                    className="hover:text-orange-600 font-medium transition-all duration-200"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  🔗{' '}
                  <a
                    href="#"
                    className="hover:text-orange-600 font-medium transition-all duration-200"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  🔗{' '}
                  <a
                    href="#"
                    className="hover:text-orange-600 font-medium transition-all duration-200"
                  >
                    Twitter (X)
                  </a>
                </li>
                <li>
                  🔗{' '}
                  <a
                    href="#"
                    className="hover:text-orange-600 font-medium transition-all duration-200"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
  