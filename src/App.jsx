import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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

const JobCard = ({ title, company, location, type, salary, t }) => (
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
      {t('careers.apply_now')}
    </button>
  </motion.div>
);

const PersonCard = ({ name, role, location, bio, t }) => (
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
      {t('community.connect')}
    </button>
  </motion.div>
);

const ServiceCard = ({ title, price, duration, rating, t }) => (
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
      <p className="text-[10px] text-text-secondary">{t('dharma.book_now')}</p>
    </div>
  </motion.div>
);

function App() {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('Dashboard');

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'Dashboard':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="glass rounded-3xl p-6 md:p-8 relative overflow-hidden h-[300px] flex flex-col justify-end">
              <div className="absolute inset-0 bg-gradient-to-t from-bg-deep to-transparent z-10"></div>
              {/* Note: In a real app, I'd use the generated image here */}
              <div className="absolute inset-0 bg-primary-saffron/10 flex items-center justify-center">
                <Flame size={120} className="text-primary-saffron opacity-20 animate-pulse" />
              </div>
              <div className="relative z-20">
                <span className="text-primary-saffron font-bold text-xs md:text-sm tracking-widest uppercase">{t('dashboard.welcome')}</span>
                <h1 className="text-3xl md:text-5xl font-black mt-2 leading-tight break-words">{t('dashboard.title_main')} <br /> <span className="gradient-text">{t('dashboard.title_span')}</span></h1>
                <p className="text-text-secondary mt-4 max-w-xl text-sm md:text-base">{t('dashboard.description')}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">{t('dashboard.featured')}</h2>
                  <button className="text-primary-saffron text-sm font-semibold flex items-center gap-1 hover:underline">{t('dashboard.view_all')} <ChevronRight size={16}/></button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <JobCard title={t('jobs.arch')} company={t('jobs.saraswati')} location={t('jobs.pune')} type={t('careers.full_time')} salary={t('jobs.sal_arch')} t={t} />
                  <JobCard title={t('jobs.strat')} company={t('jobs.veda')} location={t('jobs.blr')} type={t('careers.remote')} salary={t('jobs.sal_strat')} t={t} />
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">{t('dashboard.dharma_services')}</h2>
                <div className="space-y-4">
                  <ServiceCard title={t('dharma.service_satyanarayan')} price="5100" duration={t('dharma.4_hours')} rating="4.9" t={t} />
                  <ServiceCard title={t('dharma.service_grah_shanti')} price="21000" duration={t('dharma.2_days')} rating="5.0" t={t} />
                  <ServiceCard title={t('dharma.service_wedding')} price="51000" duration={t('dharma.full_event')} rating="4.8" t={t} />
                </div>
              </div>
            </div>
          </div>
        );
      case 'Careers':
        return (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4">
              <h1 className="text-3xl md:text-4xl font-black break-words">{t('careers.title')}</h1>
              <button className="w-full sm:w-auto px-6 py-3 bg-primary-saffron text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(255,153,51,0.4)] transition-all">{t('careers.post_opening')}</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               <JobCard title={t('jobs.front')} company={t('jobs.agni_soft')} location={t('jobs.mum')} type={t('careers.contract')} salary={t('jobs.sal_front')} t={t} />
               <JobCard title={t('jobs.mkt_lead')} company={t('jobs.bharat')} location={t('jobs.del')} type={t('careers.full_time')} salary={t('jobs.sal_mkt')} t={t} />
               <JobCard title={t('jobs.ca')} company={t('jobs.vyas')} location={t('jobs.ahmed')} type={t('careers.full_time')} salary={t('jobs.sal_ca')} t={t} />
               <JobCard title={t('jobs.teacher')} company={t('jobs.gurukul')} location={t('jobs.hrishi')} type={t('careers.part_time')} salary={t('jobs.sal_teacher')} t={t} />
               <JobCard title={t('jobs.sm_manager')} company={t('jobs.dharma_found')} location={t('careers.remote')} type={t('careers.freelance')} salary={t('jobs.sal_sm')} t={t} />
               <JobCard title={t('jobs.app_dev')} company={t('jobs.setu_tech')} location={t('jobs.hyd')} type={t('careers.full_time')} salary={t('jobs.sal_app')} t={t} />
            </div>
          </div>
        );
      case 'Connect':
        return (
          <div className="space-y-6 md:space-y-8">
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4">
              <h1 className="text-3xl md:text-4xl font-black break-words">{t('community.title')}</h1>
              <div className="flex gap-2 w-full sm:w-auto">
                <div className="glass px-4 py-2 rounded-xl text-sm flex items-center gap-2 border-primary-saffron/20 w-full sm:w-64">
                  <Search size={16} className="text-text-secondary" />
                  <input type="text" placeholder={t('community.search_placeholder')} className="bg-transparent border-none outline-none text-white w-full" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
               <PersonCard name={t('people.arjun')} role={t('people.arjun_role')} location={t('jobs.blr')} bio={t('community.mentor_bio')} t={t} />
               <PersonCard name={t('people.pandit_ravi')} role={t('people.pandit_role')} location={t('people.varanasi')} bio={t('community.scholar_bio')} t={t} />
               <PersonCard name={t('people.priya')} role={t('people.priya_role')} location={t('jobs.del')} bio={t('community.entrepreneur_bio')} t={t} />
               <PersonCard name={t('people.rohan')} role={t('people.rohan_role')} location={t('people.lbsnaa')} bio={t('community.service_bio')} t={t} />
               <PersonCard name={t('people.deepak')} role={t('people.deepak_role')} location={t('jobs.mum')} bio={t('community.marketing_bio')} t={t} />
               <PersonCard name={t('people.amit')} role={t('people.amit_role')} location={t('people.lucknow')} bio={t('community.doctor_bio')} t={t} />
            </div>
          </div>
        );
      case 'Dharma':
        return (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4">
              <h1 className="text-3xl md:text-4xl font-black gradient-text break-words">{t('dharma.title')}</h1>
              <button className="w-full sm:w-auto px-6 py-3 border border-accent-red/50 text-accent-red font-bold rounded-xl hover:bg-accent-red hover:text-white transition-all">{t('dharma.list_services')}</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-3xl space-y-6">
                <h2 className="text-2xl font-bold flex items-center gap-2"><Flame className="text-accent-red" /> {t('dharma.ritual_bookings')}</h2>
                <div className="space-y-4">
                  <ServiceCard title={t('dharma.service_sanskrit')} price="1200/mo" duration={t('dharma.weekly')} rating="4.9" t={t} />
                  <ServiceCard title={t('dharma.service_wedding')} price="51001" duration={t('dharma.full_event')} rating="5.0" t={t} />
                  <ServiceCard title={t('dharma.service_astrology')} price="1100" duration={t('dharma.1_hour')} rating="4.7" t={t} />
                  <ServiceCard title={t('dharma.service_vastu')} price="5000" duration={t('dharma.site_visit')} rating="4.9" t={t} />
                </div>
              </div>
              <div className="glass p-8 rounded-3xl space-y-6">
                <h2 className="text-2xl font-bold flex items-center gap-2"><Star className="text-secondary-gold" /> {t('dharma.upcoming_events')}</h2>
                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-xl border-l-4 border-primary-saffron">
                    <p className="text-xs text-primary-saffron font-bold">{t('dharma.april_15')}</p>
                    <h4 className="font-bold">{t('dharma.event_hanuman')}</h4>
                    <p className="text-xs text-text-secondary">{t('dharma.mumbai_ground')}</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border-l-4 border-secondary-gold">
                    <p className="text-xs text-secondary-gold font-bold">{t('dharma.may_02')}</p>
                    <h4 className="font-bold">{t('dharma.event_career')}</h4>
                    <p className="text-xs text-text-secondary">{t('dharma.online_zoom')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Gyan':
        return (
          <div className="space-y-8">
             <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4">
              <h1 className="text-3xl md:text-4xl font-black break-words">{t('library.title')}</h1>
              <div className="glass px-4 py-2 rounded-xl border-primary-saffron/20 flex items-center gap-2">
                <BookOpen size={18} className="text-primary-saffron" />
                <span className="text-sm font-semibold">{t('library.resources')}</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: t('library_resources.intro_vedas'), type: t('library_resources.pdf'), category: t('library_resources.software') },
                { title: t('library_resources.grammar'), type: t('library_resources.video'), category: t('library_resources.language') },
                { title: t('library_resources.upanishads'), type: t('library_resources.article'), category: t('library_resources.spirituality') },
                { title: t('library_resources.math'), type: t('library_resources.course'), category: t('library_resources.skill') },
                { title: t('library_resources.ethics'), type: t('library_resources.paper'), category: t('library_resources.pro') },
                { title: t('library_resources.panchang'), type: t('library_resources.interactive'), category: t('library_resources.practice') }
              ].map((item, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.02 }} className="glass p-6 rounded-2xl flex flex-col gap-3 group border border-white/5 hover:border-primary-saffron/30 transition-all cursor-pointer">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary-saffron bg-primary-saffron/10 px-2 py-1 rounded">{item.type}</span>
                    <span className="text-xs text-text-secondary">{item.category}</span>
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-primary-saffron transition-colors">{item.title}</h3>
                  <p className="text-text-secondary text-xs">{t('library.description')}</p>
                  <div className="flex items-center gap-2 mt-2 text-primary-saffron text-sm font-bold">
                    {t('library.read_more')} <ChevronRight size={16} />
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
              <h1 className="text-4xl font-black">{t('matrimony.title')}</h1>
              <p className="text-text-secondary mt-2 max-w-md">{t('matrimony.description')}</p>
            </div>
            <button className="px-8 py-4 bg-white/5 border border-primary-saffron/30 text-primary-saffron font-bold rounded-2xl hover:bg-primary-saffron/10 transition-all">{t('matrimony.get_notified')}</button>
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
          <SidebarItem icon={LayoutDashboard} label={t('nav.dashboard')} active={activeTab === 'Dashboard'} onClick={() => setActiveTab('Dashboard')} />
          <SidebarItem icon={Briefcase} label={t('nav.careers')} active={activeTab === 'Careers'} onClick={() => setActiveTab('Careers')} />
          <SidebarItem icon={Users} label={t('nav.connect')} active={activeTab === 'Connect'} onClick={() => setActiveTab('Connect')} />
          <SidebarItem icon={Flame} label={t('nav.dharma')} active={activeTab === 'Dharma'} onClick={() => setActiveTab('Dharma')} />
          <SidebarItem icon={BookOpen} label={t('nav.gyan')} active={activeTab === 'Gyan'} onClick={() => setActiveTab('Gyan')} />
          <SidebarItem icon={Star} label={t('nav.matrimony')} active={activeTab === 'Matrimony'} onClick={() => setActiveTab('Matrimony')} />
        </nav>

        <div className="p-6">
          <div className="glass p-4 rounded-xl text-xs space-y-3">
            <p className="font-bold text-primary-saffron uppercase">{t('common.social_unity')}</p>
            <p className="text-text-secondary leading-relaxed">{t('common.social_unity_desc')}</p>
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
          <div className="flex md:hidden items-center gap-2 max-w-[50%]">
            <div className="w-8 h-8 bg-primary-saffron rounded-lg flex items-center justify-center flex-shrink-0">
              <Flame size={18} className="text-black" />
            </div>
            <span className="text-base font-black tracking-tighter brand-font truncate">AGNI SETU</span>
          </div>

          <div className="hidden md:flex items-center gap-2 glass px-4 py-2 rounded-xl text-sm border-white/5">
            <Search size={18} className="text-text-secondary" />
            <input type="text" placeholder={t('common.search')} className="bg-transparent border-none outline-none text-white w-64" />
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-primary-saffron/50 transition-all text-xs font-bold"
            >
              <div className="w-5 h-5 rounded-full bg-primary-saffron/20 flex items-center justify-center text-[10px] text-primary-saffron">
                {i18n.language === 'en' ? 'हिं' : 'EN'}
              </div>
              <span className={i18n.language === 'hi' ? 'text-primary-saffron' : 'text-text-secondary'}>
                {i18n.language === 'en' ? 'हिन्दी' : 'English'}
              </span>
            </button>
            <button className="md:hidden text-text-secondary">
              <Search size={20} />
            </button>
            <button className="relative text-text-secondary hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent-red rounded-full"></span>
            </button>
            <div className="h-8 w-[1px] bg-glass-border hidden md:block"></div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="text-right hidden md:block">
                <p className="text-sm font-bold group-hover:text-primary-saffron transition-colors">{t('people.arjun')}</p>
                <p className="text-[10px] text-text-secondary">{t('common.administrator')}</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:border-primary-saffron transition-all">
                <User size={20} />
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Section */}
        <div className="p-4 md:p-8 pb-24 md:pb-20">
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
      <div className="fixed bottom-4 left-4 right-4 h-16 glass z-50 rounded-2xl md:hidden border border-glass-border shadow-2xl flex items-center justify-around px-2">
        {[
          { id: 'Dashboard', icon: LayoutDashboard },
          { id: 'Careers', icon: Briefcase },
          { id: 'Connect', icon: Users },
          { id: 'Dharma', icon: Flame },
          { id: 'Gyan', icon: BookOpen }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center justify-center gap-1.5 w-1/5 h-full rounded-xl transition-all relative ${
              activeTab === item.id ? 'text-primary-saffron' : 'text-text-secondary'
            }`}
          >
            {activeTab === item.id && (
              <motion.div 
                layoutId="activeTab"
                className="absolute -top-1 w-8 h-1 bg-primary-saffron rounded-full"
              />
            )}
            <item.icon size={22} className={activeTab === item.id ? 'animate-bounce-subtle' : ''} />
            <span className="text-[10px] font-bold uppercase tracking-tight truncate">{item.id === 'Dashboard' ? t('nav.home') : t(`nav.${item.id.toLowerCase()}`)}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
