import React from "react";
import { useParams, Link } from "react-router-dom";
import blogArticles from "../data/blogArticles.json";
import CodeBlock from "../components/CodeBlock";

const BlogPost = () => {
  const { urlName } = useParams();
  const article = blogArticles.articles.find(
    (article) => article.urlName === urlName
  );

  const renderParagraphWithLinks = (paragraph, links) => {
    if (!links || links.length === 0) {
      return <p className="text-gray-300">{paragraph}</p>;
    }

    let text = paragraph;
    const elements = [];
    let lastIndex = 0;

    links.forEach((link, index) => {
      const startIndex = text.indexOf(link.text);
      if (startIndex === -1) return;

      // Add text before the link
      elements.push(text.substring(lastIndex, startIndex));

      // Add the link
      elements.push(
        <a
          key={`link-${index}`}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300"
        >
          {link.text}
        </a>
      );

      lastIndex = startIndex + link.text.length;
    });

    // Add remaining text
    elements.push(text.substring(lastIndex));

    return <p className="text-gray-300">{elements}</p>;
  };

  const renderSteps = (steps) => {
    if (!steps) return null;

    return (
      <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4 mt-4">
        {steps.map((step, index) => (
          <li key={index} className="pl-2">
            {step}
          </li>
        ))}
      </ol>
    );
  };

  if (!article) {
    return (
      <div className="p-8 pt-32 bg-black text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p>Sorry, the article you're looking for doesn't exist.</p>
          <Link
            to="/articles"
            className="text-blue-400 hover:text-blue-300 mt-4 inline-block"
          >
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 pt-32 bg-black text-white">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/articles"
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
            {item.paragraph &&
              renderParagraphWithLinks(item.paragraph, item.links)}
            {item.code && (
              <CodeBlock
                code={item.code.content}
                language={item.code.language}
              />
            )}
            {item.steps && renderSteps(item.steps)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
