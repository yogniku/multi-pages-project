// src/components/DetailPage.js
import React from 'react';
import { useSelector } from 'react-redux';

import './DetailPage.css';

const DetailPage = () => {

    const post = useSelector((state) => state.posts.posts.find((post) => post.id === parseInt(id)));

    if (!post) return <div>Post not found</div>;

    return (
        <div className="detail-page">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <p><strong>User ID:</strong> {post.userId}</p>
        </div>
    );
};

export default DetailPage;
