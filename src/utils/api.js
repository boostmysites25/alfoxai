import axios from "axios";

const baseUrl = "https://blogplatform-backend-alfoxai.vercel.app/api/blogs";

// Get all published blogs
export const getBlogs = async () => {
  try {
    const response = await axios.get(`${baseUrl}/published`);
    
    // Validate response structure
    if (!response.data || !response.data.success) {
      throw new Error('Invalid response from server');
    }
    
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

// Get blog by slug
export const getBlogBySlug = async (slug) => {
  try {
    const response = await axios.get(`${baseUrl}/slug/${slug}`);
    
    // Validate response structure
    if (!response.data || !response.data.success) {
      throw new Error('Invalid response from server');
    }
    
    return response.data;
  } catch (error) {
    console.error('Error fetching blog by slug:', error);
    throw error;
  }
};
