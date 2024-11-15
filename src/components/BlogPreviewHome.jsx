import React from "react";
import "../css/BlogPreviewHome.css"; // Ensure this path is correct

const blogEntries = [
  {
    id: 1,
    title: "The Future of AI",
    category: "BLOG",
    imageUrl: "ai.jpg",
    description:
      "Explore the future of artificial intelligence and how it transforms industries.",
    link: "/resources/blogs/1",
  },
  {
    id: 2,
    title: "Case Study: AI in Retail",
    category: "CASE STUDY",
    imageUrl: "ai-in-retail-min.jpg",
    description:
      "A detailed look at AI-driven transformations in the retail sector.",
    link: "/resources/case-studies/2",
  },
  {
    id: 3,
    title: "Innovating with Cloud",
    category: "BLOG",
    imageUrl: "cloud-min.jpg",
    description:
      "How cloud technology is pivotal in driving business innovation.",
    link: "/resources/blogs/3",
  },
  {
    id: 4,
    title: "Blockchain in Finance",
    category: "CASE STUDY",
    imageUrl: "blockchain-min.jpg",
    description:
      "Discover how blockchain technology is revolutionizing the finance industry.",
    link: "/resources/case-studies/4",
  },
];

const BlogPreview = () => {
  return (
    <div className="blog-preview-container">
      <h1 className="page-title">Unlocking Tomorrow: Insights & Innovations</h1>
      <div className="cards-container">
        {blogEntries.map((entry) => (
          <a
            href={entry.link}
            key={entry.id}
            className="blog-card"
            style={{ backgroundImage: `url(${entry.imageUrl})` }}
          >
            <div className="card-overlay">
              <p>{entry.description}</p>
              <span className="read-more">Read more →</span>
            </div>
            <div className="card-header">
              <span className="category">{entry.category}</span>
              <h2>{entry.title}</h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogPreview;
