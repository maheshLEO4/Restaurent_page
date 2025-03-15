export default function Gallery() {
  const images = [
    "https://plus.unsplash.com/premium_photo-1687697861242-03e99059e833?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D1",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1680993032090-1ef7ea9b51e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c291dGglMjBpbmRpYSUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
    "https://media.istockphoto.com/id/1292563627/photo/assorted-south-indian-breakfast-foods-on-wooden-background-ghee-dosa-uttappam-medhu-vada.webp?a=1&b=1&s=612x612&w=0&k=20&c=horyU4NBswJFPSeVuEAlZtpB-BF_xFODzd4J4AbVH9M=",
    "https://media.istockphoto.com/id/1164561431/photo/indian-style-lamb-biryani.webp?a=1&b=1&s=612x612&w=0&k=20&c=Kn6lgy7t7ujK5OphjUHIGUg42D0YaFhO_4HYtfYJcIE=",
    "https://media.istockphoto.com/id/1253934130/photo/mutton-masala-curry-in-plastic-container-for-home-delivery.webp?a=1&b=1&s=612x612&w=0&k=20&c=YfBWKFt3Zje8yRAlAdteLnL5vhJvCnf2Vj2CU2ytgE4=",
    "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11dHRvbnxlbnwwfHwwfHx8MA%3D%3D",
   "https://plus.unsplash.com/premium_photo-1723491285855-f1035c4c703c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmVudHxlbnwwfHwwfHx8MA%3D%3D",

  ];

  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow bg-white"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-72 h-48 object-cover mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
