import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { FileSignature, PiggyBank, HelpCircle, ArrowRight } from 'lucide-react';
import { AnimatedContainer } from '../components/AnimatedContainer';
import { KineticText } from '../components/KineticText';
import { motion } from 'framer-motion';

export function Admissions() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program_id: '',
    message: ''
  });

  interface Program {
    id: string;
    name: string;
  }

  const [programs, setPrograms] = useState<Program[]>([]);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    supabase.from('programs').select('id, name').then(({data}) => {
      if (data) setPrograms(data);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    const { error } = await supabase.from('enquiries').insert([
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        program_id: formData.program_id || null,
        message: formData.message
      }
    ]);

    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', program_id: '', message: '' });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 overflow-hidden">
      <KineticText text="Admissions & Aid" className="text-4xl md:text-5xl font-display text-white mb-12" />

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          {
            icon: FileSignature,
            title: "Merit-Based Intake",
            desc: "Undergraduate admissions are facilitated through the KCET (for Karnataka residents) and COMEDK (all-India) entrance exams, adhering strictly to university and state guidelines."
          },
          {
            icon: PiggyBank,
            title: "Financial Assistance",
            desc: "Eligible students benefit from the SNQ (Supernumerary Quota), which significantly lowers tuition fees for top-performing students from economically weaker backgrounds."
          },
          {
            icon: HelpCircle,
            title: "Institutional Support",
            desc: "The BMS Educational Trust offers guidance and counseling to help students choose the right courses based on their career goals."
          }
        ].map((item, i) => (
          <AnimatedContainer key={i} direction="up" delay={0.2 + i * 0.1}>
            <div className="h-full bg-bms-surface p-6 rounded-xl border border-bms-border shadow-lg flex flex-col gap-3 group hover:border-bms-warmGold transition-colors">
              <div className="w-10 h-10 bg-bms-nearBlack rounded-lg flex items-center justify-center border border-bms-border group-hover:border-bms-warmGold/50 transition-colors">
                <item.icon className="text-bms-warmGold" size={20} />
              </div>
              <h3 className="text-lg font-display text-white mt-1">{item.title}</h3>
              <p className="text-bms-muted font-sans text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </AnimatedContainer>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <AnimatedContainer direction="left" delay={0.4}>
          <div>
            <h1 className="text-4xl md:text-5xl font-display text-white mb-4">Admissions 2026</h1>
            <p className="text-bms-muted text-lg mb-8">
              Take the first step towards a brilliant engineering career. Fill out the expression of interest form and our counseling team will get in touch with you.
            </p>
            
            <div className="bg-bms-surface border border-bms-border p-6 rounded-xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-bms-warmGold"></div>
              <h3 className="text-xl font-display text-white mb-4">Key Dates</h3>
              <ul className="space-y-4 text-sm font-sans text-bms-cream">
                <li className="flex justify-between border-b border-bms-border/50 pb-2 group">
                  <span className="group-hover:text-white transition-colors">KCET Applications</span>
                  <span className="text-bms-warmGold font-medium">March 2026</span>
                </li>
                <li className="flex justify-between border-b border-bms-border/50 pb-2 group">
                  <span className="group-hover:text-white transition-colors">COMEDK Exam</span>
                  <span className="text-bms-warmGold font-medium">May 2026</span>
                </li>
                <li className="flex justify-between group">
                  <span className="group-hover:text-white transition-colors">Semester Start</span>
                  <span className="text-bms-warmGold font-medium">August 2026</span>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedContainer>

        <AnimatedContainer direction="right" delay={0.5}>
          <div className="bg-bms-surface p-8 rounded-2xl border border-bms-border shadow-2xl relative overflow-hidden backdrop-blur-sm">
            <h2 className="text-2xl font-display text-white mb-6">Enquiry Form</h2>
            
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-bms-success/20 text-bms-success border border-bms-success/50 p-6 rounded-xl text-center flex flex-col items-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-bms-success/20 flex items-center justify-center">
                  <FileSignature size={24} />
                </div>
                <p className="font-medium">Thank you! Your enquiry has been received successfully.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
                <div>
                  <label className="block text-bms-cream mb-1 text-xs uppercase tracking-wider font-bold">Full Name *</label>
                  <input required type="text" className="w-full bg-bms-nearBlack border border-bms-border rounded p-3 text-white focus:outline-none focus:border-bms-crimson transition-colors" 
                    value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-bms-cream mb-1 text-xs uppercase tracking-wider font-bold">Email *</label>
                    <input required type="email" className="w-full bg-bms-nearBlack border border-bms-border rounded p-3 text-white focus:outline-none focus:border-bms-crimson transition-colors"
                      value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-bms-cream mb-1 text-xs uppercase tracking-wider font-bold">Phone</label>
                    <input type="tel" className="w-full bg-bms-nearBlack border border-bms-border rounded p-3 text-white focus:outline-none focus:border-bms-crimson transition-colors"
                      value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                </div>

                <div>
                  <label className="block text-bms-cream mb-1 text-xs uppercase tracking-wider font-bold">Interested Program</label>
                  <select className="w-full bg-bms-nearBlack border border-bms-border rounded p-3 text-white focus:outline-none focus:border-bms-crimson transition-colors appearance-none"
                    value={formData.program_id} onChange={e => setFormData({...formData, program_id: e.target.value})}>
                    <option value="">-- Select a Program --</option>
                    {programs.map(p => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-bms-cream mb-1 text-xs uppercase tracking-wider font-bold">Message</label>
                  <textarea rows={4} className="w-full bg-bms-nearBlack border border-bms-border rounded p-3 text-white focus:outline-none focus:border-bms-crimson transition-colors resize-none"
                    value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === 'submitting'} 
                  type="submit" 
                  className="w-full bg-bms-crimson hover:bg-red-700 text-white font-medium py-4 rounded-xl shadow-lg shadow-bms-crimson/20 transition-all disabled:opacity-50 mt-4 flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? 'Submitting...' : (
                    <>Submit Enquiry <ArrowRight size={18} /></>
                  )}
                </motion.button>
                
                {status === 'error' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 mt-2 text-xs text-center bg-red-500/10 py-2 rounded border border-red-500/20"
                  >
                    An error occurred. Please try again later.
                  </motion.p>
                )}
              </form>
            )}
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
}
