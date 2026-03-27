import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, GripHorizontal } from 'lucide-react';

// BMSIT Knowledge Base — sourced from bmsit.ac.in
const BMSIT_KB: Record<string, { keywords: string[]; answer: string }> = {
  location: {
    keywords: ['location', 'where', 'address', 'yelahanka', 'bangalore', 'place', 'situated'],
    answer: '📍 BMSIT&M is located at **Avalahalli, off Doddaballapur Road, Yelahanka, Bangalore – 560064**. It is roughly 20 km from MG Road in North Bangalore, well-connected by BMTC and college buses.',
  },
  founded: {
    keywords: ['founded', 'established', 'year', 'started', 'history', 'when'],
    answer: '🏛️ BMS Institute of Technology & Management was established in **2002** under the BMS Educational Trust, one of Bangalore\'s most prestigious educational groups, founded in 1945.',
  },
  accreditation: {
    keywords: ['accreditation', 'naac', 'nba', 'grade', 'ranking', 'autonomous', 'vtu', 'affiliated'],
    answer: '🏆 BMSIT&M holds a **NAAC \'A\' Grade** accreditation (2019). It is an **autonomous institution** affiliated with Visvesvaraya Technological University (VTU). Multiple departments (CSE, ECE, ISE, AI&ML, EEE, ME, CV) are **NBA accredited**.',
  },
  programs: {
    keywords: ['programs', 'courses', 'branches', 'department', 'be', 'btech', 'mtech', 'mca', 'mba', 'degree'],
    answer: `🎓 BMSIT&M offers:\n\n**UG (B.E.)**:\n• AI & Machine Learning (180 seats, NBA)\n• Computer Science & Engineering (240 seats, NBA)\n• Computer Science & Business Systems (60 seats)\n• Electronics & Communication (120 seats, NBA)\n• Information Science (120 seats, NBA)\n• Electrical & Electronics (60 seats, NBA)\n• Mechanical Engineering (120 seats)\n• Civil Engineering (60 seats)\n\n**PG**: M.Tech (CSE, Cyber Security, VLSI), MCA, MBA`,
  },
  admission: {
    keywords: ['admission', 'apply', 'how to', 'entrance', 'kcet', 'comedk', 'cutoff', 'eligibility', 'fee'],
    answer: '📋 Admissions are through **KCET** (Karnataka CET), **COMEDK UGET**, and **management quota**. For B.E., you need 45% in PCM in 10+2. Fees range from ₹1.5–2.5 lakh/year depending on category. Apply at **bmsit.ac.in/admissions** during May–July.',
  },
  fees: {
    keywords: ['fees', 'fee', 'cost', 'tuition', 'expense', 'charges', 'amount'],
    answer: '💰 Approximate annual fees:\n• **Government quota (KCET)**: ₹60,000 – ₹90,000/year\n• **COMEDK quota**: ₹1.50 lakh – ₹2.00 lakh/year\n• **Management quota**: ₹2.00 lakh – ₹2.50 lakh/year\n\nHostel: ₹80,000 – ₹1.2 lakh/year (food included)',
  },
  hostel: {
    keywords: ['hostel', 'accommodation', 'stay', 'housing', 'room', 'dorm', 'residential'],
    answer: '🏠 BMSIT&M provides **on-campus hostel for 500 men** (double-occupancy, fully furnished). Women are accommodated in approved **off-campus PG/hostels** with dedicated college bus service and 24/7 security.',
  },
  placements: {
    keywords: ['placement', 'job', 'salary', 'package', 'recruit', 'company', 'lpa', 'career'],
    answer: '💼 Placement stats (2023-24):\n• **80%+ placement rate** for eligible students\n• **Top recruiters**: Amazon, Cognizant, Infosys, Wipro, HCL, TCS, Deloitte, Bosch, Mindtree, SAP, KPMG, Adobe, LinkedIn, Oracle\n• **Highest package**: ~₹42 LPA\n• **Average package**: ~₹6–8 LPA\n• Dedicated **Training & Placement cell** with industry tie-ups',
  },
  campus: {
    keywords: ['campus', 'infrastructure', 'facilities', 'lab', 'library', 'green', 'acre', 'building'],
    answer: '🌿 The campus spans **25 acres** in Yelahanka, certified as **"Best Green Campus" by AICTE** with 3,000+ trees. Facilities include:\n• Smart classrooms & advanced labs\n• Digital library with 1 lakh+ books\n• Innovation & Entrepreneurship Centre\n• Gym, sports courts, multipurpose playfield\n• Canteen & student lounges',
  },
  research: {
    keywords: ['research', 'phd', 'publication', 'grant', 'dsr', 'innovation', 'project', 'paper'],
    answer: '🔬 BMSIT&M has multiple **VTU-recognised Research Centres**. Key highlights:\n• Funded projects from **DST-SERB**, VGST, and industry\n• Research in graphene sensors, GPU computing, neuroscience engineering\n• **IP Cell** supporting patent filing — multiple granted patents\n• IIC (Innovation & Incubation Centre) rated **3.5 stars** by MoE',
  },
  clubs: {
    keywords: ['club', 'activity', 'extracurricular', 'fest', 'event', 'oikos', 'nss', 'sports', 'cultural'],
    answer: '🎭 BMSIT&M has **25+ active clubs** including:\n• **OIKOS Eco-Club** (world\'s first to sign MoU with NLSIU)\n• Quizcraft, Aero Club, Robotics, Coding Club\n• NSS, Cultural Committee, Music & Drama Team\n• Annual fests: **TechVista** (technical) & **Abhilasha** (cultural)\n• IIC 5.0 student startup & innovation events',
  },
  contact: {
    keywords: ['contact', 'phone', 'email', 'reach', 'call', 'number', 'touch'],
    answer: '📞 Contact BMSIT&M:\n• **Address**: Avalahalli, Yelahanka, Bangalore – 560064\n• **Phone**: +91-80-2847 2305 / 2847 2306\n• **Email**: principal@bmsit.in\n• **Website**: www.bmsit.ac.in\n• **Principal\'s Office**: Available Mon–Fri, 9 AM – 5 PM',
  },
  transport: {
    keywords: ['transport', 'bus', 'how to reach', 'route', 'commute', 'bmtc', 'train', 'auto', 'cab'],
    answer: '🚌 Reaching BMSIT&M:\n• **BMTC buses**: Route 252E, 338, 341 from Kempegowda Bus Stand\n• **Metro**: Nearest station is Yelahanka (Yellow Line, under construction). Currently 8 km from Hebbal metro\n• **Cab/Auto**: Available from Yelahanka Old Town, ~15 min\n• **College buses**: Cover Hebbal, Yeshwantpur, Rajajinagar and more',
  },
};

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  
  for (const key of Object.keys(BMSIT_KB)) {
    const entry = BMSIT_KB[key];
    if (entry.keywords.some(kw => lower.includes(kw))) {
      return entry.answer;
    }
  }
  
  // Greetings
  if (/^(hi|hello|hey|greetings|good\s*(morning|afternoon|evening))/.test(lower)) {
    return "👋 Hello! I'm the **BMSIT Assistant**. I can answer questions about:\n\n• Admissions & Fees\n• Programs & Courses\n• Campus Facilities\n• Placements\n• Hostel & Transport\n• Research & Clubs\n\nWhat would you like to know?";
  }

  return "🤔 I didn't quite catch that. I can help with:\n• **Admissions** (fees, eligibility, process)\n• **Programs** (B.E., M.Tech, MCA, MBA)\n• **Campus & Facilities**\n• **Placements & Companies**\n• **Hostel, Transport, Contact**\n\nTry asking: *\"What are the placement stats?\"* or *\"How do I apply?\"*";
}

interface Message {
  id: number;
  role: 'user' | 'bot';
  text: string;
  time: string;
}

export function BMSITChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: 'bot',
      text: "👋 Hi! I'm the BMSIT&M Assistant. Ask me anything about admissions, programs, campus life, placements, and more!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const constraintsRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;

    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: Message = { id: Date.now(), role: 'user', text, time: now };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(text);
      const botMsg: Message = {
        id: Date.now() + 1,
        role: 'bot',
        text: response,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
      setTimeout(scrollToBottom, 100);
    }, 600 + Math.random() * 400);
  };

  const QUICK_QUESTIONS = [
    'How to apply?',
    'What are the fees?',
    'Placement statistics?',
    'Available programs?',
  ];

  return (
    // Full-screen drag constraint area
    <div ref={constraintsRef} className="fixed inset-0 pointer-events-none z-50">
      <motion.div
        drag
        dragMomentum={false}
        dragConstraints={constraintsRef}
        className="absolute bottom-6 right-6 pointer-events-auto"
        style={{ touchAction: 'none' }}
      >
        <AnimatePresence mode="wait">
          {!open ? (
            /* Collapsed bubble */
            <motion.button
              key="bubble"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen(true)}
              className="relative flex items-center justify-center w-14 h-14 rounded-full bg-bms-crimson shadow-2xl shadow-bms-crimson/40 text-white"
            >
              <MessageCircle size={24} />
              {/* Ping animation */}
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bms-warmGold opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-bms-warmGold" />
              </span>
            </motion.button>
          ) : (
            /* Chat window */
            <motion.div
              key="window"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-[340px] sm:w-[380px] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              style={{ maxHeight: '75vh' }}
            >
              {/* Header */}
              <div className="bg-bms-crimson px-4 py-3 flex items-center gap-3">
                {/* Drag handle */}
                <GripHorizontal size={16} className="text-white/60 cursor-grab active:cursor-grabbing shrink-0" />
                <div className="flex items-center gap-2 flex-1">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold font-sans leading-none">BMSIT Assistant</p>
                    <p className="text-white/70 text-[11px] font-sans mt-0.5">Powered by bmsit.ac.in</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <button
                    onClick={() => setOpen(false)}
                    className="ml-2 w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors text-white"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto bg-[#0f0f0f] p-4 space-y-4" style={{ minHeight: 0, maxHeight: '400px' }}>
                {messages.map(msg => (
                  <div
                    key={msg.id}
                    className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-1 ${
                      msg.role === 'bot' ? 'bg-bms-crimson/20 border border-bms-crimson/40' : 'bg-bms-warmGold/20 border border-bms-warmGold/40'
                    }`}>
                      {msg.role === 'bot' ? <Bot size={13} className="text-bms-crimson" /> : <User size={13} className="text-bms-warmGold" />}
                    </div>
                    <div className={`flex flex-col gap-1 max-w-[75%] ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                      <div className={`px-3 py-2 rounded-xl text-[13px] font-sans leading-relaxed whitespace-pre-wrap ${
                        msg.role === 'bot'
                          ? 'bg-white/5 text-bms-cream border border-white/5'
                          : 'bg-bms-crimson text-white'
                      }`}
                        dangerouslySetInnerHTML={{
                          __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        }}
                      />
                      <span className="text-[10px] text-bms-muted">{msg.time}</span>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex gap-2">
                    <div className="w-7 h-7 rounded-full bg-bms-crimson/20 border border-bms-crimson/40 flex items-center justify-center">
                      <Bot size={13} className="text-bms-crimson" />
                    </div>
                    <div className="px-3 py-3 bg-white/5 rounded-xl border border-white/5 flex gap-1 items-center">
                      {[0, 1, 2].map(i => (
                        <motion.span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-bms-muted"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.15 }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick questions */}
              <div className="bg-[#111] px-3 pt-2 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {QUICK_QUESTIONS.map(q => (
                  <button
                    key={q}
                    onClick={() => { setInput(q); }}
                    className="shrink-0 text-[11px] px-2.5 py-1 rounded-full border border-bms-warmGold/30 text-bms-warmGold hover:bg-bms-warmGold/10 transition-colors font-sans whitespace-nowrap"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="bg-[#0f0f0f] p-3 border-t border-white/5 flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && sendMessage()}
                  placeholder="Ask about BMSIT..."
                  className="flex-1 bg-white/5 border border-white/10 text-bms-cream text-sm rounded-xl px-3 py-2 outline-none focus:border-bms-crimson/50 transition-colors placeholder:text-bms-muted/60 font-sans"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={sendMessage}
                  className="w-9 h-9 flex items-center justify-center bg-bms-crimson rounded-xl text-white shrink-0 hover:bg-red-700 transition-colors disabled:opacity-40"
                  disabled={!input.trim()}
                >
                  <Send size={15} />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
