import React from 'react';
import './BlogCard.css';
import Button from '../UI/Button';

const BlogCard = ({ blog, onEdit, onDelete }) => {
    return (
        <div className="blog-card">
            <img src={blog.imageUrl} alt={blog.title} className="blog-card-image" />
            <div className="blog-card-content">
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
                <Button onClick={() => onEdit(blog)} className="edit-button">Edit</Button>
                <Button onClick={() => onDelete(blog)} className="del-button">Delete</Button>
            </div>
        </div>
    );
};

export default BlogCard;
