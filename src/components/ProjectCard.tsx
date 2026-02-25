import { ArrowUpRight } from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    image: string;
}

const ProjectCard = ({ title, description, tags, image }: ProjectCardProps) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(event.clientX - centerX);
        y.set(event.clientY - centerY);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative h-80 w-full overflow-hidden rounded-3xl cloudy-glass p-8 transition-all duration-300 hover:shadow-2xl cursor-pointer"
        >
            <div
                className="absolute inset-0 -z-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />

            <div className="flex flex-col h-full justify-between relative z-10">
                <div>
                    <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-bold font-heading text-[#111]">{title}</h3>
                        <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center transform group-hover:rotate-45 transition-transform">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </div>
                    <p className="mt-4 text-sm text-[#555] leading-relaxed max-w-[280px]">
                        {description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-white/50 border border-white text-[10px] font-bold text-[#111] tracking-wider uppercase">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Magnetic Shine Effect */}
            <motion.div
                className="absolute -inset-x-20 -inset-y-20 -z-20 bg-gradient-to-tr from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ x: useTransform(x, (v) => v * 0.5), y: useTransform(y, (v) => v * 0.5) }}
            />
        </motion.div>
    );
};

export default ProjectCard;
