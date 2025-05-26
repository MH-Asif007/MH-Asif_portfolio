import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djYgaDJ2LTdINjJ2LTIgSDMydjEwSDIydjNhOSA5IDAgMCAxIDAtNnYtN2gydjYgaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>

      <div className="container-section relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-6 py-2 border border-teal-400 rounded-full text-teal-400 mb-6 text-sm font-medium">
            SQA Engineer
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 fade-in">
            Mahamudul Hasan Asif
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto slide-up">
            Passionate about delivering flawless software through comprehensive testing strategies and quality assurance expertise
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up" style={{ animationDelay: '0.2s' }}>
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
            <a href="#about" className="btn-outline text-white border-white hover:bg-white hover:text-slate-900 group">
              Learn More
              <ArrowRight size={18} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <div className="w-5 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;