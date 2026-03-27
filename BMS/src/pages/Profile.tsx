import { motion } from 'framer-motion';
import { AnimatedContainer } from '../components/AnimatedContainer';
import { KineticText } from '../components/KineticText';
import { User, BookOpen, Award, CheckCircle } from 'lucide-react';

export function Profile() {
  const student = {
    name: "Alex Jensen",
    program: "B.E. in Computer Science",
    year: "Junior",
    creditsCompleted: 98,
    creditsTotal: 120,
    gpa: 3.8
  };

  const progressPercentage = (student.creditsCompleted / student.creditsTotal) * 100;
  // For SVG dasharray logic
  const circleRadius = 60;
  const circumference = 2 * Math.PI * circleRadius;

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <KineticText text="Student Dashboard" className="text-4xl md:text-6xl font-display text-white mb-16" />

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Profile Card */}
        <AnimatedContainer direction="up" delay={0.1} className="md:col-span-1">
          <div className="bg-bms-surface p-8 rounded-2xl border border-white/10 shadow-xl flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-bms-nearBlack rounded-full flex items-center justify-center border-2 border-bms-warmGold mb-6 shadow-inner">
              <User size={40} className="text-bms-warmGold" />
            </div>
            <h3 className="text-2xl font-display text-white mb-2">{student.name}</h3>
            <p className="text-bms-crimson font-medium mb-1">{student.program}</p>
            <p className="text-bms-muted text-sm">{student.year} Year</p>
          </div>
        </AnimatedContainer>

        {/* Progress Tracker Card */}
        <AnimatedContainer direction="up" delay={0.2} className="md:col-span-2">
          <div className="bg-bms-surface p-8 rounded-2xl border border-white/10 shadow-xl flex flex-col md:flex-row items-center gap-12">
            
            <div className="relative w-40 h-40 shrink-0">
              <svg width="160" height="160" className="transform -rotate-90">
                <circle 
                  cx="80" 
                  cy="80" 
                  r={circleRadius} 
                  stroke="currentColor" 
                  strokeWidth="12" 
                  fill="transparent" 
                  className="text-bms-nearBlack" 
                />
                <motion.circle 
                  cx="80" 
                  cy="80" 
                  r={circleRadius} 
                  stroke="currentColor" 
                  strokeWidth="12" 
                  fill="transparent" 
                  className="text-bms-crimson"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
                  whileInView={{ strokeDashoffset: circumference - (progressPercentage / 100) * circumference }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-display text-white">{Math.round(progressPercentage)}%</span>
                <span className="text-xs text-bms-muted uppercase tracking-wider">Complete</span>
              </div>
            </div>

            <div className="flex-1 space-y-6">
              <h3 className="text-2xl font-display text-white border-b border-bms-border/50 pb-3">Degree Progress</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-bms-muted uppercase tracking-wider mb-1">Credits</div>
                  <div className="text-3xl font-display text-bms-warmGold">
                    {student.creditsCompleted} <span className="text-lg text-bms-muted">/ {student.creditsTotal}</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-bms-muted uppercase tracking-wider mb-1">Current GPA</div>
                  <div className="text-3xl font-display text-white">{student.gpa.toFixed(1)}</div>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 px-6 py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-lg text-sm font-medium transition-colors"
              >
                View Transcript
              </motion.button>
            </div>
          </div>
        </AnimatedContainer>
      </div>

      <KineticText text="Recent Milestones" className="text-3xl font-display text-white mb-8" />
      
      <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-bms-crimson before:via-bms-warmGold before:to-transparent">
        {[
          { title: "Completed Software Engineering Lab", date: "Oct 2026", icon: CheckCircle },
          { title: "Achieved Dean's List", date: "May 2026", icon: Award },
          { title: "Passed Advanced Data Structures", date: "Dec 2025", icon: BookOpen }
        ].map((milestone, i) => (
          <AnimatedContainer key={i} direction={i % 2 === 0 ? "right" : "left"} delay={0.2 + i * 0.1}>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-bms-warmGold bg-bms-nearBlack group-hover:bg-bms-warmGold text-bms-warmGold group-hover:text-black shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg transition-colors duration-300 z-10">
                <milestone.icon size={18} />
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-bms-surface p-6 rounded-2xl border border-white/5 shadow-lg group-hover:border-bms-warmGold/30 transition-colors duration-300"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-bms-muted uppercase font-bold tracking-wider">{milestone.date}</span>
                  <h4 className="text-lg font-display text-white leading-tight">{milestone.title}</h4>
                </div>
              </motion.div>

            </div>
          </AnimatedContainer>
        ))}
      </div>
    </div>
  );
}
