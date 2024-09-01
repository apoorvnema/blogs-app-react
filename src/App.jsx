import React, { useContext, useState } from 'react';
import BlogForm from './components/Blog/BlogForm';
import Modal from './components/UI/Modal';
import BlogCard from './components/Blog/BlogCard';
import './App.css';
import Button from './components/UI/Button';
import BlogContext from './store/BlogContext';

const App = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentBlog, setCurrentBlog] = useState(null);
    const { blogs, addBlog, editBlog, deleteBlog } = useContext(BlogContext); // Use context

    const handleAddBlog = () => {
        setCurrentBlog(null);
        setShowModal(true);
    };

    const handleEditBlog = (blog) => {
        setCurrentBlog(blog);
        setShowModal(true);
    };

    const handleDeleteBlog = (blog) => {
        deleteBlog(blog);
    };

    const handleSubmit = (blog) => {
        if (currentBlog) {
            editBlog(currentBlog.dataId, blog);
        } else {
            addBlog(blog);
        }
        setShowModal(false);
    };

    return (
        <div className="app">
            <h1>Blog Website</h1>
            <div><Button onClick={handleAddBlog} className="add-blog-button">Add New Blog</Button></div>
            <div className="blog-list">
                {blogs.map(blog => (
                    <BlogCard key={blog.dataId} blog={blog} onEdit={handleEditBlog} onDelete={handleDeleteBlog}/>
                ))}
            </div>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <BlogForm onSubmit={handleSubmit} onClose={() => setShowModal(false)} blog={currentBlog} />
            </Modal>
        </div>
    );
};

export default App;
