import BlogCard from "./BlogCard";
import './Home.css';
import { useEffect, useState } from "react";

const Home = ({ blog, findLatest, sortLatest }) => {
  const latest = blog && blog.length > 0 ? findLatest({ blog }) : null;
  const [visibleCount, setVisibleCount] = useState(6);
  const [sortedBlogs, setSortedBlogs] = useState([]);

   useEffect(() => {
    if (blog && blog.length > 0) {
      const sorted = sortLatest({ blog }).slice(0, 15); 
      setSortedBlogs(sorted);
    }
  }, [blog, sortLatest]);

  const handleViewMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, 15));
  };
  
  return (
    <main>
      {latest && (
        <div className="latest">
          <div className="latest-image-wrapper">
            <img src={latest.image} className="latest-image" alt="Image" />
            <div className="overlay-card">
              <p className="category">{latest.category}</p>
              <h2 className="title">{latest.title}</h2>
              <div className="meta">
                <p>{latest.author_name}</p>
                <p>{latest.createdAt}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="post">
        <div className="post-head"><p>Latest Post</p></div>
        <BlogCard blog={sortedBlogs.slice(0, visibleCount)} />

        {visibleCount < sortedBlogs.length && (
          <button onClick={handleViewMore} className="btn-view">View More</button>
        )}
      </div>
      
    </main>
  );
};

export default Home;
