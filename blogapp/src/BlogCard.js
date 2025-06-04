import React from 'react'
import './BlogCard.css'
const BlogCard = ({blog}) => {
    if (!blog || blog.length === 0) {
    return <p>No blogs to display.</p>;
  }
  return (
    <div className='blog-container'>
      {blog.map((item) => (
          <div key={item.id} className="blog-card">
            <img src={item.image} alt={item.title} width="300" />
            <p className='cat'>{item.category}</p>
            <h2 className='title'>{item.title}</h2>
            <div className="blog-meta">
                <span className="author">{item.author_name}</span>
                <span className="date">{item.createdAt}</span>
            </div>
          </div>
        ))}
    </div>
  )
}

export default BlogCard
