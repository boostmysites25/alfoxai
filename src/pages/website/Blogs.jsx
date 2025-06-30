import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/website/Banner";
import { blogPosts, categories } from "../../data/blogs";

const Blogs = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(false);

  const filteredBlogs =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((blog) => blog.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setIsLoading(true);
    setSelectedCategory(category);

    // Simulate loading for smoother transitions
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  const handleBlogSelect = (blog) => {
    // Navigate to the blog post page using the blog ID as the slug
    navigate(`/blogs/${blog.id}`);
  };

  return (
    <>
      {/* Banner Section */}
      <Banner page="Our Blogs" />

      <div className="wrapper py-16">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="inline-flex bg-accent1 rounded-full p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-accent2 text-white shadow-glow"
                    : "text-tertiary hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <div
                key={blog.id}
                className="group relative"
                data-aos="fade-up"
                data-aos-delay={(index % 6) * 100}
              >
                {/* Gradient border effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-white/10 to-white/20 rounded-lg blur-[1px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Card content */}
                <div
                  className="card hover-lift relative h-full flex flex-col cursor-pointer"
                  onClick={() => handleBlogSelect(blog)}
                >
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-sm text-white bg-accent2 rounded-full">
                        {blog.category}
                      </span>
                    </div>
                    <h3 className="text-xl text-white font-bold mb-3 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-tertiary mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-sm text-tertiary">{blog.date}</span>
                      <span className="text-sm text-tertiary">
                        By {blog.author}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results Message */}
        {filteredBlogs.length === 0 && !isLoading && (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-white">
              No articles found for this category.
            </h3>
            <p className="mt-2 text-tertiary">
              Please try another category or check back later.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Blogs;
