
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
import DetailPage from './component/DetailPage';
import { Provider } from 'react-redux';

const App = () => {
    return (
        <Provider >
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/item/:id" element={<DetailPage />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;

