import { useScroll, useTransform, motion } from 'framer-motion';

export function ScrollHero3D() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Deep dark background */}
      <div className="absolute inset-0 bg-[#080808]" />

      {/* Animated gradient orbs */}
      <motion.div
        style={{ opacity, scale }}
        className="absolute inset-0"
      >
        {/* Primary crimson orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(196,18,48,0.35) 0%, transparent 70%)',
            animation: 'pulse-slow 4s ease-in-out infinite',
          }}
        />
        {/* Gold accent orb */}
        <div
          className="absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(224,169,109,0.2) 0%, transparent 70%)',
            animation: 'pulse-slow 6s ease-in-out infinite reverse',
          }}
        />
        {/* Blue-crimson blend */}
        <div
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(196,18,48,0.15) 0%, transparent 70%)',
            animation: 'drift 8s ease-in-out infinite',
          }}
        />
      </motion.div>

      {/* Geometric grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-noise" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
    </div>
  );
}
