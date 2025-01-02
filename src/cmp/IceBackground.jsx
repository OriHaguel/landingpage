import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SNOWFLAKE_COUNT = 50;

export function IceBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none bg-gradient-to-b from-blue-100 to-white overflow-hidden">
            {[...Array(SNOWFLAKE_COUNT)].map((_, i) => (
                <Snowflake key={i} mousePosition={mousePosition} />
            ))}
        </div>
    );
}

function Snowflake({ mousePosition }) {
    const x = Math.random() * 100;
    const y = Math.random() * 100;

    return (
        <motion.div
            className="absolute w-2 h-2 bg-white rounded-full opacity-70 blur-[1px]"
            style={{
                left: `${x}vw`,
                top: `${y}vh`,
            }}
            animate={{
                x: (mousePosition.x - window.innerWidth / 2) / 50,
                y: (mousePosition.y - window.innerHeight / 2) / 50,
            }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        />
    );
}
