import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Appbar = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    return (
        <div className="shadow h-14 flex justify-between">
            <div className="flex flex-col justify-center h-full ml-4">
                PayTM Dashboard - {username}
            </div>
            <div className="flex">
                <div className="flex flex-col justify-center h-full mr-4">
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600"
                    >
                        Logout
                    </button>
                </div>
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        HEY
                    </div>
                </div>
            </div>
        </div>
    );
};
