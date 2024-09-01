import React from 'react';
import './Button.css';

const Button = ({ onClick, children, className }) => {
    return (
        <button className="custom-button" onClick={onClick} style={{backgroundColor:className==="del-button"?"#d11a2a":"none"}}>
            {children}
        </button>
    );
};

export default Button;
