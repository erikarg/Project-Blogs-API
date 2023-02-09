const { BlogPost, Category, User } = require('../models');
const {
    validateTitle,
    validateContent,
    validateCategoryId,
    validateFields,
} = require('../middlewares/validateData');

const createBlogPost = async ({ title, content, categoryIds }, userId) => {
    const existTitle = validateTitle(title);
    const existContent = validateContent(content);
    const existCategoryId = await validateCategoryId(categoryIds);

    if (existTitle) return existTitle;
    if (existContent) return existContent;
    if (existCategoryId) return existCategoryId;

    const getBlogPost = await BlogPost.create({ title, content, userId });

    return getBlogPost;
};

const getBlogPosts = async () => {
    const blogPosts = await BlogPost.findAll({
        include: [
            {
                model: User,
                as: 'user',
                attributes: { exclude: ['password'] },
            },
            {
                model: Category,
                as: 'categories',
                through: { attributes: [] },
            },
        ],
    });
    return blogPosts;
};

const getBlogPostById = async (id) => {
    const verifyPosts = await BlogPost.findOne({
        where: { id },
        include: [
            { model: User,
                as: 'user',
                attributes: { exclude: ['password'] },
            },
            {
                model: Category,
                as: 'categories',
                through: { attributes: [] },
            },
        ],
    });
    return verifyPosts;
};

const updateBlogPost = async (id, title, content, categoryIds) => {
    const fields = validateFields(title, content, categoryIds);
    if (fields) return fields;
    await BlogPost.update(
        { title, content },
        { where: { id } },
    );
    
    const updatedPost = await getBlogPostById(id);
    return updatedPost;
};

const deleteBlogPost = async (id) => {
    await BlogPost.destroy({ where: { id } });
};

module.exports = {
    createBlogPost,
    getBlogPosts,
    getBlogPostById,
    updateBlogPost,
    deleteBlogPost,
};