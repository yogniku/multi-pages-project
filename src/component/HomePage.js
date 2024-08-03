// src/components/HomePage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
   

  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="home-page">
            <h1>Posts</h1>
            
        
        </div>
    );
};

export default HomePage;
