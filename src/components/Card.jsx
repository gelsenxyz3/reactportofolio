import { motion } from 'framer-motion';

export default function Card({ title, description, icon: Icon, tags = [] }) {
  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-cardBg/60 border border-purplePrimary/20 p-6 rounded-2xl hover:border-purplePrimary/60 hover:shadow-[0_0_25px_rgba(139,92,246,0.2)] transition duration-300"
    >
      {Icon && <Icon className="text-purpleGlow w-10 h-10 mb-4" />}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm mb-4 leading-relaxed">{description}</p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span key={idx} className="text-xs bg-purplePrimary/10 text-purpleGlow border border-purplePrimary/30 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}