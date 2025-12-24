import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

const Blogs = () => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="blogs-page">
      <section className="blogs-section">
        <div className="container">
          <h1 className="section-title">Blogs</h1>
          
          {blogs.length === 0 ? (
            <div className="blogs-empty">
              <div className="empty-icon">
                <i className="fas fa-pencil-alt"></i>
              </div>
              <h3>No blogs yet</h3>
              <p>Stay tuned! I'll be sharing my thoughts on research, technology, and more soon.</p>
              <Link to="/" className="btn btn-primary">
                ← Back to Home
              </Link>
            </div>
          ) : (
            <div className="blogs-grid">
              {blogs.map((blog) => (
                <a
                  href={blog.link || `/blog/${blog.slug}`}
                  target={blog.link ? '_blank' : '_self'}
                  rel={blog.link ? 'noopener noreferrer' : ''}
                  className="blog-card"
                  key={blog.id}
                >
                  {blog.image && (
                    <div className="blog-card-image">
                      <img src={blog.image} alt={blog.title} />
                    </div>
                  )}
                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      <span className="blog-date">{formatDate(blog.date)}</span>
                    </div>
                    <h3 className="blog-card-title">{blog.title}</h3>
                    <p className="blog-card-excerpt">{blog.excerpt}</p>
                    {blog.tags && blog.tags.length > 0 && (
                      <div className="blog-tags">
                        {blog.tags.map((tag) => (
                          <span className="blog-tag" key={tag}>{tag}</span>
                        ))}
                      </div>
                    )}
                    <span className="blog-read-more">
                      Read more <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
