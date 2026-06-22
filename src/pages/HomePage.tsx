import { Link } from 'react-router-dom';
import { TrustBadges } from '../components/TrustBadges';
import {
  heroData,
  services,
  valueProps,
  showcaseImages,
  serviceOptions,
  companyInfo,
} from '../data/siteData';

export const HomePage = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="BrinJoe Construction project"
            className="w-full h-full object-cover"
            src={heroData.bgImage}
          />
          <div className="absolute inset-0 bg-primary-container/40" />
        </div>
        <div className="relative z-10 px-5 md:px-margin-desktop max-w-[1440px] mx-auto w-full">
          <div className="glass-panel p-6 md:p-10 rounded border border-white/20 shadow-2xl max-w-3xl">
            <h1 className="font-headline text-headline-xl-mobile md:text-headline-xl text-primary-container mb-6 leading-tight">
              {heroData.headline}
            </h1>
            <p className="font-body text-body-lg text-on-surface-variant mb-8 max-w-2xl">
              {heroData.subheadline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded font-headline text-button uppercase tracking-widest shadow-lg hover:-translate-y-1 transition-transform"
              >
                {heroData.ctaPrimary}
              </Link>
              <Link
                to="/services"
                className="border-2 border-primary-container text-primary-container px-8 py-4 rounded font-headline text-button uppercase tracking-widest hover:bg-primary-container hover:text-on-primary transition-all"
              >
                {heroData.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-10 border-b border-outline-variant/20">
        <div className="max-w-[1440px] mx-auto px-5 md:px-margin-desktop">
          <TrustBadges />
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-5 md:px-margin-desktop py-16 md:py-section-gap">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-headline text-headline-xl-mobile md:text-headline-xl text-primary-container mb-4">
                Our Premium Services
              </h2>
              <p className="font-body text-body-lg text-on-surface-variant max-w-xl">
                Built on a foundation of structural integrity and technical expertise, we offer specialized solutions for modern construction.
              </p>
            </div>
            <div className="h-1 w-24 bg-secondary-container mb-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded border border-outline-variant/30 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={service.image}
                  />
                  {('badge' in service) && (
                    <div className="absolute top-4 left-4 bg-secondary-container text-on-secondary-container px-3 py-1 text-xs font-bold uppercase tracking-widest">
                      {(service as { badge: string }).badge}
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <h3 className="font-headline text-headline-md text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-body-md text-on-surface-variant mb-6">
                    {service.description}
                  </p>
                  <Link
                    to={service.linkPath}
                    className="flex items-center gap-2 text-secondary font-bold uppercase text-sm tracking-widest hover:gap-4 transition-all"
                  >
                    {service.linkText}
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-primary-container text-on-primary py-16 md:py-section-gap">
        <div className="max-w-[1440px] mx-auto px-5 md:px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-16">
          {valueProps.map((prop) => (
            <div key={prop.title} className="text-center">
              <span className="material-symbols-outlined text-6xl text-secondary-container mb-6">
                {prop.icon}
              </span>
              <h4 className="font-headline text-headline-md mb-4">{prop.title}</h4>
              <p className="text-on-primary-container font-body text-body-md">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Project Showcase — 3 cards (Kitchen, Bathroom, Outdoor) */}
      <section className="px-5 md:px-margin-desktop py-16 md:py-section-gap">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-headline-xl-mobile md:text-headline-xl text-primary mb-4">
              See What We Build
            </h2>
            <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              From kitchens to outdoor living spaces, we deliver premium craftsmanship across every project type.
            </p>
            <div className="w-16 h-1 bg-secondary-container mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-12">
            {showcaseImages.map((img) => (
              <Link
                key={img.alt}
                to="/portfolio"
                className="group relative h-[400px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <img
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={img.src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-headline text-headline-md text-white mb-1">{img.label}</p>
                  <div className="flex items-center gap-2 text-secondary-container font-headline text-button uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Portfolio
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="bg-surface-container-high rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="font-headline text-headline-lg text-primary mb-4">Ready for your project?</h3>
              <p className="font-body text-body-lg text-on-surface-variant">
                From minor repairs to massive commercial overhauls, BrinJoe Construction delivers excellence on every square inch.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-block bg-primary text-on-primary px-8 py-4 rounded font-headline text-button uppercase tracking-widest hover:bg-secondary transition-colors shrink-0"
            >
              Start My Construction Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="bg-surface-container py-16 md:py-section-gap px-5 md:px-margin-desktop">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h2 className="font-headline text-headline-xl-mobile md:text-headline-xl text-primary mb-6">
              Request a Quote
            </h2>
            <p className="font-body text-body-lg text-on-surface-variant mb-10">
              Fill out the form below, and one of our construction specialists will contact you within 24 hours to schedule an inspection.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary">domain</span>
                <div>
                  <h5 className="font-bold text-primary">Oklahoma City Service Area</h5>
                  <p className="text-on-surface-variant">{companyInfo.serviceArea}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary">phone</span>
                <div>
                  <h5 className="font-bold text-primary">Direct Contact</h5>
                  <p className="text-on-surface-variant">{companyInfo.phone} • {companyInfo.email}</p>
                </div>
              </div>
            </div>
          </div>
          <form className="bg-white p-6 md:p-10 rounded shadow-xl border border-outline-variant/20">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-bold text-primary-container mb-2 uppercase tracking-tighter">Full Name</label>
                <input className="w-full border border-outline-variant focus:ring-secondary focus:border-secondary rounded px-4 py-3 bg-background-pearl" placeholder="John Doe" type="text" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-primary-container mb-2 uppercase tracking-tighter">Phone</label>
                  <input className="w-full border border-outline-variant focus:ring-secondary focus:border-secondary rounded px-4 py-3 bg-background-pearl" placeholder="(405) 000-0000" type="tel" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary-container mb-2 uppercase tracking-tighter">Email</label>
                  <input className="w-full border border-outline-variant focus:ring-secondary focus:border-secondary rounded px-4 py-3 bg-background-pearl" placeholder="email@example.com" type="email" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-primary-container mb-2 uppercase tracking-tighter">Service Needed</label>
                <select className="w-full border border-outline-variant focus:ring-secondary focus:border-secondary rounded px-4 py-3 bg-background-pearl">
                  {serviceOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-primary-container mb-2 uppercase tracking-tighter">Message</label>
                <textarea className="w-full border border-outline-variant focus:ring-secondary focus:border-secondary rounded px-4 py-3 bg-background-pearl" placeholder="Tell us about your project..." rows={4} />
              </div>
              <button
                className="bg-secondary-container text-on-secondary-container w-full py-5 rounded font-headline text-button uppercase tracking-widest shadow-md hover:brightness-110 transition-all"
                type="submit"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};
