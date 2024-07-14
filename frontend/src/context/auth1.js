import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        } else {
            navigate('/signin'); // Redirect to login page if not authenticated
        }
        setIsLoading(false);
    }, [navigate]);

    return { isAuthenticated, isLoading };
};
