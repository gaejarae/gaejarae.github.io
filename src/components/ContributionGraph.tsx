import { motion } from 'framer-motion';

const ContributionGraph = () => {
    const levels = [0, 1, 2, 3, 4];
    // Seed random but stay consistent for this render
    const grid = Array.from({ length: 53 * 7 }, (_, i) => {
        const noise = Math.sin(i * 0.1) * Math.cos(i * 0.2);
        if (noise > 0.8) return 4;
        if (noise > 0.5) return 3;
        if (noise > 0.2) return 2;
        if (noise > -0.2) return 1;
        return 0;
    });

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (
        <div className="mt-10">
            <div className="flex items-center justify-between mb-3 px-1">
                <h3 className="text-[13px] font-medium text-[#1f2328]">1,432 contributions in the last year</h3>
            </div>

            <div className="p-5 border border-[#d0d7de] rounded-xl bg-white shadow-sm overflow-hidden">
                <div className="relative group">
                    <div className="flex gap-1.5 overflow-x-auto pb-4 scrollbar-hide">
                        <div className="flex flex-col justify-around text-[10px] text-[#6e7781] pr-2 pt-4">
                            <span>Mon</span>
                            <span>Wed</span>
                            <span>Fri</span>
                        </div>
                        {Array.from({ length: 53 }).map((_, weekIndex) => (
                            <div key={weekIndex} className="flex flex-col gap-1.5 flex-shrink-0">
                                {Array.from({ length: 7 }).map((_, dayIndex) => {
                                    const level = grid[weekIndex * 7 + dayIndex];
                                    const colors = [
                                        '#ebedf0',
                                        '#9be9a8',
                                        '#40c463',
                                        '#30a14e',
                                        '#216e39'
                                    ];

                                    return (
                                        <motion.div
                                            key={dayIndex}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: (weekIndex * 7 + dayIndex) * 0.001 }}
                                            className="w-[11px] h-[11px] rounded-[2px] transition-colors duration-300"
                                            style={{ backgroundColor: colors[level] }}
                                            whileHover={{ scale: 1.4, zIndex: 10, outline: '2px solid rgba(0,0,0,0.1)' }}
                                        />
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between mt-4 text-[11px] text-[#6e7781] px-1 pt-2 border-t border-gray-50">
                    <a href="#" className="hover:text-blue-600 transition-colors">Learn how we count contributions</a>
                    <div className="flex items-center gap-1.5">
                        <span>Less</span>
                        {levels.map(l => (
                            <div
                                key={l}
                                className="w-[11px] h-[11px] rounded-[2px]"
                                style={{
                                    backgroundColor: [
                                        '#ebedf0',
                                        '#9be9a8',
                                        '#40c463',
                                        '#30a14e',
                                        '#216e39'
                                    ][l]
                                }}
                            />
                        ))}
                        <span>More</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContributionGraph;
