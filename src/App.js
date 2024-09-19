import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Shield, Globe, DollarSign } from "lucide-react";
import BlogPost from "./BlogPost";
import blogArticles from "./blogArticles.json";

const App = () => {
  const NavBar = () => (
    <nav className="bg-black p-4 text-white fixed w-full z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">VPN Router Services</div>
        <ul className="flex space-x-8">
          <li>
            <Link
              to="/"
              className="hover:text-gray-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-gray-300 transition duration-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="hover:text-gray-300 transition duration-300"
            >
              Blog
            </Link>
          </li>
          <li>
            <a
              href="https://duranirving.setmore.com/irvingduran"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-300"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );

  const Home = () => (
    <div className="text-center p-8 pt-32 bg-black text-white min-h-screen">
      <h1 className="text-6xl font-bold mb-6">
        Introducing Secure VPN Solutions
      </h1>
      <p className="mb-12 text-xl text-gray-300 max-w-3xl mx-auto">
        We've developed a new series of VPN router configurations designed to
        keep you secure and anonymous online, no matter where you roam.
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

  const Services = () => (
    <div className="p-8 pt-32 bg-black text-white min-h-screen">
      <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-gray-900 p-6 rounded-lg">
          <Shield className="w-12 h-12 text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">VPN Router Setup</h3>
          <p className="text-gray-300">
            Secure your connection with our custom VPN router configurations.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg">
          <Globe className="w-12 h-12 text-purple-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Global Access</h3>
          <p className="text-gray-300">
            Bypass geo-restrictions and access your favorite content worldwide.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg">
          <DollarSign className="w-12 h-12 text-green-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Cost-effective Solutions
          </h3>
          <p className="text-gray-300">
            Save on international data plans with our expert VPN setups.
          </p>
        </div>
      </div>
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

  const ArticleCard = ({ article }) => (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <img
        src={article.mainImage}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
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
    </div>
  );

  const Blog = () => (
    <div className="p-8 pt-32 bg-black text-white min-h-screen">
      <h2 className="text-4xl font-bold mb-12 text-center">Blog Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {blogArticles.articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black">
        <NavBar />
        <main className="flex-grow">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/blog/:urlName" component={BlogPost} />
          </Switch>
        </main>
        <footer className="bg-black p-4 text-center text-gray-500">
          © 2024 Secure VPN Router Services. All rights reserved.
        </footer>
      </div>
    </Router>
  );
};

export default App;
