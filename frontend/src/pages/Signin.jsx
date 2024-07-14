import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BottomWarning } from '../components/BottomWarning';
import { Button } from '../components/Button';
import { Heading } from '../components/Heading';
import { InputBox } from '../components/InputBox';
import { SubHeading } from '../components/SubHeading';

export const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/v1/user/signin', {
                username: email,
                password
            });

            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', email); // Store the username
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Error while logging in');
        }
    };

    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign in"} />
                    <SubHeading label={"Enter your credentials to access your account"} />
                    <InputBox
                        placeholder="Test@gmail.com"
                        label={"Email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputBox
                        placeholder="test@123456"
                        label={"Password"}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <div className="text-red-500 mt-2">{error}</div>}
                    <div className="pt-4">
                        <Button label={"Sign in"} onClick={handleSignin} />
                    </div>
                    <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
                </div>
            </div>
        </div>
    );
};
