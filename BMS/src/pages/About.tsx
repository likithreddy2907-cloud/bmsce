import { Landmark, Compass, Award } from 'lucide-react';
import { AnimatedContainer } from '../components/AnimatedContainer';
import { KineticText } from '../components/KineticText';

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 overflow-hidden">
      <KineticText text="About BMSIT&M" className="text-4xl md:text-5xl font-display text-white mb-12" />

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: Landmark,
            title: "Autonomous Status",
            desc: "Since the 2021-22 academic year, the institute has operated with fresh autonomous status granted by the UGC, allowing it to design a curriculum that directly addresses contemporary industry needs."
          },
          {
            icon: Compass,
            title: "Strategic Vision",
            desc: "The 'Strategic Development Plan 2024–2029' outlines a roadmap to enhance international recognition through increased research output, industry engagement, and ethical entrepreneurship."
          },
          {
            icon: Award,
            title: "Academic Excellence",
            desc: "The college is accredited by NAAC with an 'A' Grade and maintains NBA accreditation for most of its eight undergraduate and three postgraduate programs."
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
