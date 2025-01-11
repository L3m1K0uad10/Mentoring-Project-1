import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, useParams, Navigate} from 'react-router-dom';

import './index.css';
import HomePage from './pages/HomePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import SigningPage from './pages/SigningPage.jsx';
import CreateFruitPage from './pages/CreateFruitPage.jsx';


const slugRegex = /^[a-z0-9-]+$/; // This regular expression defines a pattern that matches a string

function SigningPageWrapper() {
    const { slug } = useParams();

    if (!slugRegex.test(slug) || (slug !== "sign-in" && slug !== "sign-up")) {
        return <Navigate to="/error" replace />;
    }

    return <SigningPage />;
}


const router = createBrowserRouter(
    [
        {
            path : "/",
            element : <HomePage />,
            errorElement : <NotFoundPage />
        },
        {
            path : "/:slug",
            element : <SigningPageWrapper />
        },
        {
            path : "/error",
            element : <NotFoundPage />
        },
        {
            path : "/create",
            element : <CreateFruitPage />
        }
    ]
);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router = {router} />
    </StrictMode>,
)
