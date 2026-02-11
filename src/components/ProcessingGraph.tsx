import { motion } from 'framer-motion';

const ProcessingGraph = () => {
    // Define node positions for a simple neural flow
    const nodes = [
        { id: 1, cx: 50, cy: 150, color: '#3b82f6' }, // Input
        { id: 2, cx: 250, cy: 50, color: '#8b5cf6' }, // Hidden 1
        { id: 3, cx: 250, cy: 150, color: '#8b5cf6' }, // Hidden 2
        { id: 4, cx: 250, cy: 250, color: '#8b5cf6' }, // Hidden 3
        { id: 5, cx: 450, cy: 150, color: '#10b981' }, // Output
    ];

    // Define connections
    const connections = [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 1, to: 4 },
        { from: 2, to: 5 },
        { from: 3, to: 5 },
        { from: 4, to: 5 },
        { from: 2, to: 3 }, // Interlink
        { from: 3, to: 4 }, // Interlink
    ];

    return (
        <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 500 300" className="w-full max-w-[600px] h-auto overflow-visible">
                <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
                    </linearGradient>
                </defs>

                {/* Connections */}
                {connections.map((conn, i) => {
                    const start = nodes.find(n => n.id === conn.from);
                    const end = nodes.find(n => n.id === conn.to);
                    if (!start || !end) return null;

                    return (
                        <g key={i}>
                            {/* Base Line */}
                            <motion.path
                                d={`M${start.cx},${start.cy} L${end.cx},${end.cy}`}
                                stroke="url(#line-gradient)"
                                strokeWidth="2"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1.5, delay: i * 0.1 }}
                            />

                            {/* Moving Data Dot */}
                            <circle r="3" fill="white" filter="url(#glow)">
                                <animateMotion
                                    dur={`${1.5 + Math.random()}s`}
                                    repeatCount="indefinite"
                                    path={`M${start.cx},${start.cy} L${end.cx},${end.cy}`}
                                />
                            </circle>
                        </g>
                    );
                })}

                {/* Nodes */}
                {nodes.map((node, i) => (
                    <motion.g key={node.id}>
                        {/* Pulse Ring */}
                        <motion.circle
                            cx={node.cx}
                            cy={node.cy}
                            r="15"
                            stroke={node.color}
                            strokeWidth="1"
                            fill="none"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1.5, opacity: 0 }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2
                            }}
                        />
                        {/* Core Node */}
                        <motion.circle
                            cx={node.cx}
                            cy={node.cy}
                            r="6"
                            fill={node.color}
                            filter="url(#glow)"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: i * 0.2
                            }}
                        />
                    </motion.g>
                ))}
            </svg>
        </div>
    );
};

export default ProcessingGraph;
