import { TrendingUp, Handshake } from 'lucide-react';
import { AnimatedContainer } from '../components/AnimatedContainer';
import { KineticText } from '../components/KineticText';

export function News() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 overflow-hidden">
      <KineticText text="News & Updates" className="text-4xl md:text-5xl font-display text-white mb-12" />

      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            icon: TrendingUp,
            title: "Innovation Rankings",
            desc: "BMSIT&M's Innovation Council (IIC 5.0) was recently awarded a 3.5-star rating, placing it among the top-rated innovation hubs by the Ministry of Education."
          },
          {
            icon: Handshake,
            title: "Industry Collaborations",
            desc: "Recent MoUs with global giants like Bosch, IBM, and Texas Instruments have paved the way for new lab facilities and specialized training modules on campus."
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
