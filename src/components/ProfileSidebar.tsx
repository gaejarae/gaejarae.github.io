import { Users, Mail, Link as LinkIcon, MapPin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const ProfileSidebar = () => {
    return (
        <div className="flex flex-col gap-4 animate-fade">
            <div className="relative group">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full aspect-square rounded-full bg-[#f0f2f5] border border-border-default overflow-hidden relative"
                >
                    <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=gaejarae`}
                        alt="Avatar"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                <div className="absolute bottom-6 right-2 w-10 h-10 rounded-full border border-border-default bg-white flex items-center justify-center cursor-help hover:bg-secondary transition-colors shadow-sm">
                    <span>😊</span>
                </div>
            </div>

            <div className="mt-4">
                <h1 className="text-2xl font-bold text-text-primary">Gae Jarae</h1>
                <p className="text-xl text-text-tertiary">gaejarae</p>
            </div>

            <button className="w-full py-1.5 px-4 bg-secondary border border-border-default rounded-md text-sm font-semibold hover:bg-[#ebedf0] transition-colors mt-2">
                Edit profile
            </button>

            <div className="flex items-center gap-1.5 text-sm text-text-secondary mt-2">
                <Users className="w-4 h-4" />
                <span className="font-semibold text-text-primary">1.2k</span> followers
                <span className="mx-1">·</span>
                <span className="font-semibold text-text-primary">42</span> following
            </div>

            <div className="flex flex-col gap-2 mt-4 text-sm text-text-primary">
                <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-text-tertiary" />
                    <span>Seoul, South Korea</span>
                </div>
                <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-text-tertiary" />
                    <a href="mailto:hello@gaejarae.com" className="hover:text-accent-blue">hello@gaejarae.com</a>
                </div>
                <div className="flex items-center gap-2">
                    <LinkIcon className="w-4 h-4 text-text-tertiary" />
                    <a href="https://gaejarae.github.io" className="hover:text-accent-blue">gaejarae.github.io</a>
                </div>
                <div className="flex items-center gap-2">
                    <Twitter className="w-4 h-4 text-text-tertiary" />
                    <a href="#" className="hover:text-accent-blue">@gaejarae</a>
                </div>
            </div>

            <div className="mt-6 border-t border-muted pt-4">
                <h3 className="text-sm font-semibold mb-3">Achievements</h3>
                <div className="flex gap-2">
                    {['🏆', '🌟', '🚀', '💻'].map((emoji, i) => (
                        <div key={i} className="w-8 h-8 rounded-full border border-border-default flex items-center justify-center text-lg hover:scale-110 transition-transform cursor-help">
                            {emoji}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfileSidebar;
