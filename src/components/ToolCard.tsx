
import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface ToolCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    color: string;
    image?: string;
}

const ToolCard = ({ icon: Icon, title, description, color, image }: ToolCardProps) => {
    return (
        <div
            className="group relative w-72 h-48 p-6 rounded-2xl glass-card mx-4 flex-shrink-0 cursor-pointer overflow-hidden transition-all duration-500 hover:scale-105"
            style={{ '--card-color': color } as React.CSSProperties}
        >
            {/* Hover Image Background */}
            {image && (
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                />
            )}

            {/* Hover Gradient Background */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none z-0"
                style={{ background: color }}
            />

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                    <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300"
                        style={{ backgroundColor: `${color}20`, color: color }}
                    >
                        <Icon size={20} />
                    </div>
                    <h3 className="font-display font-bold text-lg text-slate-800 mb-1 group-hover:text-primary-blue transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-2">
                        {description}
                    </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 group-hover:text-slate-600 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span> Active
                </div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-20 pointer-events-none" style={{ backgroundColor: color }}></div>
        </div>
    );
};

export default React.memo(ToolCard);
