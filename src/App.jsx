import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  BookOpen, 
  Flame, 
  Search, 
  Bell, 
  User,
  MapPin,
  Calendar,
  ChevronRight,
  TrendingUp,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-4 px-6 py-4 transition-all duration-300 ${
      active ? 'text-primary-saffron bg-white/5 border-r-4 border-primary-saffron' : 'text-text-secondary hover:text-white hover:bg-white/5'
    }`}
  >
    <Icon size={20} />
    <span className="font-medium text-sm">{label}</span>
  </button>
);

const JobCard = ({ title, company, location, type, salary, applyText }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass p-6 rounded-2xl flex flex-col gap-4 group cursor-pointer"
  >
    <div className="flex justify-between items-start">
      <div className="w-12 h-12 bg-primary-saffron/20 rounded-xl flex items-center justify-center text-primary-saffron">
        <Briefcase size={24} />
      </div>
      <span className="text-xs font-semibold px-3 py-1 bg-white/10 rounded-full text-secondary-gold">{type}</span>
    </div>
    <div>
      <h3 className="text-lg font-bold group-hover:text-primary-saffron transition-colors">{title}</h3>
      <p className="text-text-secondary text-sm">{company}</p>
    </div>
    <div className="flex items-center gap-4 text-xs text-text-secondary">
      <div className="flex items-center gap-1"><MapPin size={12} /> {location}</div>
      <div className="flex items-center gap-1"><TrendingUp size={12} /> {salary}</div>
    </div>
    <button className="w-full py-3 bg-primary-saffron text-black font-bold rounded-xl mt-2 hover:bg-primary-saffron-light transition-colors">
      {applyText || "Apply Now"}
    </button>
  </motion.div>
);

const PersonCard = ({ name, role, location, bio, connectText }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass p-6 rounded-2xl flex flex-col items-center text-center gap-4"
  >
    <div className="relative">
      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-primary-saffron to-secondary-gold p-1">
        <div className="w-full h-full rounded-full bg-bg-card flex items-center justify-center text-2xl font-bold">
          {name[0]}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-4 border-bg-card rounded-full"></div>
    </div>
    <div>
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-primary-saffron text-xs font-semibold uppercase tracking-wider">{role}</p>
    </div>
    <p className="text-text-secondary text-sm line-clamp-2">{bio}</p>
    <div className="flex items-center gap-1 text-xs text-text-secondary">
      <MapPin size={12} /> {location}
    </div>
    <button className="w-full py-2 border border-primary-saffron/30 text-primary-saffron hover:bg-primary-saffron hover:text-black font-bold rounded-xl transition-all">
      {connectText || "Connect"}
    </button>
  </motion.div>
);

const ServiceCard = ({ title, price, duration, rating, bookText }) => (
  <motion.div 
    whileHover={{ x: 5 }}
    className="glass p-4 rounded-xl flex items-center justify-between group cursor-pointer"
  >
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-accent-red/20 rounded-lg flex items-center justify-center text-accent-red">
        <Flame size={20} />
      </div>
      <div>
        <h4 className="font-bold">{title}</h4>
        <p className="text-xs text-text-secondary">{duration} • {rating} <Star size={10} className="inline fill-secondary-gold text-secondary-gold" /></p>
      </div>
    </div>
    <div className="text-right">
      <p className="font-bold text-primary-saffron">₹{price}</p>
      <p className="text-[10px] text-text-secondary">{bookText || "Book Now"}</p>
    </div>
  </motion.div>
);

const translations = {
  EN: {
    dashboard: "Dashboard",
    careers: "Careers",
    connect: "Connect",
    dharma: "Dharma",
    gyan: "Gyan",
    matrimony: "Matrimony",
    welcome: "Welcome to Agni Setu",
    empowering: "Empowering the",
    brahmanCommunity: "Brahman Community",
    heroDesc: "A bridge to career opportunities, community connection, and cultural preservation.",
    featuredOpps: "Featured Opportunities",
    viewAll: "View All",
    dharmaServices: "Dharma Services",
    careersTitle: "Careers & Freelance",
    postOpening: "Post an Opening",
    connectTitle: "Community Connect",
    searchMembers: "Search members...",
    dharmaTitle: "Dharma Services",
    listServices: "List Your Services",
    ritualBookings: "Ritual Bookings",
    upcomingEvents: "Upcoming Events",
    gyanTitle: "Vedic Library (Gyan)",
    resources: "1,200+ Resources",
    matrimonyTitle: "Matrimonial Portal",
    matrimonyDesc: "Our high-quality Matchmaking module is launching in Q3 2026. Stay tuned to find your life partner within the community.",
    getNotified: "Get Notified",
    socialUnity: "Social Unity",
    communityDesc: "Join 5,000+ members in our community upliftment journey.",
    searchPlaceholder: "Search for jobs, events...",
    home: "Home",
    applyNow: "Apply Now",
    bookNow: "Book Now",
    connectBtn: "Connect",
    readMore: "Read More"
  },
  HI: {
    dashboard: "डैशबोर्ड",
    careers: "करियर",
    connect: "संपर्क",
    dharma: "धर्म",
    gyan: "ज्ञान",
    matrimony: "विवाह",
    welcome: "अग्नि सेतु में आपका स्वागत है",
    empowering: "सशक्त",
    brahmanCommunity: "ब्राह्मण समाज",
    heroDesc: "करियर के अवसरों, सामुदायिक जुड़ाव और सांस्कृतिक संरक्षण का एक सेतु।",
    featuredOpps: "प्रमुख अवसर",
    viewAll: "सभी देखें",
    dharmaServices: "धर्म सेवाएँ",
    careersTitle: "करियर और फ्रीलांस",
    postOpening: "नौकरी पोस्ट करें",
    connectTitle: "सामुदायिक संपर्क",
    searchMembers: "सदस्य खोजें...",
    dharmaTitle: "धर्म सेवाएँ",
    listServices: "अपनी सेवाएँ सूचीबद्ध करें",
    ritualBookings: "अनुष्ठान बुकिंग",
    upcomingEvents: "आगामी कार्यक्रम",
    gyanTitle: "वैदिक पुस्तकालय (ज्ञान)",
    resources: "1,200+ संसाधन",
    matrimonyTitle: "विवाह पोर्टल",
    matrimonyDesc: "हमारी उच्च-गुणवत्ता वाली मैचमेकिंग सेवा Q3 2026 में लॉन्च हो रही है। समाज के भीतर अपना जीवन साथी खोजने के लिए जुड़े रहें।",
    getNotified: "सूचना प्राप्त करें",
    socialUnity: "सामाजिक एकता",
    communityDesc: "हमारी सामुदायिक उत्थान यात्रा में 5,000+ सदस्यों के साथ जुड़ें।",
    searchPlaceholder: "नौकरियां, कार्यक्रम खोजें...",
    home: "होम",
    applyNow: "अभी आवेदन करें",
    bookNow: "अभी बुक करें",
    connectBtn: "जुड़ें",
    readMore: "और पढ़ें"
  }
};

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [lang, setLang] = useState('EN');

  const t = translations[lang];

  const renderContent = () => {
    switch(activeTab) {
      case 'Dashboard':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="glass rounded-3xl p-8 relative overflow-hidden h-[300px] flex flex-col justify-end">
              <div className="absolute inset-0 bg-gradient-to-t from-bg-deep to-transparent z-10"></div>
              {/* Note: In a real app, I'd use the generated image here */}
              <div className="absolute inset-0 bg-primary-saffron/10 flex items-center justify-center">
                <Flame size={120} className="text-primary-saffron opacity-20 animate-pulse" />
              </div>
              <div className="relative z-20">
                <span className="text-primary-saffron font-bold text-sm tracking-widest uppercase">{t.welcome}</span>
                <h1 className="text-5xl font-black mt-2 leading-tight">{t.empowering} <br /> <span className="gradient-text">{t.brahmanCommunity}</span></h1>
                <p className="text-text-secondary mt-4 max-w-xl">{t.heroDesc}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">{t.featuredOpps}</h2>
                  <button className="text-primary-saffron text-sm font-semibold flex items-center gap-1 hover:underline">{t.viewAll} <ChevronRight size={16}/></button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <JobCard title="Software Architect" company="Saraswati Tech" location="Pune, India" type="Full-time" salary="₹25L - 35L" applyText={t.applyNow} />
                  <JobCard title="Strategic Consultant" company="Veda Analytics" location="Bangalore" type="Remote" salary="₹18L - 24L" applyText={t.applyNow} />
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">{t.dharmaServices}</h2>
                <div className="space-y-4">
                  <ServiceCard title="Satyanarayan Pooja" price="5100" duration="4 Hours" rating="4.9" bookText={t.bookNow} />
                  <ServiceCard title="Grah Shanti Anushthan" price="21000" duration="2 Days" rating="5.0" bookText={t.bookNow} />
                  <ServiceCard title="Vedic Wedding Rituals" price="51000" duration="Full Event" rating="4.8" bookText={t.bookNow} />
                </div>
              </div>
            </div>
          </div>
        );
      case 'Careers':
        return (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-black">{t.careersTitle}</h1>
              <button className="px-6 py-3 bg-primary-saffron text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(255,153,51,0.4)] transition-all">{t.postOpening}</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               <JobCard title="Frontend Developer" company="Agni Softwares" location="Mumbai" type="Contract" salary="₹80k/mo" applyText={t.applyNow} />
               <JobCard title="Digital Marketing Lead" company="Bharat Media" location="Delhi" type="Full-time" salary="₹12L - 15L" applyText={t.applyNow} />
               <JobCard title="Chartered Accountant" company="Vyas & Sons" location="Ahmedabad" type="Full-time" salary="₹20L+" applyText={t.applyNow} />
               <JobCard title="Vedic Teacher" company="Gurukul International" location="Hrishikesh" type="Part-time" salary="₹40k/mo" applyText={t.applyNow} />
               <JobCard title="Social Media Manager" company="Dharma Foundation" location="Remote" type="Freelance" salary="₹25k/task" applyText={t.applyNow} />
               <JobCard title="App Developer" company="Setu Tech" location="Hyderabad" type="Full-time" salary="₹15L - 25L" applyText={t.applyNow} />
            </div>
          </div>
        );
      case 'Connect':
        return (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-black">{t.connectTitle}</h1>
              <div className="flex gap-2">
                <div className="glass px-4 py-2 rounded-xl text-sm flex items-center gap-2 border-primary-saffron/20">
                  <Search size={16} className="text-text-secondary" />
                  <input type="text" placeholder={t.searchMembers} className="bg-transparent border-none outline-none text-white w-40" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
               <PersonCard name="Arjun Sharma" role="Software Engineer" location="Bangalore" bio="Passionate about AI and Vedic Mathematics. Looking to mentor young talent." connectText={t.connectBtn} />
               <PersonCard name="Pandit Ravi Vyas" role="Vedic Scholar" location="Varanasi" bio="Expert in Shukla Yajurveda and Astrological guidance." connectText={t.connectBtn} />
               <PersonCard name="Priya Mishra" role="Entrepreneur" location="Delhi" bio="Founder of 'Sanskriti Foods'. Empowering women through home industries." connectText={t.connectBtn} />
               <PersonCard name="Rohan Chaturvedi" role="Civil Service" location="LBSNAA" bio="Focused on social reform and community upliftment through education." connectText={t.connectBtn} />
               <PersonCard name="Deepak Pandey" role="Marketing Head" location="Mumbai" bio="Helping Brahman businesses scale through digital strategies." connectText={t.connectBtn} />
               <PersonCard name="Amit Tiwari" role="Doctor" location="Lucknow" bio="Specializing in Ayurveda and Modern Medicine integration." connectText={t.connectBtn} />
            </div>
          </div>
        );
      case 'Dharma':
        return (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-black gradient-text">{t.dharmaTitle}</h1>
              <button className="px-6 py-3 border border-accent-red/50 text-accent-red font-bold rounded-xl hover:bg-accent-red hover:text-white transition-all">{t.listServices}</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-3xl space-y-6">
                <h2 className="text-2xl font-bold flex items-center gap-2"><Flame className="text-accent-red" /> {t.ritualBookings}</h2>
                <div className="space-y-4">
                  <ServiceCard title="Sanskrit Classes" price="1200/mo" duration="Weekly" rating="4.9" bookText={t.bookNow} />
                  <ServiceCard title="Vedic Marriage Rituals" price="51001" duration="Full Event" rating="5.0" bookText={t.bookNow} />
                  <ServiceCard title="Astrology Consultation" price="1100" duration="1 Hour" rating="4.7" bookText={t.bookNow} />
                  <ServiceCard title="Vastu Shastra Consultation" price="5000" duration="Site Visit" rating="4.9" bookText={t.bookNow} />
                </div>
              </div>
              <div className="glass p-8 rounded-3xl space-y-6">
                <h2 className="text-2xl font-bold flex items-center gap-2"><Star className="text-secondary-gold" /> {t.upcomingEvents}</h2>
                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-xl border-l-4 border-primary-saffron">
                    <p className="text-xs text-primary-saffron font-bold">APRIL 15, 2026</p>
                    <h4 className="font-bold">Hanuman Jayanti Maha-Havan</h4>
                    <p className="text-xs text-text-secondary">Community ground, Mumbai • 8:00 AM onwards</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border-l-4 border-secondary-gold">
                    <p className="text-xs text-secondary-gold font-bold">MAY 02, 2026</p>
                    <h4 className="font-bold">Vedic Career Guidance Seminar</h4>
                    <p className="text-xs text-text-secondary">Online / Zoom • 11:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Gyan':
        return (
          <div className="space-y-8">
             <div className="flex justify-between items-center">
              <h1 className="text-4xl font-black">{t.gyanTitle}</h1>
              <div className="glass px-4 py-2 rounded-xl border-primary-saffron/20 flex items-center gap-2">
                <BookOpen size={18} className="text-primary-saffron" />
                <span className="text-sm font-semibold">{t.resources}</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Introduction to Vedas", type: "PDF", category: "Philosophy" },
                { title: "Panini Sanskrit Grammar", type: "Video", category: "Language" },
                { title: "Upanishads Simplified", type: "Article", category: "Spirituality" },
                { title: "Vedic Mathematics Course", type: "Full Course", category: "Skill Development" },
                { title: "Indian Ethics in Business", type: "Whitepaper", category: "Professional" },
                { title: "Panchang & Muhurat Guide", type: "Interactive", category: "Practice" }
              ].map((item, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.02 }} className="glass p-6 rounded-2xl flex flex-col gap-3 group border border-white/5 hover:border-primary-saffron/30 transition-all cursor-pointer">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary-saffron bg-primary-saffron/10 px-2 py-1 rounded">{item.type}</span>
                    <span className="text-xs text-text-secondary">{item.category}</span>
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-primary-saffron transition-colors">{item.title}</h3>
                  <p className="text-text-secondary text-xs">Learn the core principles of Brahmanical heritage and modern wisdom.</p>
                  <div className="flex items-center gap-2 mt-2 text-primary-saffron text-sm font-bold">
                    {t.readMore} <ChevronRight size={16} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'Matrimony':
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center">
            <div className="w-24 h-24 bg-gradient-to-tr from-accent-red to-primary-saffron rounded-full flex items-center justify-center animate-pulse">
               <Star size={48} className="text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-black">{t.matrimonyTitle}</h1>
              <p className="text-text-secondary mt-2 max-w-md">{t.matrimonyDesc}</p>
            </div>
            <button className="px-8 py-4 bg-white/5 border border-primary-saffron/30 text-primary-saffron font-bold rounded-2xl hover:bg-primary-saffron/10 transition-all">{t.getNotified}</button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-bg-deep flex">
      {/* Sidebar - Desktop Only */}
      <aside className="w-64 bg-bg-sidebar hidden md:flex flex-col border-r border-glass-border fixed h-full z-50">
        <div className="p-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-saffron rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,153,51,0.3)]">
            <Flame size={24} className="text-black" />
          </div>
          <span className="text-xl font-black tracking-tighter brand-font">AGNI SETU</span>
        </div>
        
        <nav className="flex-1 mt-4">
          <SidebarItem icon={LayoutDashboard} label={t.dashboard} active={activeTab === 'Dashboard'} onClick={() => setActiveTab('Dashboard')} />
          <SidebarItem icon={Briefcase} label={t.careers} active={activeTab === 'Careers'} onClick={() => setActiveTab('Careers')} />
          <SidebarItem icon={Users} label={t.connect} active={activeTab === 'Connect'} onClick={() => setActiveTab('Connect')} />
          <SidebarItem icon={Flame} label={t.dharma} active={activeTab === 'Dharma'} onClick={() => setActiveTab('Dharma')} />
          <SidebarItem icon={BookOpen} label={t.gyan} active={activeTab === 'Gyan'} onClick={() => setActiveTab('Gyan')} />
          <SidebarItem icon={Star} label={t.matrimony} active={activeTab === 'Matrimony'} onClick={() => setActiveTab('Matrimony')} />
        </nav>

        <div className="p-6">
          <div className="glass p-4 rounded-xl text-xs space-y-3">
            <p className="font-bold text-primary-saffron uppercase">{t.socialUnity}</p>
            <p className="text-text-secondary leading-relaxed">{t.communityDesc}</p>
            <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
               <div className="w-3/4 bg-primary-saffron h-full"></div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-0 md:ml-64 min-h-screen">
        {/* Top Nav */}
        <header className="h-20 glass sticky top-0 z-40 px-4 md:px-8 flex items-center justify-between border-b border-glass-border">
          {/* Mobile Branding */}
          <div className="flex md:hidden items-center gap-2">
            <div className="w-8 h-8 bg-primary-saffron rounded-lg flex items-center justify-center">
              <Flame size={18} className="text-black" />
            </div>
            <span className="text-lg font-black tracking-tighter brand-font">AGNI SETU</span>
          </div>

          <div className="hidden md:flex items-center gap-2 glass px-4 py-2 rounded-xl text-sm border-white/5">
            <Search size={18} className="text-text-secondary" />
            <input type="text" placeholder={t.searchPlaceholder} className="bg-transparent border-none outline-none text-white w-64" />
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <button className="md:hidden text-text-secondary">
              <Search size={20} />
            </button>

            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'EN' ? 'HI' : 'EN')}
              className="text-xs font-bold px-2 py-1 rounded bg-white/10 text-white hover:bg-primary-saffron hover:text-black transition-colors"
            >
              {lang === 'EN' ? 'HI' : 'EN'}
            </button>

            <button className="relative text-text-secondary hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent-red rounded-full"></span>
            </button>
            <div className="h-8 w-[1px] bg-glass-border hidden md:block"></div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="text-right hidden md:block">
                <p className="text-sm font-bold group-hover:text-primary-saffron transition-colors">Yash Sharma</p>
                <p className="text-[10px] text-text-secondary">Administrator</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:border-primary-saffron transition-all">
                <User size={20} />
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Section */}
        <div className="p-4 md:p-8 pb-20 md:pb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Bottom Navigation - Mobile Only */}
      <nav className="fixed bottom-0 left-0 right-0 h-16 glass z-50 flex items-center justify-around px-4 md:hidden border-t border-glass-border">
        {[
          { id: 'Dashboard', label: t.home, icon: LayoutDashboard },
          { id: 'Careers', label: t.careers, icon: Briefcase },
          { id: 'Connect', label: t.connect, icon: Users },
          { id: 'Dharma', label: t.dharma, icon: Flame },
          { id: 'Gyan', label: t.gyan, icon: BookOpen }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center gap-1 transition-all ${
              activeTab === item.id ? 'text-primary-saffron' : 'text-text-secondary'
            }`}
          >
            <item.icon size={22} />
            <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

export default App;
