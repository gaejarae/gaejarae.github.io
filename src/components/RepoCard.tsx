import { Star, GitFork, BookText } from 'lucide-react';
import { motion } from 'framer-motion';

interface RepoCardProps {
    name: string;
    description: string;
    language: string;
    languageColor: string;
    stars: number;
    forks: number;
}

const RepoCard = ({ name, description, language, languageColor, stars, forks }: RepoCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -4, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)' }}
            className="p-5 bg-white border border-[#d0d7de] rounded-lg hover:border-blue-300 transition-all group cursor-pointer flex flex-col justify-between h-full"
        >
            <div>
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                        <BookText className="w-4 h-4 text-[#636c76]" />
                        <h3 className="text-sm font-bold text-[#0969da] hover:underline whitespace-nowrap overflow-hidden text-ellipsis max-w-[140px] md:max-w-full">
                            {name}
                        </h3>
                        <span className="text-[10px] px-2 py-0.5 border border-[#d0d7de] rounded-full text-[#636c76] font-medium tracking-tight">
                            Public
                        </span>
                    </div>
                </div>

                <p className="text-[12px] text-[#636c76] mt-3 leading-relaxed line-clamp-2">
                    {description}
                </p>
            </div>

            <div className="flex items-center gap-4 mt-6 text-[12px] text-[#636c76]">
                <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: languageColor }} />
                    <span>{language}</span>
                </div>
                <div className="flex items-center gap-1 hover:text-[#0969da] transition-colors">
                    <Star className="w-3.5 h-3.5" />
                    <span>{stars}</span>
                </div>
                <div className="flex items-center gap-1 hover:text-[#0969da] transition-colors">
                    <GitFork className="w-3.5 h-3.5" />
                    <span>{forks}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default RepoCard;
