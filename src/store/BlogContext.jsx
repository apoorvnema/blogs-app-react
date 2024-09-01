import React, { createContext, useState, useEffect } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);
    const crudCrudBaseURL = 'https://testtestapi.vercel.app/909c972c1f1d43d894dcda388b5ca679/blogs';

    useEffect(() => {
        fetchBlogs();
    }, [crudCrudBaseURL]);

    const fetchBlogs = async () => {
        try {
            const response = await fetch(crudCrudBaseURL);
            if (!response.ok) {
                throw new Error('Failed to fetch blogs.');
            }
            const data = await response.json();
            setBlogs(data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    const addBlog = async (blog) => {
        try {
            const response = await fetch(crudCrudBaseURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(blog),
            });
            if (!response.ok) {
                throw new Error('Failed to add blog.');
            }
            const newBlog = await response.json();
            setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
        } catch (error) {
            console.error('Error adding blog:', error);
        }
    };

    const editBlog = async (blogId, updatedBlog) => {
        try {
            const response = await fetch(`${crudCrudBaseURL}/${blogId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedBlog),
            });
            if (!response.ok) {
                throw new Error('Failed to update blog.');
            }
            const updated = await response.json();
            setBlogs((prevBlogs) =>
                prevBlogs.map((blog) =>
                    blog.dataId === blogId ? updated : blog
                )
            );
        } catch (error) {
            console.error('Error updating blog:', error);
        }
    };

    const deleteBlog = async (blog) => {
        try {
            const response = await fetch(`${crudCrudBaseURL}/${blog.dataId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete blog.');
            }
            setBlogs((prevBlogs) => prevBlogs.filter((data) => blog.dataId !== data.dataId));
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    return (
        <BlogContext.Provider value={{ blogs, addBlog, editBlog, deleteBlog }}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;
