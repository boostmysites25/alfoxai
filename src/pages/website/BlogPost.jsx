import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Banner from "../../components/website/Banner";
import { getBlogBySlug, getBlogs } from "../../utils/api";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Fetch the specific blog post by slug
  const {
    data: blogData,
    isLoading: blogLoading,
    error: blogError,
  } = useQuery({
    queryKey: ["blog", slug],
    queryFn: () => getBlogBySlug(slug),
    enabled: !!slug,
    retry: 2,
    retryDelay: 1000,
  });

  // Fetch all blogs for related posts
  const { data: blogsData } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
    retry: 2,
    retryDelay: 1000,
  });

  const blog = blogData?.blog;
  const allBlogs = blogsData?.blogs || [];

  // Find related blog posts (same category, excluding current blog)
  const relatedBlogs = blog
    ? allBlogs
        .filter(
          (b) =>
            b._id !== blog._id && b.categoryId?._id === blog.categoryId?._id
        )
        .slice(0, 3)
    : [];

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "No date";

    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      return "Invalid date";
    }
  };

  // Handle blog not found
  if (blogError && blogError.response?.status === 404) {
    return (
      <>
        <Banner page="Blog" />
        <div className="wrapper py-16">
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-white mb-4">
              Blog post not found
            </h3>
            <p className="text-tertiary mb-6">
              The blog post you're looking for doesn't exist.
            </p>
            <button
              onClick={() => navigate("/blogs")}
              className="px-6 py-2 bg-accent2 text-white rounded-lg hover:bg-accent2/80 transition-colors"
            >
              Back to Blogs
            </button>
          </div>
        </div>
      </>
    );
  }

  // Handle other errors
  if (blogError) {
    return (
      <>
        <Banner page="Blog" />
        <div className="wrapper py-16">
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-white mb-4">
              Error loading blog post
            </h3>
            <p className="text-tertiary mb-6">
              {blogError.message ||
                "Please try again later or contact support if the problem persists."}
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-accent2 text-white rounded-lg hover:bg-accent2/80 transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={() => navigate("/blogs")}
                className="px-6 py-2 bg-accent1 text-white rounded-lg hover:bg-accent1/80 transition-colors"
              >
                Back to Blogs
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (blogLoading) {
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
    return null;
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
            Go Back
          </button>
        </div>

        <article className="animate-fade-in">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center text-tertiary mb-6 gap-4">
              <span>{formatDate(blog.publishDate)}</span>
              <span className="hidden md:inline">•</span>
              <span>
                By{" "}
                <span className="text-highlight">
                  {blog.author?.name || blog.authorId?.name || "Unknown"}
                </span>
              </span>
              <span className="hidden md:inline">•</span>
              <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-accent2 rounded-full">
                {blog.categoryId?.name || "Uncategorized"}
              </span>
            </div>
          </div>

          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={blog.imageUrl}
              alt={blog.imageAlt || blog.title}
              className="w-full h-auto"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/800x400?text=No+Image";
              }}
            />
          </div>

          {/* Blog content */}
          <div className="prose prose-lg prose-invert max-w-none mb-12">
            <div className="reset-content" dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>

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
                {relatedBlogs.map((relatedBlog) => (
                  <div
                    key={relatedBlog._id}
                    className="card hover-lift cursor-pointer h-full"
                    onClick={() => navigate(`/blogs/${relatedBlog.slug}`)}
                  >
                    <div className="aspect-square overflow-hidden rounded-t-lg">
                      <img
                        src={relatedBlog.imageUrl}
                        alt={relatedBlog.imageAlt || relatedBlog.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/400x400?text=No+Image";
                        }}
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
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </>
  );
};

export default BlogPost;
