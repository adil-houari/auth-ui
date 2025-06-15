import React from 'react';
import '../styles/auth.css';

export default function Input({ type, placeholder, value, onChange }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required
        />
    );
}
