import { Link } from 'react-router-dom';
import { TrustBadges } from '../components/TrustBadges';
import { asset } from '../utils/assetPath';

export const ServicesPage = () => {
  return (
    <main>
      {/* Hero */}
      <header className="relative w-full overflow-hidden bg-primary-container py-24 md:py-32 mt-20">
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-6 h-full w-full">
            {[...Array(6)].map((_, i) => <div key={i} className={i < 5 ? 'border-r border-on-primary-container/20' : ''} />)}
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-5 md:px-margin-desktop flex flex-col items-center text-center">
          <div className="inline-block px-3 py-1 bg-secondary-container/20 text-secondary-container font-body text-label-sm uppercase tracking-widest mb-6">
            Premium Construction Solutions
          </div>
          <h1 className="font-headline text-headline-xl-mobile md:text-headline-xl text-white mb-6 leading-tight max-w-4xl">
            Our Construction Services
          </h1>
          <p className="font-body text-body-lg text-on-primary-container max-w-2xl">
            Delivering uncompromising quality and industrial-grade reliability to OKC and the surrounding areas. We build for the future with precision.
          </p>
        </div>
      </header>

      {/* Trust Badges */}
      <section className="bg-white py-10 border-y border-outline-variant/20">
        <div className="max-w-[1440px] mx-auto px-5 md:px-margin-desktop">
          <TrustBadges />
        </div>
      </section>

      {/* Spray Foam Highlight */}
      <section className="py-16 md:py-section-gap max-w-7xl mx-auto px-5 md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-7 relative group">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary-container/10 -z-10" />
            <div className="rounded-xl overflow-hidden shadow-xl aspect-[4/3]">
              <img alt="Spray foam insulation application" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-rZoaYT73WVvZJCiJ8f6j7vx2z_wUjucSSruOFmvVpb_8t2fh15WvzCzD73M6ZYCdK03TWJD5QoY45lW3vjjnYmUXiyULn64r5bSvOuzrdrKgLlkK_Aer32x0mFC1rSFFYBOoMr_Gmw28rs8AZRFKSH5Wi9_kHS5x97xZwLE8cwnAP08sW45fHNS0TxJ2IEzw27V1Tt0ESYEx2axJj7-WpstKn94OxRnDQCuTBrx_GvXyAitN82JxEvHioh9Or3pBn3itI0u9-Ck" />
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col items-start gap-6">
            <span className="text-secondary font-bold uppercase tracking-widest text-label-sm">Premium Highlight</span>
            <h2 className="font-headline text-headline-lg md:text-headline-xl text-primary">Spray Foam Insulation</h2>
            <p className="font-body text-body-lg text-on-surface-variant">
              Experience the gold standard in climate control. Our spray foam insulation provides a superior airtight seal that slashes energy costs while reinforcing your building's structural integrity.
            </p>
            <div className="space-y-3">
              {['Seamless Air Barrier', 'Extreme Energy Efficiency', 'Lifetime Performance'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary-container">check_circle</span>
                  <span className="font-body text-body-md">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/spray-foam" className="mt-4 bg-secondary-container text-white px-8 py-4 rounded font-headline text-button uppercase tracking-widest hover:-translate-y-1 transition-transform shadow-lg">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Drywall & Painting */}
      <section className="bg-surface-container-low py-16 md:py-section-gap overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-margin-desktop">
          {/* Drywall */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <h2 className="font-headline text-headline-lg md:text-headline-xl text-primary mb-6">Drywall Installation</h2>
              <p className="font-body text-body-lg text-on-surface-variant mb-8">
                Precision-cut and expertly hung. We specialize in seamless finishes that provide the perfect foundation for your interior. Our team ensures flawless taping, bedding, and sanding for professional-grade structural walls.
              </p>
              <Link to="/portfolio" className="inline-flex items-center gap-2 text-secondary font-headline text-button uppercase tracking-widest group">
                Learn More
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="rounded-lg overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img alt="Professional drywall finishing" className="w-full h-full object-cover" src={asset('/images/drywall.png')} />
              </div>
            </div>
          </div>
          {/* Painting */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="rounded-lg overflow-hidden shadow-2xl -rotate-1 hover:rotate-0 transition-transform duration-500">
                <img alt="High-end interior painting" className="w-full h-full object-cover" src={asset('/images/painting.png')} />
              </div>
            </div>
            <div className="lg:col-span-5">
              <h2 className="font-headline text-headline-lg md:text-headline-xl text-primary mb-6">Professional Painting</h2>
              <p className="font-body text-body-lg text-on-surface-variant mb-8">
                Transforming spaces with a premium aesthetic. Our industrial-grade finishes and meticulous attention to detail ensure a look that is both sophisticated and durable.
              </p>
              <Link to="/portfolio" className="inline-flex items-center gap-2 text-secondary font-headline text-button uppercase tracking-widest group">
                Learn More
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-section-gap bg-primary-container overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-5 md:px-margin-desktop text-center">
          <h2 className="font-headline text-headline-xl-mobile md:text-headline-xl text-white mb-8">Ready to Start Your Project?</h2>
          <p className="font-body text-body-lg text-on-primary-container mb-12">
            Whether it's a new commercial build or a residential renovation, our team is equipped to handle the heavy lifting. Get your free, no-obligation estimate today.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/contact" className="bg-secondary-container text-white px-10 py-5 rounded font-headline text-button uppercase tracking-widest hover:-translate-y-1 transition-transform shadow-lg">
              Get a Free Estimate
            </Link>
            <Link to="/portfolio" className="border-2 border-on-primary-container text-white px-10 py-5 rounded font-headline text-button uppercase tracking-widest hover:bg-white hover:text-primary-container transition-all">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
