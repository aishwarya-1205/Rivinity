import React from 'react';

interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
    text,
    disabled = false,
    speed = 5,
    className = "",
}) => {

    return (
        <div
            className={`relative inline-block ${className}`}
        >
            {/* Base Text - Always Visible */}
            <span className="relative z-10 block">{text}</span>

            {/* Shine Overlay */}
            {!disabled && (
                <div
                    className="absolute inset-0 z-20 pointer-events-none select-none text-transparent"
                    style={{
                        backgroundImage: 'linear-gradient(120deg, transparent 40%, rgba(255, 255, 255, 0.8) 50%, transparent 60%)',
                        backgroundSize: '200% 100%',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        animation: `shine ${speed}s linear infinite`
                    }}
                    aria-hidden="true"
                >
                    {text}
                </div>
            )}

            <style>{`
        @keyframes shine {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
        </div>
    );
};
