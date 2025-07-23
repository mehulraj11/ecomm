import { products } from "../data/shopData";
import ProductCard from "../components/ProductCard";
import BackButton from "../components/BackButton";

const Productspage = ({ onProductSelect }) => (
  <div className="bg-black min-h-screen py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <BackButton route="/homepage" />
      <h1 className="text-4xl font-bold text-white mb-8">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={onProductSelect}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Productspage;
