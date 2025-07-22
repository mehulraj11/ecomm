import { categories } from "../data/shopData";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="bg-black">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop)",
          }}
        ></div>
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">RACE</span>
            <span className="text-gray-300 block">INSPIRED</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            Premium streetwear collection inspired by the speed, precision, and
            luxury of Formula 1 racing.
          </p>
          <Link
            to="/products"
            className="bg-white hover:bg-gray-100 text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Products
          </Link>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => (index === 0 ? navigateTo("category") : null)}
                className={`group relative h-48 rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                  index === 0 ? "cursor-pointer" : "cursor-default opacity-75"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(https://source.unsplash.com/400x400/?${category.name.toLowerCase()})`,
                  }}
                ></div>
                <div className="relative z-20 h-full flex items-end p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {category.name}
                  </h3>
                </div>
                {index === 0 && (
                  <div className="absolute inset-0 border-2 border-white/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
