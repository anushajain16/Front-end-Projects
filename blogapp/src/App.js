import Footer from './Footer'
import Nav from './Nav'
import Missing from './Missing'
import About from './About'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import { Route, Routes, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
  const API_URL = "http://localhost:3500/blogs"

  const[blog,setBlog] = useState([])
  const[fetchError, setFetchError] = useState(null)

  const findLatest = ({ blog }) => {
    if (!blog || blog.length === 0) return null; 

    let latestDate = new Date(blog[0].createdAt);
    let latestBlog = blog[0];

    for (let i = 1; i < blog.length; i++) {
      const currentDate = new Date(blog[i].createdAt);
      if (currentDate > latestDate) {
        latestDate = currentDate;
        latestBlog = blog[i];
      }
    }

    return latestBlog;
  };

  const sortLatest = ({blog}) => {
    return blog.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  useEffect(() => {
    const fetchBlogs= async() => {
      try{
        const response = await fetch(API_URL);
        if(!response.ok) throw Error('Did not receive data');
        const listBlogs = await response.json()
        console.log(listBlogs)
        setBlog(listBlogs)
        setFetchError(null)
      }
      catch(err){
        setFetchError(err.message);
      }
    }
    (async () => await fetchBlogs())()
  },[])


  return (
     <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={
          <Home 
            blog={blog}
            findLatest={findLatest}
            sortLatest={sortLatest}
        />} />
        <Route exact path="/post" element={<NewPost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
        
        
  );
}

export default App;
