const { getBlog, postBlog, deleteBlog, putBlog } = require('../Controllers/blogController');

const  route = require('express').Router();

route.get('/', getBlog);
route.post('/', postBlog);
route.put('/:id', putBlog);
route.delete('/:id', deleteBlog);

module.exports = route