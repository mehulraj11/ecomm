import { Star } from "lucide-react";

const ProductCard = ({ product, onSelect }) => (
  <div
    onClick={() => onSelect(product)}
    className="group cursor-pointer bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-white/30 transition-all duration-300 transform hover:scale-105"
  >
    <div className="relative aspect-square overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div className="p-4">
      <h3 className="text-white font-semibold mb-2 group-hover:text-gray-300 transition-colors">
        {product.name}
      </h3>
      <div className="flex items-center mb-2">
        <Star size={12} className="text-yellow-400 fill-current" />
        <span className="text-gray-400 text-sm ml-1">
          {product.rating} ({product.reviews})
        </span>
      </div>
      <p className="text-white font-bold text-xl">${product.price}</p>
    </div>
  </div>
);

export default ProductCard;
