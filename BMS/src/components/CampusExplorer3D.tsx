import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, ChevronRight, ExternalLink } from 'lucide-react';

interface Zone {
  id: string;
  name: string;
  label: string;
  image: string;
  color: string;
  description: string;
  details: string[];
  coords: { top: string; left: string };
}

const CAMPUS_ZONES: Zone[] = [
  {
    id: 'main',
    name: 'Main Building',
    label: 'Academic Hub',
    image: '/bmsit1.jpg',
    color: '#C41230',
    description: 'The iconic BMSIT&M main building — home to the administrative offices, principal\'s office, and central academic departments.',
    details: ['NAAC A Grade Institution', 'VTU Autonomous', 'Est. in 2002', 'NBA Accredited Depts'],
    coords: { top: '35%', left: '48%' },
  },
  {
    id: 'campus',
    name: 'Green Campus',
    label: '25-Acre Eco Zone',
    image: '/bmsit3.jpg',
    color: '#3FB06A',
    description: 'Certified "Best Green Campus" by AICTE. Over 3,000 trees and 1,500 plant species across 25 lush acres in Yelahanka.',
    details: ['3,000+ Trees', 'AICTE Green Award', 'Eco Certified', 'Rainwater Harvesting'],
    coords: { top: '58%', left: '28%' },
  },
  {
    id: 'labs',
    name: 'Innovation Labs',
    label: 'R&D Centres',
    image: '/bmsit4.jpg',
    color: '#2D6FC4',
    description: 'State-of-the-art research centers including the Kevin Ashton GPU Lab, Thin Film Lab, and Computational Neuroscience Lab.',
    details: ['Kevin Ashton GPU Lab', 'Thin Film Lab', 'AI/ML Research Centre', 'VTU Research Centre'],
    coords: { top: '30%', left: '68%' },
  },
  {
    id: 'placements',
    name: 'Placement Cell',
    label: 'Career Centre',
    image: '/bmsit6.jpg',
    color: '#E0A96D',
    description: 'The Training & Placement Cell with 80%+ placement rate. Recruiters include Amazon, Deloitte, Bosch, SAP, HCL, Wipro, TCS, and more.',
    details: ['80%+ Placement Rate', '₹42 LPA Highest Offer', '200+ Companies', 'Industry Tie-ups'],
    coords: { top: '62%', left: '65%' },
  },
  {
    id: 'hostel',
    name: 'Hostel',
    label: 'Residential Block',
    image: '/bmsit15.jpg',
    color: '#9B59B6',
    description: 'On-campus hostel for 500 male students with fully furnished double-occupancy rooms, mess, 24/7 security, and Wi-Fi.',
    details: ['500 Beds (Men)', 'Off-campus for Women', 'CCTV & Security', 'Wi-Fi Enabled'],
    coords: { top: '72%', left: '48%' },
  },
  {
    id: 'sports',
    name: 'Sports Complex',
    label: 'Athletics & Wellness',
    image: '/bmsit11.jpg',
    color: '#E67E22',
    description: 'Multipurpose playfield, modern gym, basketball, tennis, badminton courts, and a dedicated PE department managing all athletic events.',
    details: ['Basketball Court', 'Tennis Courts', 'Gym & Fitness Centre', 'Inter-College Events'],
    coords: { top: '48%', left: '18%' },
  },
];

export function CampusExplorer3D() {
  const [activeZone, setActiveZone] = useState<Zone | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-display text-white mb-2">
          🗺️ 3D Campus Explorer
        </h2>
        <p className="text-bms-muted font-sans text-base">
          Explore BMSIT&M's campus interactively — click any zone to discover what's inside.
          <a
            href="https://bmsit.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1 text-bms-crimson hover:text-bms-warmGold transition-colors text-sm"
          >
            Visit official site <ExternalLink size={12} />
          </a>
        </p>
      </div>

      {/* Campus Map with 3D Perspective */}
      <div className="relative w-full" style={{ perspective: '1200px' }}>
        <motion.div
          className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          style={{ transformStyle: 'preserve-3d' }}
          whileHover={{ rotateX: 3, rotateY: -2 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          {/* Campus aerial base image */}
          <div className="relative w-full" style={{ height: 'clamp(300px, 50vw, 560px)' }}>
            <img
              src="/bmsit3.jpg"
              alt="BMSIT Campus Aerial"
              className="w-full h-full object-cover opacity-40"
            />
            {/* Dark overlay with grid */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(196,18,48,0.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(196,18,48,0.5) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
              }}
            />

            {/* Campus label */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-bms-crimson animate-pulse" />
              <span className="text-xs text-bms-warmGold font-bold uppercase tracking-widest font-sans">
                BMSIT&M · Yelahanka, Bangalore
              </span>
            </div>

            {/* Zone Markers */}
            {CAMPUS_ZONES.map(zone => (
              <motion.button
                key={zone.id}
                onClick={() => setActiveZone(zone)}
                onMouseEnter={() => setHoveredId(zone.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="absolute flex flex-col items-center gap-1 group"
                style={{ top: zone.coords.top, left: zone.coords.left, transform: 'translate(-50%, -50%)' }}
                whileHover={{ scale: 1.2, zIndex: 10 }}
                whileTap={{ scale: 0.9 }}
                animate={activeZone?.id === zone.id ? { scale: 1.3 } : { scale: 1 }}
              >
                {/* Ripple rings */}
                <span className="absolute w-12 h-12 rounded-full border opacity-30 animate-ping"
                  style={{ borderColor: zone.color }} />
                <span className="absolute w-8 h-8 rounded-full border opacity-50 animate-ping"
                  style={{ borderColor: zone.color, animationDelay: '0.3s' }} />

                {/* Pin */}
                <div
                  className="relative w-9 h-9 rounded-full border-2 flex items-center justify-center shadow-lg z-10 transition-all duration-300"
                  style={{
                    backgroundColor: `${zone.color}22`,
                    borderColor: zone.color,
                    boxShadow: hoveredId === zone.id || activeZone?.id === zone.id
                      ? `0 0 20px ${zone.color}60`
                      : `0 0 8px ${zone.color}40`,
                  }}
                >
                  <MapPin size={16} style={{ color: zone.color }} />
                </div>

                {/* Tooltip */}
                <AnimatePresence>
                  {(hoveredId === zone.id || activeZone?.id === zone.id) && (
                    <motion.div
                      initial={{ opacity: 0, y: 5, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.9 }}
                      className="absolute bottom-full mb-2 px-2 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider whitespace-nowrap z-20 font-sans"
                      style={{ backgroundColor: zone.color, color: '#fff' }}
                    >
                      {zone.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Zone Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
        {CAMPUS_ZONES.map((zone, i) => (
          <motion.button
            key={zone.id}
            onClick={() => setActiveZone(zone)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className={`relative overflow-hidden rounded-xl p-0 border text-left group transition-all ${
              activeZone?.id === zone.id ? 'ring-2' : 'border-white/5 hover:border-white/20'
            }`}
            style={{
              borderColor: activeZone?.id === zone.id ? zone.color : undefined,
              outline: activeZone?.id === zone.id ? `2px solid ${zone.color}` : undefined,
              outlineOffset: '1px',
            }}
          >
            <div className="relative h-28">
              <img src={zone.image} alt={zone.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ backgroundColor: zone.color }}
              />
              <div className="absolute bottom-2 left-3 right-3">
                <p className="text-white text-xs font-bold font-sans leading-tight">{zone.name}</p>
                <p className="text-[10px] font-sans mt-0.5" style={{ color: zone.color }}>{zone.label}</p>
              </div>
              <ChevronRight
                size={14}
                className="absolute top-2 right-2 text-white/50 group-hover:text-white transition-colors"
              />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Zone Detail Panel */}
      <AnimatePresence>
        {activeZone && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-6 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <div className="relative h-52 md:h-72">
              <img
                src={activeZone.image}
                alt={activeZone.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
              <div
                className="absolute top-0 left-0 bottom-0 w-1"
                style={{ backgroundColor: activeZone.color }}
              />
              <button
                onClick={() => setActiveZone(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              >
                <X size={14} />
              </button>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span
                  className="text-xs font-bold uppercase tracking-widest font-sans mb-1"
                  style={{ color: activeZone.color }}
                >
                  {activeZone.label}
                </span>
                <h3 className="text-2xl md:text-3xl font-display text-white mb-3">{activeZone.name}</h3>
                <p className="text-bms-cream/80 text-sm font-sans leading-relaxed max-w-lg">
                  {activeZone.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {activeZone.details.map(d => (
                    <span
                      key={d}
                      className="text-xs px-2.5 py-1 rounded-full font-sans font-bold"
                      style={{ backgroundColor: `${activeZone.color}25`, color: activeZone.color, border: `1px solid ${activeZone.color}40` }}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!activeZone && (
        <p className="text-center text-bms-muted text-sm mt-4 font-sans animate-pulse">
          ↑ Click a marker or card to explore that zone
        </p>
      )}
    </div>
  );
}
