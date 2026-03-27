import { BookOpen, Briefcase, Globe } from 'lucide-react';
import { AnimatedContainer } from '../components/AnimatedContainer';
import { KineticText } from '../components/KineticText';

export function LifelongLearning() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 overflow-hidden">
      <KineticText text="Lifelong Learning" className="text-4xl md:text-5xl font-display text-white mb-12" />

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: BookOpen,
            title: "Open Course Initiatives",
            desc: "The institute regularly conducts five-day 'Open Courses' on topics like Ethical Hacking, Full Stack Web Development, and Metaverse Designing, often in association with industry partners like Digipix Technologies."
          },
          {
            icon: Briefcase,
            title: "Project-Based Pedagogy",
            desc: "Through the 'Summer of Projects' and regular 'Open Day' exhibitions, students apply theoretical knowledge to real-world problems in domains like AIML, IoT, and Robotics."
          },
          {
            icon: Globe,
            title: "Global Certifications",
            desc: "As an NPTEL Local Chapter, BMSIT encourages students to earn certificates from premier institutes like the IITs, providing a competitive edge in global job markets."
          }
        ].map((item, i) => (
          <AnimatedContainer key={i} direction="up" delay={0.2 + i * 0.1}>
            <div className="h-full bg-bms-surface p-8 rounded-xl border border-bms-border shadow-lg flex flex-col gap-4 group hover:border-bms-warmGold transition-colors">
              <div className="w-12 h-12 bg-bms-nearBlack rounded-lg flex items-center justify-center border border-bms-border group-hover:border-bms-warmGold/50 transition-colors">
                <item.icon className="text-bms-warmGold" size={24} />
              </div>
              <h3 className="text-xl font-display text-white mt-2">{item.title}</h3>
              <p className="text-bms-muted font-sans leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          </AnimatedContainer>
        ))}
      </div>
    </div>
  );
}
