import { motion } from "framer-motion";

const blogPosts = [
    {
        title: "The Timeless Beauty of Banarasi Sarees",
        description: "Discover the elegance of Banarasi sarees, known for their intricate zari work and luxurious silk.",
        image: "https://source.unsplash.com/600x400/?banarasi,saree",
        date: "Jan 5, 2025",
        author: "Aisha Sharma",
        link: "#"
      },
      {
        title: "Kanjivaram Sarees: The Queen of Silks",
        description: "A deep dive into the craftsmanship of Kanjivaram sarees, woven with pure silk and gold threads.",
        image: "https://source.unsplash.com/600x400/?kanjivaram,saree",
        date: "Jan 12, 2025",
        author: "Neha Verma",
        link: "#"
      },
      {
        title: "How to Style a Saree for a Modern Look",
        description: "Mix tradition with contemporary fashion by styling your saree in innovative ways.",
        image: "https://source.unsplash.com/600x400/?saree,fashion",
        date: "Jan 20, 2025",
        author: "Ritika Kapoor",
        link: "#"
      },
      {
        title: "Handloom Sarees: A Tribute to Indian Weavers",
        description: "Explore the world of handloom sarees and the artisans who keep this tradition alive.",
        image: "https://source.unsplash.com/600x400/?handloom,saree",
        date: "Feb 1, 2025",
        author: "Manisha Reddy",
        link: "#"
      },
      {
        title: "Chiffon vs. Georgette Sarees: Which One to Choose?",
        description: "A comparison of chiffon and georgette sarees to help you decide the best fabric for your occasion.",
        image: "https://source.unsplash.com/600x400/?chiffon,saree",
        date: "Feb 10, 2025",
        author: "Sunita Jain",
        link: "#"
      },
      {
        title: "The Magic of Paithani Sarees",
        description: "Experience the vibrant colors and intricate motifs of Maharashtra’s Paithani sarees.",
        image: "https://source.unsplash.com/600x400/?paithani,saree",
        date: "Feb 18, 2025",
        author: "Pooja Desai",
        link: "#"
      },
      {
        title: "Sarees for Every Season: A Fabric Guide",
        description: "Find out which saree fabric suits different weather conditions, from cotton to silk.",
        image: "https://source.unsplash.com/600x400/?cotton,saree",
        date: "March 1, 2025",
        author: "Kavita Mehta",
        link: "#"
      },
      {
        title: "Reviving Vintage Sarees: A Sustainable Fashion Trend",
        description: "How repurposing vintage sarees can contribute to sustainable fashion.",
        image: "https://source.unsplash.com/600x400/?vintage,saree",
        date: "March 8, 2025",
        author: "Deepa Malhotra",
        link: "#"
      },
      {
        title: "Saree Draping Styles: Traditional vs. Contemporary",
        description: "From the Nivi to the Butterfly drape, explore different saree draping styles.",
        image: "https://source.unsplash.com/600x400/?draping,saree",
        date: "March 15, 2025",
        author: "Priya Sen",
        link: "#"
      }
];

const BlogComponent = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-10">Latest Blog Posts</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />

            <div className="p-6">
              <p className="text-gray-500 text-sm">{post.date} • By {post.author}</p>
              <h3 className="text-2xl font-semibold mt-2">{post.title}</h3>
              <p className="text-gray-600 mt-3">{post.description}</p>

              <a
                href={post.link}
                className="inline-block mt-4 text-blue-600 hover:text-blue-800 transition font-semibold"
              >
                Read More →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogComponent;
