import React, { useState, useEffect } from 'react';
import './BlogForm.css'; // Import the CSS file for styling
import Button from '../UI/Button';

const BlogForm = ({ onSubmit, onClose, blog }) => {
    const [title, setTitle] = useState(blog ? blog.title : '');
    const [content, setContent] = useState(blog ? blog.content : '');
    const [imageUrl, setImageUrl] = useState(blog ? blog.imageUrl : '');

    useEffect(() => {
        if (blog) {
            setTitle(blog.title);
            setContent(blog.content);
            setImageUrl(blog.imageUrl);
        }
    }, [blog]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, content, imageUrl });
        onClose();
    };

    return (
        <form onSubmit={handleSubmit} className="blog-form">
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="image-url">Image URL</label>
                <input
                    id="image-url"
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </div>
            <Button type="submit">{blog ? 'Update' : 'Add'} Post</Button>
        </form>
    );
};

export default BlogForm;
