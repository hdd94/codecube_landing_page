interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export function Button({
                           variant = 'primary',
                           size = 'md',
                           children,
                           onClick,
                           className = ''
                       }: ButtonProps) {
    const baseStyles = "rounded-full font-medium shadow-md transition-colors duration-200";
    const variants = {
        primary: "bg-orange-300 text-black hover:bg-orange-400",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
    };
    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-2 text-lg"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}