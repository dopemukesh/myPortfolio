/* eslint-disable react/prop-types */
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
        outline: 'bg-transparent text-brandBlue-500 border-[1.5px] border-brandBlue-500 hover:border-brandDark-500 hover:text-brandDark-800 dark:hover:text-white',
        danger: 'bg-red-500 text-white hover:bg-red-600',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`box-border inline-block px-7 py-3 font-medium rounded-xl active:scale-90 transition-all duration-500 ${variantClasses[variant] || variantClasses.primary
                } ${disabled ? 'opacity-50 cursor-not-allowed' : ''
                } ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
