import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks, companyInfo } from '../data/siteData';
import { asset } from '../utils/assetPath';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 w-full z-50 backdrop-blur-md border-b border-outline-variant/30 shadow-sm transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-surface-white/95 py-2'
          : 'bg-surface-white/90 py-4'
      }`}
    >
      <div className="flex justify-between items-center px-5 md:px-margin-desktop max-w-[1440px] mx-auto w-full">
        <Link to="/" className="flex items-center shrink-0">
          <img src={asset('/images/logo.png')} alt={companyInfo.name} className="h-16 md:h-20 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`font-headline text-button uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'text-secondary font-bold border-b-2 border-secondary pb-1'
                    : 'text-on-surface-variant hover:text-secondary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden md:inline-block bg-secondary-container text-on-secondary-container px-6 py-2 rounded font-headline text-button uppercase tracking-wider hover:brightness-110 transition-all duration-300"
          >
            Get a Quote
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-primary transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-primary transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-primary transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden bg-surface-white border-t border-outline-variant/30 px-5 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="font-headline text-button uppercase tracking-wider text-on-surface-variant hover:text-secondary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-secondary-container text-on-secondary-container px-6 py-3 rounded font-headline text-button uppercase tracking-wider text-center"
          >
            Get a Quote
          </Link>
        </nav>
      )}
    </header>
  );
};
