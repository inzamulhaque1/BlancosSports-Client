const testimonials = [
    {
      id: 1,
      name: "John Doe",
      review:
        "This product exceeded my expectations! The quality is top-notch, and the customer service was outstanding. Highly recommend!",
      image: "https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png",
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      review:
        "I love this! It has made my life so much easier. Great value for the price.",
      image: "https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png",
      rating: 4,
    },
    {
      id: 3,
      name: "Alex Johnson",
      review:
        "A fantastic experience from start to finish. Will definitely purchase again!",
      image: "https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png",
      rating: 5,
    },
  ];
  
  const TestimonialCarousel = () => {
    return (
      <section className="bg-gradient-to-r from-orange-300 to-blue-300 py-12">
        <div className="max-w-screen-lg mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-white mb-4">
            What Our Customers Are Saying
          </h2>
          <p className="text-lg text-white mb-12">
            Your feedback is important to us! Here&apos;s how our product has made a difference for our customers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {testimonial.name}
                  </h3>
                  <p className="text-yellow-500 text-lg flex mb-4">
                    {"★".repeat(testimonial.rating)}
                    {"☆".repeat(5 - testimonial.rating)}
                  </p>
                </div>
                <p className="text-gray-600 text-center">{testimonial.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TestimonialCarousel;
  