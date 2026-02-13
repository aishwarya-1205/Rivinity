import React from 'react';

interface GradientTextProps {
    children: React.ReactNode;
    className?: string;
    colors?: string[];
    animationSpeed?: number;
    showBorder?: boolean;
}

export const GradientText: React.FC<GradientTextProps> = ({
    children,
    className = "",
    colors = ["#3b82f6", "#8b5cf6", "#3b82f6", "#d946ef", "#3b82f6"], // Blue -> Violet -> Blue -> Fuchsia -> Blue
    animationSpeed = 8,
    showBorder = false,
}) => {
    const gradientStyle = {
        backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
        animationDuration: `${animationSpeed}s`,
    };

    return (
        <div className={`relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium transition-shadow duration-500 ${className}`}>
            {showBorder && (
                <div
                    className="absolute inset-0 bg-cover z-0 pointer-events-none animate-gradient"
                    style={{
                        ...gradientStyle,
                        backgroundSize: "300% 100%",
                    }}
                >
                    <div
                        className="absolute inset-0 bg-white dark:bg-slate-950 rounded-[1.25rem] z-[-1]"
                        style={{ margin: "1px" }}
                    ></div>
                </div>
            )}
            <div
                className="inline-block bg-cover bg-clip-text text-transparent animate-gradient"
                style={{
                    ...gradientStyle,
                    backgroundSize: "300% 100%",
                }}
            >
                {children}
            </div>

            <style>{`
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                .animate-gradient {
                    animation: gradient linear infinite;
                }
            `}</style>
        </div>
    );
};
