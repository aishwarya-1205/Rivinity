import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
    threshold?: number;
}

export const ScrollReveal = ({
    children,
    width = "100%",
    delay = 0,
    duration = 0.5,
    direction = "up",
    className = "",
    threshold = 0.2
}: ScrollRevealProps) => {

    const getDirectionOffset = () => {
        switch (direction) {
            case "up": return { y: 50, x: 0 };
            case "down": return { y: -50, x: 0 };
            case "left": return { x: 50, y: 0 };
            case "right": return { x: -50, y: 0 };
            default: return { y: 50, x: 0 };
        }
    };

    const initial = { opacity: 0, ...getDirectionOffset() };

    return (
        <div style={{ width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={{
                    hidden: initial,
                    visible: { opacity: 1, x: 0, y: 0 }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: threshold }}
                transition={{ duration, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
};
