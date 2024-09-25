import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BlogPost from "./pages/BlogPost";
import Services from "./pages/Services";
import Navigation from "./components/Navigation";
import blogArticles from "./data/blogArticles.json";
import IPLocationMap from "./pages/IPLocationMap";
import Blog from "./pages/Blog";
import ArticleCard from "./components/ArticleCard";
import SpeedTest from './pages/SpeedTest'

const App = () => {

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

  const Home = () => (
    <div className="text-center p-8 pt-32 bg-black text-white">
      <div className="banner">
        <div className="content">
          <h1 className="text-6xl font-bold mb-6">Welcome to StealthWork</h1>
          <p className="mb-12 text-xl text-gray-300 max-w-3xl mx-auto">
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
      <RecentArticles />
    </div>
  );

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:urlName" element={<BlogPost />} />
            <Route path="/ip-location" element={<IPLocationMap />} />
            <Route path="/speedtest" element={<SpeedTest />} ></Route>
          </Routes>
        </main>
        <footer className="bg-black p-4 text-center text-gray-500">
          © 2024 StealthWork. All rights reserved.
        </footer>
      </div>
    </Router>
  );
};

export default App;
