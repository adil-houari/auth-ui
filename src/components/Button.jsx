import React from 'react';
import '../styles/auth.css';

export default function Button({ children, onClick, type = "button" }) {
    return (
        <button type={type} onClick={onClick} className="auth-btn">
            {children}
        </button>
    );
}
