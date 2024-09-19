import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BlogPost from "./BlogPost";
import Services from "./Services";
import Navigation from "./Navigation";
import blogArticles from "./blogArticles.json";
import IPLocationMap from "./IPLocationMap";

const App = () => {
  const [topics, setTopics] = useState(["All"]);
  const [selectedTopic, setSelectedTopic] = useState("All");

  useEffect(() => {
    const allTopics = blogArticles.articles.map((article) => article.topic);
    const uniqueTopics = ["All", ...new Set(allTopics)];
    setTopics(uniqueTopics);
  }, []);

  const ArticleCard = ({ article }) => (
    <div className="bg-gray-900 rounded-lg overflow-hidden p-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold">{article.title}</h3>
        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
          {article.topic}
        </span>
      </div>
      <p className="text-gray-400 mb-4">
        {article.dateCreated} | {article.author}
      </p>
      <p className="text-gray-300 mb-4">{article.summary}</p>
      <Link
        to={`/blog/${article.urlName}`}
        className="text-blue-400 hover:text-blue-300 transition duration-300 flex items-center"
      >
        Read More <span className="ml-2">&rarr;</span>
      </Link>
    </div>
  );

  const RecentArticles = () => (
    <div className="mt-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Recent Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogArticles.articles.slice(0, 2).map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );

  const Home = () => (
    <div className="text-center p-8 pt-32 bg-black text-white min-h-screen">
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
      <RecentArticles />
    </div>
  );

  const Blog = () => {
    const filteredArticles =
      selectedTopic === "All"
        ? blogArticles.articles
        : blogArticles.articles.filter(
            (article) => article.topic === selectedTopic
          );

    return (
      <div className="p-8 pt-32 bg-black text-white min-h-screen">
        <h2 className="text-4xl font-bold mb-12 text-center">Blog Articles</h2>
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex items-center justify-center space-x-4">
            <label htmlFor="topic-filter" className="text-gray-300">
              Filter by topic:
            </label>
            <select
              id="topic-filter"
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="bg-gray-800 text-white border border-gray-700 rounded px-3 py-2"
            >
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    );
  };

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
