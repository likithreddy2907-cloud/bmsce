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

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 overflow-hidden">
      <KineticText text="Campus Life" className="text-4xl md:text-6xl font-display text-white mb-16" />

      <div className="grid md:grid-cols-2 gap-8 mb-24">
        {[
          {
            icon: Leaf,
            title: "Eco-Friendly Infrastructure",
            desc: "The 18.5-acre campus is a certified 'Best Green Campus' by AICTE, featuring over 3,000 trees and 1,500 plant varieties, creating a serene learning environment away from city noise."
          },
          {
            icon: Users,
            title: "Diverse Club Culture",
            desc: "Students can engage with over 25 clubs, including the OIKOS Eco-Club, which is the first in the world to sign an MoU with a university (NLSIU), and specialized groups like Quizcraft and the Aero Club."
          },
          {
            icon: Home,
            title: "Residential Facilities",
            desc: "The campus provides fully furnished double-occupancy hostels for 500 men, while women are accommodated in off-campus housing with dedicated college transportation and 24/7 security."
          },
          {
            icon: Trophy,
            title: "Sports and Wellness",
            desc: "Facilities include a multipurpose playfield, a well-equipped gym, and courts for basketball, tennis, and badminton, all managed by a dedicated physical education department."
          }
        ].map((feature, i) => (
          <AnimatedContainer key={i} direction="up" delay={i * 0.15}>
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-bms-surface/80 backdrop-blur-md p-8 rounded-2xl border border-white/5 shadow-xl flex flex-col gap-5 group transition-colors"
            >
              <div className="w-14 h-14 bg-bms-nearBlack rounded-xl flex items-center justify-center border border-white/10 group-hover:border-bms-warmGold/50 transition-colors shadow-inner">
                <feature.icon className="text-bms-warmGold group-hover:scale-110 transition-transform" size={28} />
              </div>
              <h3 className="text-2xl font-display text-white mt-2 leading-tight">{feature.title}</h3>
              <p className="text-bms-muted font-sans leading-relaxed text-base">
                {feature.desc}
              </p>
            </motion.div>
          </AnimatedContainer>
        ))}
      </div>

      {/* Interactive Events Calendar */}
      <div className="relative">
        <KineticText text="Upcoming Events" className="text-3xl md:text-5xl font-display text-white mb-10" />
        
        <div className="space-y-4">
          {events.map((evt, i) => (
            <AnimatedContainer key={i} direction="left" delay={i * 0.1}>
              <motion.div 
                whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.05)' }}
                className="group flex flex-col md:flex-row items-start md:items-center gap-6 p-6 md:p-8 bg-bms-surface/50 border border-white/5 rounded-2xl cursor-pointer transition-colors relative overflow-hidden"
              >
                {/* Accent bar on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-bms-crimson transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                
                <div className="shrink-0 text-center w-24">
                  <span className="block text-sm text-bms-muted uppercase font-bold tracking-widest">{evt.date.split(' ')[0]}</span>
                  <span className="block text-4xl font-display text-bms-warmGold">{evt.date.split(' ')[1]}</span>
                </div>
                
                <div className="flex-1 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 bg-bms-crimson/20 text-bms-crimson rounded">
                      {evt.type}
                    </span>
                  </div>
                  <h4 className="text-2xl font-display text-white mb-3 group-hover:text-bms-warmGold transition-colors">{evt.title}</h4>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-bms-muted">
                    <span className="flex items-center gap-2"><Clock size={16}/> {evt.time}</span>
                    <span className="flex items-center gap-2"><MapPin size={16}/> {evt.location}</span>
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
