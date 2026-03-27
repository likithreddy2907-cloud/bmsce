import { Microscope, Banknote, FileCheck } from 'lucide-react';
import { AnimatedContainer } from '../components/AnimatedContainer';
import { KineticText } from '../components/KineticText';

export function Research() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 overflow-hidden">
      <KineticText text="Research at BMSIT&M" className="text-4xl md:text-5xl font-display text-white mb-12" />

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: Microscope,
            title: "Specialized Laboratories",
            desc: "Advanced research is conducted in centers like the Computational Neuroscience and Engineering Lab, the Thin Film and Optoelectronics Devices Lab, and the Kevin Ashton Lab for GPU computing."
          },
          {
            icon: Banknote,
            title: "External Funding",
            desc: "The faculty consistently secures grants from national bodies like DST-SERB and VGST, with recent projects focused on graphene-based optical sensors and micro-gas sensor simulation."
          },
          {
            icon: FileCheck,
            title: "Intellectual Property",
            desc: "The dedicated IP Cell actively supports staff and students in filing patents, with multiple Indian patents granted annually in recent years."
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
