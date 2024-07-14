import { useEffect, useState } from "react";
import axios from "axios";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import { useAuth } from '../context/auth1';
import Lottie from 'react-lottie';
import paymentAnimation from '../assets/Animation - 1720789159710.json'; // Ensure this path is correct
import { motion } from 'framer-motion';

export const Dashboard = () => {
    const isAuthenticated = useAuth();
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                });
                setBalance(response.data.balance);
            } catch (error) {
                console.error("Error fetching balance:", error);
            }
        };

        if (isAuthenticated) {
            fetchBalance();
        }
    }, [isAuthenticated]);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: paymentAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    if (!isAuthenticated) {
        return null; // Or a loading spinner
    }

    return (
        <div className="relative flex items-center justify-center h-screen bg-blue-500 overflow-hidden">
            <Lottie 
                options={defaultOptions}
                height="100%"
                width="50%"
                style={{ position: 'relative', top: 0, left: 0, zIndex: 1 }}
            />
            <motion.div className="w-full z-10">
                <Appbar />
                <div className="m-8">
                    <Balance value={balance} />
                    <Users />
                </div>
            </motion.div>
        </div>
    );
};
