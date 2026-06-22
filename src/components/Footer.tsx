import { Link } from 'react-router-dom';
import { navLinks, companyInfo } from '../data/siteData';

export const Footer = () => {
  return (
    <footer className="bg-primary-container text-on-primary-fixed w-full border-t-4 border-secondary">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter px-5 md:px-margin-desktop py-16 md:py-section-gap">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <div className="font-headline text-headline-md font-bold text-on-primary">
            {companyInfo.name}
          </div>
          <p className="font-body text-body-md text-on-primary-container">
            {companyInfo.tagline}
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-secondary-fixed uppercase tracking-wider text-sm">
            Quick Links
          </h4>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-on-primary-container hover:text-secondary-fixed-dim hover:translate-x-1 transition-transform duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-secondary-fixed uppercase tracking-wider text-sm">
            Services
          </h4>
          <Link to="/spray-foam" className="text-on-primary-container hover:text-secondary-fixed-dim transition-colors">
            Spray Foam Insulation
          </Link>
          <Link to="/services" className="text-on-primary-container hover:text-secondary-fixed-dim transition-colors">
            Drywall Installation
          </Link>
          <Link to="/services" className="text-on-primary-container hover:text-secondary-fixed-dim transition-colors">
            Professional Painting
          </Link>
        </div>

        {/* Connect */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-secondary-fixed uppercase tracking-wider text-sm">
            Connect
          </h4>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <span className="material-symbols-outlined">public</span>
            </a>
            <a
              href={`tel:${companyInfo.phone}`}
              className="w-10 h-10 rounded bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <span className="material-symbols-outlined">call</span>
            </a>
          </div>
          <p className="text-on-primary-container text-sm mt-2">
            {companyInfo.phone}
          </p>
          <p className="text-on-primary-container text-sm">
            {companyInfo.email}
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-margin-desktop py-8 border-t border-white/5 text-center text-sm text-on-primary-container">
        © {companyInfo.year} {companyInfo.name}. {companyInfo.serviceArea} Licensed &amp; Insured.
      </div>
    </footer>
  );
};
