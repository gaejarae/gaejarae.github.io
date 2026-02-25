import { Users, Mail, Link as LinkIcon, MapPin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const ProfileSidebar = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="relative group">
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full aspect-square rounded-full bg-[#f6f8fa] border border-[#d0d7de] overflow-hidden shadow-inner"
                >
                    <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=gaejarae&backgroundColor=b6e3f4`}
                        alt="Avatar"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                </motion.div>
                <div className="absolute bottom-6 right-2 w-10 h-10 rounded-full border border-[#d0d7de] bg-white flex items-center justify-center cursor-help hover:bg-[#f6f8fa] transition-colors shadow-sm z-10">
                    <span className="text-lg">✨</span>
                </div>
            </div>

            <div className="mt-4">
                <h1 className="text-2xl font-bold text-[#1f2328] font-heading">Gae Jarae</h1>
                <p className="text-xl text-[#636c76] font-light">gaejarae</p>
            </div>

            <button className="w-full py-1.5 px-4 bg-[#f6f8fa] border border-[#d0d7de] rounded-md text-sm font-semibold hover:bg-[#ebedf0] transition-all mt-2 shadow-sm active:scale-[0.98]">
                Edit profile
            </button>

            <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-sm text-[#636c76] mt-2">
                <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-[#6e7781]" />
                    <span className="font-semibold text-[#1f2328]">1,284</span> <span className="text-xs">followers</span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="text-[#d8dee4]">·</span>
                    <span className="font-semibold text-[#1f2328]">42</span> <span className="text-xs">following</span>
                </div>
            </div>

            <div className="flex flex-col gap-2 mt-4 text-[13px] text-[#1f2328]">
                <div className="flex items-center gap-2 group">
                    <MapPin className="w-4 h-4 text-[#6e7781]" />
                    <span>Seoul, South Korea</span>
                </div>
                <div className="flex items-center gap-2 group">
                    <Mail className="w-4 h-4 text-[#6e7781]" />
                    <a href="mailto:hello@gaejarae.com" className="hover:text-blue-600 transition-colors">hello@gaejarae.com</a>
                </div>
                <div className="flex items-center gap-2 group">
                    <LinkIcon className="w-4 h-4 text-[#6e7781]" />
                    <a href="https://gaejarae.github.io" className="hover:text-blue-600 font-medium transition-colors">gaejarae.github.io</a>
                </div>
                <div className="flex items-center gap-2 group">
                    <Twitter className="w-4 h-4 text-[#6e7781]" />
                    <a href="#" className="hover:text-blue-600 transition-colors">@gaejarae</a>
                </div>
            </div>

            <div className="mt-6 border-t border-[#d8dee4] pt-5">
                <h3 className="text-sm font-semibold mb-4 font-heading text-[#1f2328]">Achievements</h3>
                <div className="flex flex-wrap gap-3">
                    {[
                        { tag: '🏆', label: 'Gold Contributor' },
                        { tag: '🌟', label: 'Star Coder' },
                        { tag: '🚀', label: 'Fast Mover' },
                        { tag: '💻', label: 'Tech Enthusiast' }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5, scale: 1.1 }}
                            title={item.label}
                            className="w-9 h-9 rounded-full border border-[#d0d7de] flex items-center justify-center text-xl bg-white shadow-sm cursor-help hover:border-blue-400 transition-colors"
                        >
                            {item.tag}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfileSidebar;
