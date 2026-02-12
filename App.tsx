
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from '../pages/Home';
import BlogPost from '../pages/BlogPost';
import CategoryPage from '../pages/CategoryPage';
import BlogArchive from '../pages/BlogArchive';
import DealsHub from '../pages/DealsHub';
import { Sparkles, MessageCircle, Heart } from 'lucide-react';
import { PromiseSection } from './components/PromiseSection';

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogArchive />} />
          <Route path="/deals" element={<DealsHub />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/about" element={
            <div className="max-w-5xl mx-auto px-4 py-24 sm:py-32">
              <div className="text-center mb-20">
                <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-primary text-xs font-black uppercase tracking-widest mb-8">
                  <Sparkles size={14} />
                  <span>The Simple Way to Buy</span>
                </div>
                <h1 className="text-5xl sm:text-7xl font-black text-white mb-8 tracking-tighter">
                  Tech is confusing. <br />
                  <span className="text-gradient">We make it simple.</span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-medium">
                  We started AffiliHub because we were tired of "tech-speak" and confusing jargon. We're just a small team of enthusiasts who believe that everyone deserves the best gear without the headache.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                 <div className="bg-dark-800 p-10 rounded-[2.5rem] border border-white/5 shadow-2xl relative group overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-2xl group-hover:scale-150 transition-all"></div>
                    <Heart className="text-primary mb-6" size={32} />
                    <h3 className="text-4xl font-black text-white mb-2">100%</h3>
                    <p className="text-gray-500 text-xs font-black uppercase tracking-widest">Honest Advice</p>
                    <p className="mt-4 text-gray-400 text-sm leading-relaxed">No fancy words, just real talk about what works and what doesn't.</p>
                 </div>
                 <div className="bg-dark-800 p-10 rounded-[2.5rem] border border-white/5 shadow-2xl relative group overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 blur-2xl group-hover:scale-150 transition-all"></div>
                    <MessageCircle className="text-accent mb-6" size={32} />
                    <h3 className="text-4xl font-black text-white mb-2">50k+</h3>
                    <p className="text-gray-500 text-xs font-black uppercase tracking-widest">Happy Beginners</p>
                    <p className="mt-4 text-gray-400 text-sm leading-relaxed">We've helped thousands find their first earbuds, lamps, and tools.</p>
                 </div>
                 <div className="bg-dark-800 p-10 rounded-[2.5rem] border border-white/5 shadow-2xl relative group overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-2xl group-hover:scale-150 transition-all"></div>
                    <Sparkles className="text-primary mb-6" size={32} />
                    <h3 className="text-4xl font-black text-white mb-2">Zero</h3>
                    <p className="text-gray-500 text-xs font-black uppercase tracking-widest">Jargon Policy</p>
                    <p className="mt-4 text-gray-400 text-sm leading-relaxed">If we can't explain it simply, we won't talk about it at all.</p>
                 </div>
              </div>

              <PromiseSection />
            </div>
          } />
          <Route path="/privacy" element={
            <div className="max-w-3xl mx-auto px-4 py-32 prose-dark">
              <h1 className="text-4xl font-black text-white mb-8">Privacy Policy</h1>
              <p>Welcome to AffiliHub. We respect your privacy and are committed to protecting your personal data.</p>
              <h2>1. Information We Collect</h2>
              <p>We collect information you provide directly to us when you subscribe to our newsletter or contact us via email.</p>
              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our services, and to communicate with you.</p>
            </div>
          } />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
