import React from 'react';

const Button = ({
    children,
    onClick,
    className = '',
    type = 'button',
    variant = 'primary',
    disabled = false,
}) => {
    // Define styles for different variants
    const variantClasses = {
        primary: 'bg-gradient-to-r from-brandBlue-500 to-brandBlue-600 text-white',
        secondary: 'bg-brandDark-800 dark:bg-brandDark-100 hover:bg-brandDark-700 dark:hover:bg-brandDark-300 text-white dark:text-brandDark-800 dark:hover:bg-brandDark-200',
        outline: 'bg-transparent text-brandBlue-500 border border-brandBlue-500 hover:bg-brandBlue-500 hover:text-white',
        danger: 'bg-red-500 text-white hover:bg-red-600',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`inline-block px-5 py-2 text-sm rounded-md ${variantClasses[variant] || variantClasses.primary
                } ${disabled ? 'opacity-50 cursor-not-allowed' : ''
                } ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
