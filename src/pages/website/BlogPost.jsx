import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Banner from "../../components/website/Banner";
import { blogPosts } from "../../data/blogs";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Find the blog post by slug (converted from title)
    const foundBlog = blogPosts.find(
      (post) =>
        post.id === parseInt(slug) ||
        post.title
          .toLowerCase()
          .replace(/[^\w\s]/g, "")
          .replace(/\s+/g, "-") === slug
    );

    if (foundBlog) {
      setBlog(foundBlog);

      // Find related blog posts
      if (foundBlog.relatedPosts && foundBlog.relatedPosts.length > 0) {
        const related = foundBlog.relatedPosts
          .map((id) => blogPosts.find((post) => post.id === id))
          .filter(Boolean);
        setRelatedBlogs(related);
      }

      // Set page title
      document.title = `${foundBlog.title} | AlfoxAI`;
    } else {
      // Redirect to blogs page if blog not found
      navigate("/blogs");
    }

    setIsLoading(false);
  }, [slug, navigate]);

  if (isLoading) {
    return (
      <>
        <Banner page="Blog" />
        <div className="wrapper py-16">
          <div className="flex justify-center items-center py-20">
            <div className="loader"></div>
          </div>
        </div>
      </>
    );
  }

  if (!blog) {
    return null; // Will redirect in useEffect
  }

  return (
    <>
      <Banner page="Blog" />

      <div className="wrapper py-16">
        <div className="mb-6">
          <button
            onClick={() => navigate("/blogs")}
            className="flex items-center text-highlight hover:text-tertiary transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to all posts
          </button>
        </div>

        <article className="animate-fade-in">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center text-tertiary mb-6 gap-4">
              <span>{blog.date}</span>
              <span className="hidden md:inline">•</span>
              <span>
                By <span className="text-highlight">{blog.author}</span>
              </span>
              <span className="hidden md:inline">•</span>
              <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-accent2 rounded-full">
                {blog.category}
              </span>
            </div>
          </div>

          <div className="mb-8 rounded-lg overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-auto" />
          </div>

          {/* Blog content */}
          <div
            className="prose prose-lg prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4 text-white">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accent1 border border-white/10 rounded-full text-sm text-tertiary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Related Posts */}
          {relatedBlogs.length > 0 && (
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-xl font-bold mb-6 text-white">
                Related Articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedBlogs.map((relatedBlog) => {
                  const blogSlug = relatedBlog.id;
                  return (
                    <div
                      key={relatedBlog.id}
                      className="card hover-lift cursor-pointer h-full"
                      onClick={() => navigate(`/blogs/${blogSlug}`)}
                    >
                      <div className="aspect-square overflow-hidden rounded-t-lg">
                        <img
                          src={relatedBlog.image}
                          alt={relatedBlog.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-bold mb-2 text-white line-clamp-2">
                          {relatedBlog.title}
                        </h4>
                        <p className="text-tertiary text-sm line-clamp-2">
                          {relatedBlog.excerpt}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-xl font-bold mb-4 text-white">
              Share this article
            </h3>
            <div className="flex gap-4">
              <button className="p-2 bg-[#1877F2] text-white rounded-full hover:opacity-80 transition-opacity">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </button>
              <button className="p-2 bg-[#1DA1F2] text-white rounded-full hover:opacity-80 transition-opacity">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </button>
              <button className="p-2 bg-[#0A66C2] text-white rounded-full hover:opacity-80 transition-opacity">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </button>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogPost;
