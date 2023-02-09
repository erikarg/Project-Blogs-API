const express = require('express');
const { loginRouter } = require('./router/loginRouter');
const { userRouter } = require('./router/userRouter');
const { categoriesRouter } = require('./router/categoriesRouter');
const { blogPostRouter } = require('./router/blogPostRouter');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoriesRouter);
app.use('/post', blogPostRouter);

module.exports = app;
