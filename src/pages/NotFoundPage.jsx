import React from "react";
import { Link } from "react-router-dom";

import './styles/NotFoundPage.css';

function NotFoundPage() {

    return (
        <div className = "not-found-page-container">
            <h1>404 Not Found </h1>
            <div>
                <span>try the following links:</span>
            </div>
            <Link to = "/">Home</Link>
        </div>
    )
}

export default NotFoundPage;