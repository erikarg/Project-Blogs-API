const blogPostService = require('../services/blogPostService');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.payload;

  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const blogPost = await blogPostService.createBlogPost(title, content, categoryIds, id);
  
  if (blogPost.message) return res.status(blogPost.status).json({ message: blogPost.message });
  return res.status(201).json(blogPost);
};

const getPosts = async (_req, res) => {
  const posts = await blogPostService.getBlogPosts();
  return res.status(200).json(posts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await blogPostService.getBlogPostById(id);
  if (!post || post === undefined) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  return res.status(200).json(post);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content, categoryIds } = req.body;
  if (title === '' || content === '' || categoryIds === '') {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const post = await blogPostService.updateBlogPost(id, title, content, categoryIds);
  return res.status(200).json(post);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  await blogPostService.deleteBlogPost(id);
  return res.status(204).json();
};

const searchPost = async (req, res) => {
  const { q } = req.query;
  const allPosts = await blogPostService.getBlogPosts();
  if (!q || q === '') {
    return res.status(200).json(allPosts);
  }
  const post = await allPosts.filter(({
    title, content }) => title.includes(q) || content.includes(q));
    if (!post || post === undefined) {
      return res.status(200).json({ message: 'No posts found' });
    }
  return res.status(200).json(post);
};

module.exports = {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost,
    searchPost,
};
