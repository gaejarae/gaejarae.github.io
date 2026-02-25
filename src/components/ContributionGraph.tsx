import { motion } from 'framer-motion';

const ContributionGraph = () => {
    // Mock data for contribution grid
    const levels = [0, 1, 2, 3, 4];
    const grid = Array.from({ length: 52 * 7 }, () => levels[Math.floor(Math.random() ** 2 * 5)]);

    return (
        <div className="mt-8">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium">1,432 contributions in the last year</h3>
            </div>

            <div className="p-4 border border-border-default rounded-md bg-white overflow-hidden">
                <div className="flex gap-1 overflow-x-auto pb-2 scrollbar-hide">
                    {Array.from({ length: 52 }).map((_, weekIndex) => (
                        <div key={weekIndex} className="flex flex-col gap-1 flex-shrink-0">
                            {Array.from({ length: 7 }).map((_, dayIndex) => {
                                const level = grid[weekIndex * 7 + dayIndex];
                                const colors = [
                                    'var(--commit-0)',
                                    'var(--commit-1)',
                                    'var(--commit-2)',
                                    'var(--commit-3)',
                                    'var(--commit-4)'
                                ];

                                return (
                                    <motion.div
                                        key={dayIndex}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: (weekIndex * 7 + dayIndex) * 0.001 }}
                                        className="w-[10px] h-[10px] rounded-[2px]"
                                        style={{ backgroundColor: colors[level] }}
                                        whileHover={{ scale: 1.3, zIndex: 10 }}
                                    />
                                );
                            })}
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-between mt-4 text-[10px] text-text-tertiary">
                    <a href="#" className="hover:text-accent-blue">Learn how we count contributions</a>
                    <div className="flex items-center gap-1">
                        <span>Less</span>
                        {levels.map(l => (
                            <div
                                key={l}
                                className="w-[10px] h-[10px] rounded-[2px]"
                                style={{ backgroundColor: `var(--commit-${l})` }}
                            />
                        ))}
                        <span>More</span>
                    </div>
                </div>
            </div>

            <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
        </div>
    );
};

export default ContributionGraph;
