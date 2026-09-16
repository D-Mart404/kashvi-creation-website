import Blog from "../models/Blog.js";

const formatBlog = (blog) => ({
  _id: blog._id,
  title: blog.title,
  summary: blog.summary,
  content: blog.content,
  authorName: blog.authorName,
  createdAt: blog.createdAt,
});

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return res.json({ success: true, blogs: blogs.map(formatBlog) });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to fetch blogs" });
  }
};

export const createBlog = async (req, res) => {
  const { title, summary, content } = req.body;

  if (!title || !summary || !content) {
    return res.status(400).json({ success: false, message: "Title, summary, and content are required" });
  }

  try {
    const blog = await Blog.create({
      title,
      summary,
      content,
      author: req.user._id,
      authorName: req.user.username,
    });

    return res.status(201).json({
      success: true,
      message: "Blog published successfully",
      blog: formatBlog(blog),
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to publish blog" });
  }
};
