import React, { useState, useEffect, useRef } from 'react';
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
                <a href="#" onClick={handleLogoClick} className="text-xl font-black tracking-wider uppercase transition-colors duration-300 z-50">
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
                <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
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
    <section id="about" className="py-20 bg-white">
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
      <section id="services" className="py-20 bg-black">
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
    <section id="portfolio" className="py-20 bg-white">
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


  

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-8">
            <div className="container mx-auto px-6 text-center">
                <p>&copy; 2025 Achdouz Company LLC. All Rights Reserved.</p>
            </div>
        </footer>
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
    </div>
  );
}

export default App;