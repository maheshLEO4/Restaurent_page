import { reviewsData } from "../data";

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <h3 className="text-xl font-semibold">{review.name}</h3>
                <div className="flex">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
