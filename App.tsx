import React, { useState, useEffect, useRef } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SERVICES_DATA } from './constants';
import { ServiceCard } from './components/ServiceCard';

const PORTFOLIO_IMAGES = [
  'https://i.ibb.co/GvPnspx2/58b70dc4-c9ce-4696-9aa2-9e2c38d95af9.jpg',
  'https://i.ibb.co/9kHF27b7/80dacb68-160c-4710-8687-f4234072f5ba.png',
  'https://i.ibb.co/kgpxZSQ1/342dce71-3b79-4efc-8af3-f30d3a246ccc.jpg',
  'https://i.ibb.co/Mk660DrQ/32016419-5d2-4639-82f6-bd3c77887207.jpg',
  'https://i.ibb.co/8gw0VNDR/fbfb7fd9-8d15-41bc-b198-21d771180ab6.jpg',
  'https://i.ibb.co/hx18JXrh/0a753fec-10d8-4d90-b946-caeb192444f0.jpg',
  'https://i.ibb.co/60t65wSz/Whisk-975660898b.jpg',
];

const NAV_LINKS = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 10);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      e.preventDefault();
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
          const offsetTop = targetElement.offsetTop;
          window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
          });
      }
      setIsMenuOpen(false);
    };
  
    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
      setIsMenuOpen(false);
    };
  
    return (
      <>
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" onClick={handleLogoClick} className="text-2xl font-black tracking-wider uppercase transition-colors duration-300 z-50">
                    <span className={scrolled || isMenuOpen ? 'text-gray-900' : 'text-white'}>ACHDOUZ COMPANY LLC</span>
                </a>
                <nav className="hidden md:flex space-x-8">
                    {NAV_LINKS.map(link => (
                        <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href.substring(1))} className={`${scrolled ? 'text-gray-600' : 'text-gray-300'} hover:text-red-600 transition-colors duration-300`}>{link.label}</a>
                    ))}
                </nav>
                <div className="md:hidden z-50">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                        <svg className={`h-6 w-6 transition-transform duration-300 ${scrolled || isMenuOpen ? 'text-gray-900' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                           ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                           )}
                        </svg>
                    </button>
                </div>
            </div>
        </header>
        {/* Mobile Menu */}
        <div className={`fixed inset-0 z-40 bg-white transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
            <div className="flex flex-col items-center justify-center h-full">
                <nav className="flex flex-col space-y-8 text-center">
                    {NAV_LINKS.map(link => (
                         <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href.substring(1))} className="text-2xl font-bold text-gray-800 hover:text-red-600 transition-colors duration-300">{link.label}</a>
                    ))}
                </nav>
            </div>
        </div>
      </>
    );
  };

const Hero = () => {
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/60t65wSz/Whisk-975660898b.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 px-4">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-widest text-glow">Turn Vision into Reality</h2>
                <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-xl sm:max-w-3xl mx-auto">
                    We combine creativity, technology, and global media expertise to elevate your brand.
                </p>
                <a 
                    href="#services" 
                    onClick={(e) => handleLinkClick(e, 'services')}
                    className="mt-8 inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-sm uppercase tracking-wider hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
                >
                    Explore Our Services
                </a>
            </div>
        </section>
    );
};

const About = () => {
    const aboutRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '0px',
                threshold: 0.2
            }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    return (
    <section id="about" className="py-12 sm:py-20 bg-white">
      <div ref={aboutRef} className={`container mx-auto px-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                  About the <span className="text-red-600 text-glow">CEO & Creator</span>
              </h3>
              <div className="text-gray-600 text-lg leading-relaxed space-y-6">
                  <p>
                      Achdouz Company LLC is the driving force and creative brain behind a new era of design, technology, and global entertainment distribution. As the CEO and Creator, Achdouz Company LLC has built a reputation for delivering powerful solutions that help artists, filmmakers, entrepreneurs, and businesses reach worldwide audiences.
                  </p>
                  <p>
                      From humble beginnings in graphic design and digital development, the company has grown into a multi-service creative agency and distributor, offering everything from logo design, branding, websites, and apps to film & series distribution on major streaming platforms.
                  </p>
                  <p>
                      Under the leadership of Achdouz Company LLC, the company also expanded into music promotion, social media growth, magazine placements, press release distribution, and visual production services, providing creators with a full toolkit to launch, grow, and succeed.
                  </p>
                  <p>
                      The vision is simple: empower creators and businesses with the tools, exposure, and platforms they need to thrive in today’s competitive digital world.
                  </p>
              </div>
          </div>
      </div>
    </section>
  )
};

  const Services = () => {
    const [pricesVisibility, setPricesVisibility] = useState<{ [key: string]: boolean }>({
      'Graphic Design & Branding': false,
      'Web & App Development': false,
      'Film & Series Distribution': false,
      'Promotion & Media Exposure': false,
    });
  
    const togglePrices = (title: string) => {
      if (pricesVisibility.hasOwnProperty(title)) {
        setPricesVisibility(prev => ({ ...prev, [title]: !prev[title] }));
      }
    };
  
    return (
      <section id="services" className="py-12 sm:py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white">Our Services</h3>
            <p className="text-gray-300 mt-2">End-to-end solutions to grow your brand. <span className="hidden md:inline text-gray-500 italic">Click on service cards to see price estimates.</span></p>
            <div className="mt-4 h-1 w-24 bg-red-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES_DATA.map((service, index) => {
              const isClickable = pricesVisibility.hasOwnProperty(service.title);
              return (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  items={service.items}
                  isClickable={isClickable}
                  showPrices={isClickable && pricesVisibility[service.title]}
                  onClick={isClickable ? () => togglePrices(service.title) : undefined}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  };

const Portfolio = () => (
    <section id="portfolio" className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">From the CEO's Desk</h3>
          <p className="text-gray-600 mt-2">A showcase of projects that represent our creative vision.</p>
          <div className="mt-4 h-1 w-24 bg-red-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_IMAGES.map((src, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg h-64 sm:h-80">
              <img 
                src={src} 
                alt={`Portfolio item ${index + 1}`} 
                className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );


  

const PrivacyPolicyModal = ({ show, onClose }: { show: boolean, onClose: () => void }) => {
    if (!show) {
      return null;
    }
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center p-4 transition-opacity duration-300" onClick={onClose}>
        <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] overflow-y-auto relative text-left" onClick={(e) => e.stopPropagation()}>
          <div className="p-6 sm:p-8">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-900 transition-colors duration-300">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="text-gray-600 space-y-4">
              <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
              <p>This is a placeholder for the Privacy Policy of Achdouz Company LLC ("we," "us," or "our"). This document should inform users about how we collect, use, and protect their personal information. It is crucial to replace this placeholder text with an actual, legally compliant privacy policy.</p>
              <h3 className="font-bold text-gray-800 pt-2">1. Information We Collect</h3>
              <p>This section should detail the types of information you collect from users, such as names, email addresses, browsing data, etc., both automatically and through user input.</p>
              <h3 className="font-bold text-gray-800 pt-2">2. How We Use Your Information</h3>
              <p>Explain the purposes for which you collect user data, such as to provide services, for marketing, to improve the website, or to communicate with users.</p>
              <h3 className="font-bold text-gray-800 pt-2">3. Information Sharing and Disclosure</h3>
              <p>Clarify if and with whom you share user data (e.g., third-party service providers, legal authorities). Be transparent about these practices.</p>
              <h3 className="font-bold text-gray-800 pt-2">4. Data Security</h3>
              <p>Describe the measures you take to protect user data from unauthorized access, such as encryption and secure servers.</p>
              <h3 className="font-bold text-gray-800 pt-2">5. Your Rights</h3>
              <p>Inform users of their rights regarding their data, such as the right to access, correct, or delete their personal information.</p>
              <h3 className="font-bold text-gray-800 pt-2">6. Contact Us</h3>
              <p>Provide contact information for users who have questions about this privacy policy. You can use the email <a href="mailto:achdouzcompanyllc@gmail.com" className="text-red-600 hover:underline">achdouzcompanyllc@gmail.com</a>.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

const Footer = () => {
    const [showPrivacyModal, setShowPrivacyModal] = useState(false);

    const handlePrivacyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setShowPrivacyModal(true);
    };

    return (
        <>
            <footer className="bg-black text-gray-400 py-8">
                <div className="container mx-auto px-6 text-center">
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
                        <p>&copy; {new Date().getFullYear()} Achdouz Company LLC. All Rights Reserved.</p>
                        <span className="hidden sm:inline">|</span>
                        <a href="#" onClick={handlePrivacyClick} className="hover:text-white transition-colors duration-300 underline-offset-4 hover:underline">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </footer>
            <PrivacyPolicyModal show={showPrivacyModal} onClose={() => setShowPrivacyModal(false)} />
        </>
    );
};

function App() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;