import React, { useState, useEffect, useRef } from "react";
import AmazonProductCard from "./AmazonProductCard"; // Ensure this path is correct

const FeaturedProducts = ({ amazonProducts }) => {
  const allProducts = amazonProducts?.products || [];
  const featuredProducts = allProducts.filter(product => product.featured === true);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [showMoreVisible, setShowMoreVisible] = useState(false);
  const containerRef = useRef(null);

  const calculateVisibleProducts = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const cardWidth = 250; // Approximate width of a card including gap
      const cardsPerRow = Math.floor(containerWidth / cardWidth);
      return cardsPerRow;
    }
    return 4; // Default to 4 if calculation fails
  };

  useEffect(() => {
    const handleResize = () => {
      const visibleCount = calculateVisibleProducts();
      setVisibleProducts(featuredProducts.slice(0, visibleCount));
      setShowMoreVisible(featuredProducts.length > visibleCount);
    };

    handleResize(); // Initial calculation
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [featuredProducts]);

  const handleShowMore = () => {
    setVisibleProducts(featuredProducts);
    setShowMoreVisible(false);
  };

  if (featuredProducts.length === 0) {
    return null; // Don't render the component if there are no featured products
  }

  return (
    <div
      id="featured-products-container"
      className="mt-8 max-w-6xl mx-auto px-4"
    >
      <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
      <div
        ref={containerRef}
        id="featured-products-grid"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
      >
        {visibleProducts.map((product) => (
          <AmazonProductCard key={product.id} product={product} />
        ))}
      </div>
      {showMoreVisible && (
        <div className="text-center mt-6">
          <button
            onClick={handleShowMore}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturedProducts;
