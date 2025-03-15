export default function Reservation() {
  return (
    <section id="reservation" className="py-16 bg-[#0f1f0f] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">
          Make a Reservation
        </h2>

        <form className="w-full max-w-xl mx-auto bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl">
          <div className="space-y-5">
            <div>
              <label className="block text-gray-100 mb-1 text-sm">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-400 bg-white/90 text-black rounded-lg text-sm sm:text-base"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-gray-100 mb-1 text-sm">Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-400 bg-white/90 text-black rounded-lg text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-gray-100 mb-1 text-sm">Time</label>
              <input
                type="time"
                className="w-full px-4 py-2 border border-gray-400 bg-white/90 text-black rounded-lg text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-gray-100 mb-1 text-sm">Number of Guests</label>
              <input
                type="number"
                className="w-full px-4 py-2 border border-gray-400 bg-white/90 text-black rounded-lg text-sm sm:text-base"
                placeholder="Number of Guests"
              />
            </div>

            <div>
              <label className="block text-gray-100 mb-1 text-sm">Message</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-400 bg-white/90 text-black rounded-lg text-sm sm:text-base"
                placeholder="Special Requests"
                rows="4"
              ></textarea>
            </div>

            <button
              type="button"
              className="bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-700 w-full transition-all duration-300"
              onClick={() => alert('Reservation submitted (frontend only)!')}
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
