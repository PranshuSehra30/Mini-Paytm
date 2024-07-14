import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import paymentAnimation from '../assets/Animation - 1720788516581.json';

export const LandingPage = () => {
    const navigate = useNavigate();

    const handleSignin = () => {
        navigate('/signin');
    };

    const handleSignup = () => {
        navigate('/signup');
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: paymentAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="relative flex items-center justify-center h-screen bg-blue-500 overflow-hidden">
            <Lottie 
                options={defaultOptions}
                height="100%"
                width="100%"
                style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
            />
            <motion.div
                className="text-center bg-white p-10 rounded-lg shadow-lg z-10"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    className="text-4xl font-bold mb-4"
                    initial={{ opacity: -5 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Welcome to MiniPaytm
                </motion.h1>
                <motion.p
                    className="text-lg mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    Your go-to app for quick and easy money transfers.
                </motion.p>
                <div className="flex space-x-4 justify-center">
                    <motion.button
                        onClick={handleSignin}
                        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Sign In
                    </motion.button>
                    <motion.button
                        onClick={handleSignup}
                        className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Sign Up
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};
