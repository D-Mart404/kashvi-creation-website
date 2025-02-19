import React, { useState, useRef } from 'react';

import './LoginPage.css';
const Otp = ({ length = 4, onOtpSubmit, username, password, email }) => {
    const [otp, setOtp] = useState(new Array(length).fill(''));
    const inputRefs = useRef([]);
    const [message,setMessage]=useState('');
    const handleChange = (index, event) => {
        const value = event.target.value;
        if (!isNaN(value) && value.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

           
            if (value && index < length - 1) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (index, event) => {
        if (event.key === 'Backspace' && index > 0 && !otp[index]) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = () => {
        const enteredOtp = otp.join('');
        if (enteredOtp.length === length) {
            onOtpSubmit({ username, password, email, otp: enteredOtp });
        } else {
            alert('Please enter complete OTP');
        }
    };

    return (
        <div className="login-page">
          
            <div className="login-container  ">
            <h2 >Enter OTP:</h2>
            <div className='flex w-85 justify-evenly'>
                {otp.map((_, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={otp[index]}
                        onChange={(e) => handleChange(index, e)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        ref={(el) => (inputRefs.current[index] = el)}
                        className="flex justify-evenly h-10 w-1 "
                    />
                ))}
                </div>
                 <button onClick={handleSubmit} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Verify OTP
            </button>
            <p className='login-page-text'>{message}</p>
            </div>
           
        </div>
    );
};

export default Otp;
