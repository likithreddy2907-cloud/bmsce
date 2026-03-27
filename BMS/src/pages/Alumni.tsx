import { HeartHandshake, MapPin } from 'lucide-react';
import { AnimatedContainer } from '../components/AnimatedContainer';
import { KineticText } from '../components/KineticText';

export function Alumni() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 overflow-hidden">
      <KineticText text="Alumni Network" className="text-4xl md:text-5xl font-display text-white mb-12" />

      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            icon: HeartHandshake,
            title: "Mentorship and Networking",
            desc: "The alumni network actively participates in 'Manthana,' an annual magazine and gathering where graduates share industry insights and mentor juniors for placements."
          },
          {
            icon: MapPin,
            title: "Global Footprint",
            desc: "Graduates from the 2017-21 and earlier batches are now placed in high-tier companies such as Amazon, Yahoo, and Cognizant, contributing back to the campus via guest lectures and recruitment drives."
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
