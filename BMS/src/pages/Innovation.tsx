import { Lightbulb, Rocket, Users, Target, Laptop } from 'lucide-react';
import { AnimatedContainer } from '../components/AnimatedContainer';
import { KineticText } from '../components/KineticText';

export function Innovation() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 overflow-hidden">
      <KineticText text="Innovation at BMSIT&M" className="text-4xl md:text-5xl font-display text-white mb-6" />
      
      <AnimatedContainer direction="up" delay={0.2}>
        <p className="text-bms-cream text-lg md:text-xl mb-12 max-w-4xl leading-relaxed font-light">
          Innovation at BMS Institute of Technology and Management (BMSIT&M) is driven by a structured ecosystem designed to bridge the gap between academic theory and real-world application.
        </p>
      </AnimatedContainer>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* IIC */}
        <AnimatedContainer direction="up" delay={0.3}>
          <div className="h-full bg-bms-surface p-8 rounded-xl border border-bms-border shadow-lg flex flex-col gap-4 group hover:border-bms-warmGold transition-colors">
            <div className="w-12 h-12 bg-bms-nearBlack rounded-lg flex items-center justify-center border border-bms-border group-hover:border-bms-warmGold/50 transition-colors">
              <Lightbulb className="text-bms-warmGold" size={24} />
            </div>
            <h3 className="text-xl font-display text-white mt-2">Institution's Innovation Council (IIC)</h3>
            <p className="text-bms-muted font-sans leading-relaxed text-sm">
              Established under the Ministry of Education, the IIC at BMSIT&M fosters a culture of creativity by mentoring students through ideation, prototyping, and startup development.
            </p>
            <div className="mt-4 flex-grow overflow-hidden rounded-lg">
              <img src="/bmsit5.jpg" alt="IIC" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </AnimatedContainer>

        {/* BICEP */}
        <AnimatedContainer direction="up" delay={0.4}>
          <div className="h-full bg-bms-surface p-8 rounded-xl border border-bms-border shadow-lg flex flex-col gap-4 group hover:border-bms-warmGold transition-colors">
            <div className="w-12 h-12 bg-bms-nearBlack rounded-lg flex items-center justify-center border border-bms-border group-hover:border-bms-warmGold/50 transition-colors">
              <Rocket className="text-bms-warmGold" size={24} />
            </div>
            <h3 className="text-xl font-display text-white mt-2">BMS Innovation Centre and Entrepreneurship Park (BICEP)</h3>
            <p className="text-bms-muted font-sans leading-relaxed text-sm">
              This in-house incubation centre acts as a host institute for the Ministry of MSME, providing students with physical space, funding, and networking opportunities to launch innovation-driven enterprises.
            </p>
            <div className="mt-4 flex-grow overflow-hidden rounded-lg">
              <img src="/bmsit4.jpg" alt="BICEP" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </AnimatedContainer>

        {/* Hands-on Learning */}
        <AnimatedContainer direction="up" delay={0.5}>
          <div className="h-full bg-bms-surface p-8 rounded-xl border border-bms-border shadow-lg flex flex-col gap-4 group hover:border-bms-warmGold transition-colors">
            <div className="w-12 h-12 bg-bms-nearBlack rounded-lg flex items-center justify-center border border-bms-border group-hover:border-bms-warmGold/50 transition-colors">
              <Target className="text-bms-warmGold" size={24} />
            </div>
            <h3 className="text-xl font-display text-white mt-2">Hands-on Learning</h3>
            <p className="text-bms-muted font-sans leading-relaxed text-sm">
              The institute emphasizes Project-Based Learning (PBL), where students showcase innovative solutions to societal and industrial challenges during annual exhibitions and hackathons.
            </p>
            <div className="mt-4 flex-grow overflow-hidden rounded-lg">
              <img src="/bmsit6.jpg" alt="Hands-on Learning" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </AnimatedContainer>

        {/* Industry Collaboration */}
        <AnimatedContainer direction="up" delay={0.6}>
          <div className="h-full bg-bms-surface p-8 rounded-xl border border-bms-border shadow-lg flex flex-col gap-4 group hover:border-bms-warmGold transition-colors">
            <div className="w-12 h-12 bg-bms-nearBlack rounded-lg flex items-center justify-center border border-bms-border group-hover:border-bms-warmGold/50 transition-colors">
              <Users className="text-bms-warmGold" size={24} />
            </div>
            <h3 className="text-xl font-display text-white mt-2">Industry Collaboration</h3>
            <p className="text-bms-muted font-sans leading-relaxed text-sm">
              By partnering with global tech leaders like Unisys, SAP Labs, and Samsung, BMSIT&M integrates current industry trends into its research and student projects.
            </p>
            <div className="mt-4 flex-grow grid grid-cols-2 gap-2">
              <div className="overflow-hidden rounded-lg">
                <img src="/bmsit7.jpg" alt="Industry Collaboration 1" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src="/bmsit8.jpg" alt="Industry Collaboration 2" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </AnimatedContainer>

        {/* Faculty-Driven Innovation */}
        <AnimatedContainer direction="up" delay={0.7} className="md:col-span-2 lg:col-span-1">
          <div className="h-full bg-bms-surface p-8 rounded-xl border border-bms-border shadow-lg flex flex-col gap-4 group hover:border-bms-warmGold transition-colors">
            <div className="w-12 h-12 bg-bms-nearBlack rounded-lg flex items-center justify-center border border-bms-border group-hover:border-bms-warmGold/50 transition-colors">
              <Laptop className="text-bms-warmGold" size={24} />
            </div>
            <h3 className="text-xl font-display text-white mt-2">Faculty-Driven Innovation</h3>
            <p className="text-bms-muted font-sans leading-relaxed text-sm">
              The institution hosts unique events like REBOOT, a dedicated hackathon for faculty members to develop sustainable, SDG-aligned technology solutions.
            </p>
            <div className="mt-4 flex-grow overflow-hidden rounded-lg">
              <img src="/bmsit9.jpg" alt="Faculty-Driven Innovation" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </AnimatedContainer>

      </div>
    </div>
  );
}
