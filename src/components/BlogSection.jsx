
const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Best Running Shoes",
    excerpt: "Finding the right pair of running shoes can make all the difference. Here are tips on what to look for when buying...",
    author: "Jane Doe",
    date: "December 10, 2024",
    link: "/blog/running-shoes",
    image: "https://img.allfootballapp.com/www/M00/6A/77/720x-/-/-/rB8ApF4YWaeAX92OAAFPHib4Pdg758.jpg.webp",
  },
  {
    id: 2,
    title: "Top 5 Fitness Gadgets for 2024",
    excerpt: "From smartwatches to resistance bands, these fitness gadgets are essential for a complete workout routine...",
    author: "John Smith",
    date: "December 5, 2024",
    link: "/blog/fitness-gadgets",
    image: "https://images.news18.com/ibnlive/uploads/2024/08/kylian-mbappe-2024-08-6564e948291ee6a4889f2972ee6f9ab0.jpg",
  },
  {
    id: 3,
    title: "How to Maintain Your Football Equipment",
    excerpt: "Maintaining your football gear is crucial to its longevity. Learn how to care for your football cleats, helmet, and pads...",
    author: "Emily Johnson",
    date: "December 1, 2024",
    link: "/blog/football-maintenance",
    image: "https://cdn1.yumping.com/emp/fotos/28/E/019664098/640/En%20la%20tienda%20del%20Real%20Madrid.jpg",
  },
  {
    id: 4,
    title: "Top 10 Strength Training Exercises for Beginners",
    excerpt: "Strength training is key to building muscle and endurance. Check out these beginner-friendly exercises to get started...",
    author: "Michael Brown",
    date: "November 28, 2024",
    link: "/blog/strength-training-exercises",
    image: "https://cdn.vox-cdn.com/thumbor/tp1eOpX39R-DsqL2Hvh5kpALiX4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22794986/1334890756.jpg"
  },
  {
    id: 5,
    title: "Best Recovery Strategies After Intense Workouts",
    excerpt: "Recovery is just as important as the workout itself. Discover effective recovery methods that will help you bounce back faster...",
    author: "Sarah Lee",
    date: "November 25, 2024",
    link: "/blog/recovery-strategies",
    image: "https://images.squarespace-cdn.com/content/v1/636969f5a011d748629bcac2/ba4216db-0d76-40f3-b925-e26b13ffff1f/cristiano+ronaldo+workout+routine.jpeg"
  }
  // Repeat other posts
];

const BlogSection = () => {
  return (
    <section className=" py-12">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">
          Latest News and Blog
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Large Article on the Left, takes up 6/12 columns */}
          <div className="lg:col-span-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-700">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
                <div className="text-xs text-gray-500 flex justify-between items-center">
                  <span>By {blogPosts[0].author}</span>
                  <span>{blogPosts[0].date}</span>
                </div>
                <a
                  href={blogPosts[0].link}
                  className="mt-4 inline-block text-blue-500 hover:text-blue-700 font-medium"
                >
                  Read Full Article →
                </a>
              </div>
            </div>
          </div>

          {/* Smaller Articles on the Right, in two sections */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {blogPosts.slice(1).map((post) => (
              <div
                key={post.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden flex"
              >
                {/* Image */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-32 h-full object-cover"
                />
                {/* Text Content */}
                <div className="p-4 flex flex-col justify-between">
                  <h3 className="text-lg font-semibold mb-2 text-gray-700">
                    {post.title}
                  </h3>
                  <div className="text-xs text-gray-500 flex justify-between">
                    <span>By {post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <a
                    href={post.link}
                    className="mt-2 text-blue-500 hover:text-blue-700 text-sm"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
