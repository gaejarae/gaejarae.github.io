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
            whileHover={{ y: -4 }}
            className="p-4 bg-white border border-border-default rounded-md hover:shadow-md transition-shadow group cursor-pointer"
        >
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                    <BookText className="w-4 h-4 text-text-tertiary" />
                    <h3 className="text-sm font-semibold text-accent-blue hover:underline">
                        {name}
                    </h3>
                    <span className="text-[10px] px-1.5 py-0.5 border border-border-default rounded-full text-text-tertiary font-medium">
                        Public
                    </span>
                </div>
            </div>

            <p className="text-xs text-text-secondary mt-2 line-clamp-2 min-h-[32px]">
                {description}
            </p>

            <div className="flex items-center gap-4 mt-4 text-xs text-text-tertiary">
                <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: languageColor }} />
                    <span>{language}</span>
                </div>
                <div className="flex items-center gap-1 hover:text-accent-blue transition-colors">
                    <Star className="w-3.5 h-3.5" />
                    <span>{stars}</span>
                </div>
                <div className="flex items-center gap-1 hover:text-accent-blue transition-colors">
                    <GitFork className="w-3.5 h-3.5" />
                    <span>{forks}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default RepoCard;
