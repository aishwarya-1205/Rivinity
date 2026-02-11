import React, { useRef } from 'react';
import gsap from 'gsap';

interface MagneticProps {
    children: React.ReactElement;
    strength?: number; // How strong the magnetic pull is (default: 0.5)
    radius?: number; // Range of effect in pixels (default: 100)
}

const Magnetic: React.FC<MagneticProps> = ({ children, strength = 0.5, radius = 100 }) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;

        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();

        // Calculate center of element
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Calculate distance from center
        const x = clientX - centerX;
        const y = clientY - centerY;

        const dist = Math.sqrt(x * x + y * y);

        if (dist < radius) {
            gsap.to(ref.current, {
                x: x * strength,
                y: y * strength,
                duration: 0.5,
                ease: "power2.out"
            });
        } else {
            gsap.to(ref.current, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.3)" });
        }
    };

    const handleMouseLeave = () => {
        if (!ref.current) return;
        gsap.to(ref.current, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.3)" });
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="inline-block" // Ensure it doesn't take full width
        >
            {React.cloneElement(children, {
                // Pass existing props if needed, but wrapper handles events
            })}
        </div>
    );
};

export default Magnetic;
