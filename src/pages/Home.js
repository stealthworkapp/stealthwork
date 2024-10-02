import React from "react";
import blogArticles from "../data/blogArticles.json";
import ArticleCard from "../components/ArticleCard";
import amazonProducts from "../data/amazonProducts.json";
import FeaturedProducts from "../components/FeaturedProducts";

const Home = () => {
  const RecentArticles = () => {
    // Sort articles by date (newest first) and take the first two
    const sortedRecentArticles = blogArticles.articles
      .sort((a, b) => {
        const dateA = new Date(a.dateCreated);
        const dateB = new Date(b.dateCreated);
        return dateB - dateA; // Sort in descending order (newest first)
      })
      .slice(0, 2);

    return (
      <div id="recent-articles-container" className="mt-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Recent Articles</h2>
        <div
          id="recent-articles-grid"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {sortedRecentArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="text-center p-8 pt-32 bg-black text-white">
      <div className="banner">
        <div className="content">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            Welcome to StealthWork
          </h1>
          <p className="mb-8 sm:mb-12 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted partner for VPN solutions, software development, and
            website consultation. Stay secure, stay connected, stay ahead.
          </p>

          <a
            href="https://duranirving.setmore.com/irvingduran"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            Book a Consultation
          </a>
        </div>
      </div>
      <FeaturedProducts amazonProducts={amazonProducts} />
      <RecentArticles />
    </div>
  );
};

export default Home;
