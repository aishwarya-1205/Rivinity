import { motion } from 'framer-motion';

const NeuralNetworkVisualization = () => {
    // Generate random nodes for the network
    const nodes = Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 35; // reduced radius to fit viewBox
        return {
            x: 50 + Math.cos(angle) * radius,
            y: 50 + Math.sin(angle) * radius,
            delay: i * 0.1,
        };
    });

    const connections = nodes.map((node, i) => {
        const nextNode = nodes[(i + 1) % nodes.length];
        const centerNode = { x: 50, y: 50 };
        return [
            { start: node, end: nextNode }, // Perimeter connections
            { start: node, end: centerNode } // Center connections
        ];
    }).flat();

    return (
        <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl animate-pulse-slow"></div>

            <svg className="w-full h-full max-w-[500px]" viewBox="0 0 100 100">
                {/* Rotating Outer Rings */}
                <motion.circle
                    cx="50"
                    cy="50"
                    r="48" // Slightly larger than nodes
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.2"
                    strokeDasharray="4 4"
                    className="text-slate-300 dark:text-slate-700"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.1"
                    strokeDasharray="2 2"
                    className="text-slate-300 dark:text-slate-700 opacity-50"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                />

                {/* Connections */}
                {connections.map((line, i) => (
                    <motion.line
                        key={`line-${i}`}
                        x1={line.start.x}
                        y1={line.start.y}
                        x2={line.end.x}
                        y2={line.end.y}
                        stroke="url(#gradient)"
                        strokeWidth="0.3"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.6 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1.5,
                            delay: i * 0.05,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                {/* Nodes */}
                {nodes.map((node, i) => (
                    <motion.circle
                        key={`node-${i}`}
                        cx={node.x}
                        cy={node.y}
                        r="1.5"
                        className="fill-blue-500 dark:fill-blue-400"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 + (i * 0.1), duration: 0.5 }}
                    >
                        <animate
                            attributeName="opacity"
                            values="0.5;1;0.5"
                            dur={`${2 + Math.random()}s`}
                            repeatCount="indefinite"
                        />
                    </motion.circle>
                ))}

                {/* Center Core */}
                <motion.circle
                    cx="50"
                    cy="50"
                    r="4"
                    className="fill-violet-500 dark:fill-violet-400"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                />
                {/* Gradient Definition */}
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default NeuralNetworkVisualization;
