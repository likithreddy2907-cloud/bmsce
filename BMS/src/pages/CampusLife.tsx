import { Leaf, Users, Home, Trophy, Calendar, MapPin, Clock } from 'lucide-react';
import { AnimatedContainer } from '../components/AnimatedContainer';
import { KineticText } from '../components/KineticText';
import { motion } from 'framer-motion';

export function CampusLife() {
  const events = [
    {
      date: "OCT 15",
      title: "TechVista 2026: Annual Symposium",
      time: "09:00 AM - 05:00 PM",
      location: "Main Auditorium",
      type: "Academic"
    },
    {
      date: "OCT 22",
      title: "OIKOS Eco-Drive & Hackathon",
      time: "10:00 AM - 04:00 PM",
      location: "Green Campus Grounds",
      type: "Extracurricular"
    },
    {
      date: "NOV 05",
      title: "Inter-College Sports Meet",
      time: "08:00 AM - 06:00 PM",
      location: "Sports Complex",
      type: "Sports"
    },
    {
      date: "NOV 12",
      title: "Alumni Networking Mixer",
      time: "06:00 PM - 09:00 PM",
      location: "Innovation Hub",
      type: "Networking"
    }
  ];

  const allCampusImages = [
    { src: '/bmsit3.jpg', alt: 'BMSIT Campus View' },
    { src: '/bmsit4.jpg', alt: 'BMSIT Academic Block' },
    { src: '/bmsit5.jpg', alt: 'BMSIT Campus Grounds' },
    { src: '/bmsit6.jpg', alt: 'BMSIT Infrastructure' },
    { src: '/bmsit7.jpg', alt: 'BMSIT Facilities' },
    { src: '/bmsit10.jpg', alt: 'BMSIT Campus Life' },
    { src: '/bmsit11.jpg', alt: 'BMSIT Sports Complex' },
    { src: '/bmsit12.jpg', alt: 'BMSIT Green Campus' },
    { src: '/bmsit13.jpg', alt: 'BMSIT Student Activities' },
    { src: '/bmsit14.jpg', alt: 'BMSIT Hostel' },
    { src: '/bmsit15.jpg', alt: 'BMSIT Hostel Facilities' },
  ];

  const features = [
    {
      icon: Leaf,
      title: "Eco-Friendly Infrastructure",
      desc: "The 18.5-acre campus is a certified 'Best Green Campus' by AICTE, featuring over 3,000 trees and 1,500 plant varieties, creating a serene learning environment away from city noise.",
      image: '/bmsit12.jpg'
    },
    {
      icon: Users,
      title: "Diverse Club Culture",
      desc: "Students can engage with over 25 clubs, including the OIKOS Eco-Club, which is the first in the world to sign an MoU with a university (NLSIU), and specialized groups like Quizcraft and the Aero Club.",
      image: '/bmsit13.jpg'
    },
    {
      icon: Home,
      title: "Residential Facilities",
      desc: "The campus provides fully furnished double-occupancy hostels for 500 men, while women are accommodated in off-campus housing with dedicated college transportation and 24/7 security.",
      images: ['/bmsit14.jpg', '/bmsit15.jpg']
    },
    {
      icon: Trophy,
      title: "Sports and Wellness",
      desc: "Facilities include a multipurpose playfield, a well-equipped gym, and courts for basketball, tennis, and badminton, all managed by a dedicated physical education department.",
      image: '/bmsit11.jpg'
    }
  ] as const;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 overflow-hidden">
      <KineticText text="Campus Life" className="text-4xl md:text-6xl font-display text-white mb-6" />
      <p className="text-bms-muted text-lg mb-12 font-sans max-w-2xl">
        Discover life on our 25-acre green campus in Yelahanka, Bangalore — a place where every corner inspires.
      </p>

      {/* Full-width campus hero image */}
      <AnimatedContainer direction="none" delay={0.1} className="mb-6">
        <div className="w-full h-72 md:h-[480px] rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl">
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.8 }}
            src="/bmsit1.jpg"
            alt="BMS Institute of Technology & Management — Main Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <p className="text-white font-display text-xl md:text-3xl drop-shadow-lg">
              BMS Institute of Technology & Management
            </p>
            <p className="text-bms-warmGold text-sm mt-1 flex items-center gap-1 font-sans">
              <MapPin size={13} /> Yelahanka, Bangalore
            </p>
          </div>
        </div>
      </AnimatedContainer>

      {/* Campus Photo Mosaic */}
      <AnimatedContainer direction="up" delay={0.2} className="mb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {allCampusImages.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              className="overflow-hidden rounded-xl border border-white/5 aspect-video"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </AnimatedContainer>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-24">
        {features.map((feature, i) => (
          <AnimatedContainer key={i} direction="up" delay={i * 0.15}>
            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              className="h-full bg-bms-surface/80 backdrop-blur-md p-8 rounded-2xl border border-white/5 shadow-xl flex flex-col gap-5 group transition-all"
            >
              <div className="w-14 h-14 bg-bms-nearBlack rounded-xl flex items-center justify-center border border-white/10 group-hover:border-bms-warmGold/50 transition-colors shadow-inner">
                <feature.icon className="text-bms-warmGold group-hover:scale-110 transition-transform" size={28} />
              </div>
              <h3 className="text-2xl font-display text-white mt-2 leading-tight">{feature.title}</h3>
              <p className="text-bms-muted font-sans leading-relaxed text-base flex-grow">{feature.desc}</p>

              {'image' in feature && feature.image && (
                <div className="mt-2 overflow-hidden rounded-xl border border-white/5">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-52 object-cover"
                  />
                </div>
              )}

              {'images' in feature && feature.images && (
                <div className="mt-2 grid grid-cols-2 gap-3">
                  {feature.images.map((img, idx) => (
                    <div key={idx} className="overflow-hidden rounded-xl border border-white/5">
                      <motion.img
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.6 }}
                        src={img}
                        alt={`${feature.title} ${idx + 1}`}
                        className="w-full h-40 object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatedContainer>
        ))}
      </div>

      {/* Upcoming Events */}
      <div className="relative">
        <KineticText text="Upcoming Events" className="text-3xl md:text-5xl font-display text-white mb-10" />
        <div className="space-y-4">
          {events.map((evt, i) => (
            <AnimatedContainer key={i} direction="left" delay={i * 0.1}>
              <motion.div
                whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.05)' }}
                className="group flex flex-col md:flex-row items-start md:items-center gap-6 p-6 md:p-8 bg-bms-surface/50 border border-white/5 rounded-2xl cursor-pointer transition-colors relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-bms-crimson transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />

                <div className="shrink-0 text-center w-20 md:w-24">
                  <span className="block text-sm text-bms-muted uppercase font-bold tracking-widest">{evt.date.split(' ')[0]}</span>
                  <span className="block text-3xl md:text-4xl font-display text-bms-warmGold">{evt.date.split(' ')[1]}</span>
                </div>

                <div className="flex-1 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 bg-bms-crimson/20 text-bms-crimson rounded">
                      {evt.type}
                    </span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-display text-white mb-3 group-hover:text-bms-warmGold transition-colors">{evt.title}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-bms-muted">
                    <span className="flex items-center gap-2"><Clock size={15} /> {evt.time}</span>
                    <span className="flex items-center gap-2"><MapPin size={15} /> {evt.location}</span>
                  </div>
                </div>

                <div className="hidden md:flex shrink-0">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-bms-warmGold group-hover:text-black group-hover:border-bms-warmGold transition-all">
                    <Calendar size={20} />
                  </div>
                </div>
              </motion.div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </div>
  );
}
