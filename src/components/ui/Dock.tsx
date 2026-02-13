import { MotionValue, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface DockProps {
    children: React.ReactNode;
    className?: string;
}

interface DockIconProps {
    children: React.ReactNode;
    mouseX: MotionValue;
}

export const Dock = ({ children, className = "" }: DockProps) => {
    const mouseX = useMotionValue(Infinity);

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={`mx-auto flex h-16 items-end gap-4 rounded-2xl bg-gray-50/10 px-4 pb-3 backdrop-blur-md border border-white/10 ${className}`}
        >
            {React.Children.map(children, (child) => (
                <DockIcon mouseX={mouseX}>{child}</DockIcon>
            ))}
        </motion.div>
    );
};

const DockIcon = ({ mouseX, children }: DockIconProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.div
            ref={ref}
            style={{ width }}
            className="aspect-square w-10 rounded-full bg-gray-200/50 dark:bg-slate-800/80 flex items-center justify-center hover:bg-blue-500/20 transition-colors border border-white/5"
        >
            {children}
        </motion.div>
    );
};

import React from "react";
