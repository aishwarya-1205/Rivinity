import { useState } from "react";
import { motion } from "framer-motion";

interface TrueFocusProps {
    items: { title: string; description: string }[];
}

export const TrueFocus = ({ items }: TrueFocusProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="flex flex-col gap-6">
            {items.map((item, index) => {
                const isHovered = hoveredIndex === index;
                const isDimmed = hoveredIndex !== null && !isHovered;

                return (
                    <motion.div
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`relative cursor-pointer transition-all duration-300 ease-in-out ${isDimmed ? "opacity-30 blur-[2px]" : "opacity-100 blur-0"
                            }`}
                    >
                        <h3 className={`text-2xl font-bold mb-2 ${isHovered ? "text-blue-500" : "text-slate-900 dark:text-white"}`}>
                            {item.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                            {item.description}
                        </p>

                        {isHovered && (
                            <motion.div
                                layoutId="focusLine"
                                className="absolute -left-4 top-0 bottom-0 w-1 bg-blue-500 rounded-full"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                    </motion.div>
                );
            })}
        </div>
    );
};
