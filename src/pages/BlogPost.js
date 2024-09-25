import React from "react";
import { useParams, Link } from "react-router-dom";
import blogArticles from "../data/blogArticles.json";

const BlogPost = () => {
  const { urlName } = useParams();
  const article = blogArticles.articles.find(
    (article) => article.urlName === urlName
  );

  if (!article) {
    return (
      <div className="p-8 pt-32 bg-black text-white min-h-screen">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p>Sorry, the article you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="text-blue-400 hover:text-blue-300 mt-4 inline-block"
          >
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 pt-32 bg-black text-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/blog"
          className="text-blue-400 hover:text-blue-300 mb-4 inline-block"
        >
          &larr; Back to Blog
        </Link>
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <div className="flex justify-between items-center mb-8">
          <p className="text-gray-400">
            {article.dateCreated} | {article.author}
          </p>
          <span className="bg-blue-500 text-white px-2 py-1 rounded">
            {article.topic}
          </span>
        </div>
        {article.content.map((item) => (
          <div key={item.id} className="mb-8">
            {item.title && (
              <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
            )}
            {item.paragraph && (
              <p className="text-gray-300">{item.paragraph}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
