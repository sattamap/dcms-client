
const Blogs = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-8">Health Blogs</h1>

      {/* Blog 1 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">The Impact of Sleep on Overall Health</h2>
        <p className="text-gray-600 mb-4">
          Quality sleep is essential for physical and mental well-being. Learn about the importance of sleep
          and its profound effects on various aspects of health, including immune function and cognitive performance.
        </p>
        <a href="/blog/sleep-impact" className="text-blue-500 hover:underline">Read more</a>
      </div>

      {/* Blog 2 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Eating Habits for a Healthy Gut</h2>
        <p className="text-gray-600 mb-4">
          Explore the connection between gut health and overall wellness. Discover the best foods for promoting
          a healthy gut microbiome and how it can positively influence digestion and immune function.
        </p>
        <a href="/blog/healthy-gut" className="text-blue-500 hover:underline">Read more</a>
      </div>

      {/* Blog 3 */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">The Benefits of Regular Physical Activity</h2>
        <p className="text-gray-600 mb-4">
          Physical activity is a key component of a healthy lifestyle. Uncover the numerous benefits of regular exercise,
          from cardiovascular health to stress reduction, and learn practical tips for incorporating fitness into your routine.
        </p>
        <a href="/blog/physical-activity" className="text-blue-500 hover:underline">Read more</a>
      </div>
    </div>
  );
};

export default Blogs;
