import { Link } from 'react-router-dom';
import { TrustBadges } from '../components/TrustBadges';

const teamMembers = [
  { name: 'Joseph Brinlee', role: 'President & Founder', bio: 'With over 40 years in the field, Joseph oversees the strategic direction and quality benchmarks of every project.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBj5d6NOOCS5gden3b9P89pRjWEwzBQBWDyFKVWQ1zSGRF0RmfsDPL7b8eepX3pvowh30tbq4Wpyjl-0DA2hXLRqXB-lUHJSFutIP7V9oiq7nUNdWA0ata23IATs8dCnSoQB1ylewiMgMNM11JRPfDq3FdxzlUEp9_ZUdHce8Iv83PVe-lqA7VAKHWKvXxQyA6UPg2txHRQceJIBgP21aM6btu3nPZih9eMkx1gTIaZH4shl9XZU_fwWHRGPHm2SkG9rUZWpOBwf98' },
  { name: 'Michael Brinlee', role: 'Director of Operations', bio: 'Michael bridges the gap between field crews and clients, ensuring on-time delivery and operational precision.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIvYDmZIoMlmlbFYh4TpIj3EDyRJFqEFOWK1Z7K-p5Ji9guOrWFgI5K2ARXzomsDyVUYbypH-UfOsxrFEBDdI1ZPoveJph4c_ltC8waNogo_oCMWSuFjlaxb9Sq6B3A1vXo8F4QZ9DLbTKfbpxH7TCk7Kz6nypmKnATRrVgfyO6cVTA0IyDPL9y8LYz08QxC0ggMWK1fVM1Va0JeUrdBqMS0g6yE_5j0IZ-4UNgbcrAZXOnT61oL7ozbPSCCR1turGhsjZskd_c8g' },
  { name: 'Sarah Jenkins', role: 'Lead Project Manager', bio: 'Sarah brings an eye for detail and structural excellence to every residential and commercial build we undertake.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNqibCo5xSDqhygR79rhDLglmXZKXiNvxlOoM2rE-kbPFlC7rDsoNI_cR14kHMrbEwceWb4Z-U--VihkRTFOvXaJ_Xgk4-Valgq0R3RTY-fxmQic2tJQdMNz0IMrRZwozikbqamFoGhv3nRcCqsrZcuKPWhWe1AZi85ReJJI9_R9FKX-C-94hUoaNcOk2v2cy1bzu0N_tmbTsoFMq0lds7VSbBvealTIy_4pfR1B5CoF2xSzDw4xYeEt3rs8GUA0I_PD6Tib26jKY' },
];

export const AboutPage = () => {
  return (
    <main>
      {/* Hero */}
      <header className="relative h-[600px] md:h-[870px] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" alt="BrinJoe Construction site at golden hour" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRIY07GvInHsy_oVHBIca2elbp5JVxvwJmPjJkYv-_ao5ESS_j4a_SaLekIq1cpgbNLKicVvX2DyMl6HlTDYU7dDBgpkrvImsMib4HgOb-I-ARECFSdw8kwmp7_3ddLuVGoFexYqsA0kEKBHJivY15pw7kIsKHuThjmOi9qnmt_NCHr07y1q7qEd8PrU75OPVLxBfrmxDaWGeiScF6G9MGHjo8MQ4QVeYTuMr8Ckf7kds0XR8AfAXOYL4827YvtTlwkgCje0zgyok" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container/90 via-primary-container/40 to-transparent" />
        </div>
        <div className="relative z-10 px-5 md:px-margin-desktop max-w-4xl">
          <span className="inline-block px-4 py-1 bg-secondary-container text-on-secondary-container font-headline text-button uppercase tracking-widest mb-6">Established 1974</span>
          <h1 className="font-headline text-headline-xl-mobile md:text-headline-xl text-white mb-6">
            Built on 50 Years <br /><span className="text-secondary-fixed">of Integrity.</span>
          </h1>
          <p className="font-body text-body-lg text-white/80 max-w-xl mb-8">
            From pioneering insulation techniques to leading large-scale commercial developments, our legacy in Oklahoma is forged in every beam and every layer.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/services" className="bg-secondary text-on-secondary px-8 py-4 rounded font-headline text-button uppercase tracking-wider hover:bg-secondary/90 transition-all shadow-lg">
              Our Services
            </Link>
            <Link to="/portfolio" className="glass-panel text-white px-8 py-4 rounded font-headline text-button uppercase tracking-wider hover:bg-white/10 transition-all">
              View Portfolio
            </Link>
          </div>
        </div>
      </header>

      {/* Trust Badges */}
      <section className="bg-white py-10 relative z-20 -mt-8 mx-5 md:mx-margin-desktop rounded-lg shadow-sm">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8">
          <TrustBadges />
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-section-gap px-5 md:px-margin-desktop max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="font-headline text-headline-lg text-primary-container">Legacy In Every Layer</h2>
              <div className="w-16 h-1 bg-secondary" />
            </div>
            <div className="space-y-6 font-body text-body-lg text-on-surface-variant leading-relaxed">
              <p>In 1974, BrinJoe Construction began with a simple mission in the heart of Oklahoma City: to provide unparalleled protection through superior insulation. What started as a focused family enterprise has evolved over five decades into a multi-generational powerhouse of full-scale construction.</p>
              <p>As we've grown, so has our capability. We transitioned from specialized spray foam applications to becoming a premier name in Oklahoma's industrial and residential infrastructure.</p>
              <p className="italic text-primary font-semibold">"We don't just build structures; we build the foundations of our community's future."</p>
            </div>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="rounded-lg overflow-hidden shadow-xl aspect-[3/4]">
                  <img className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt="BrinJoe early days" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXfW7xtm_eLGHivCee1owW3jh2HgDZ0ZbWr8sQxjLCXfVGDtqWCiF2sRADN28IWRWuHCLIN8gB4LaIvjDeLpUycbYCGyRltS7pL9EMLhnxzbaEOtaTmcXf3c2jzhl_42jqJUA9H-MJCnQFoi15lz2_T1ym6elOGYmHswG9FhxI1s2yXRjHvNNrRtP41pAWAaRkDuRrBGB6GNZ9n7Uk5--RbNNdMxHXDfk8nht3-d11bKdf0VkCunCC1LUvpS1cIEIz67EzztOv0VU" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-xl aspect-square">
                  <img className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt="Modern spray foam application" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvF4LCrMbmsgTC0luS2cYK06gO39hHEvvbpwHcJOWYp5y2jUoitf6qak2MAKPBVj45ikdyw44v_7ckdKOgFfBKnLf4algWa-OrKsPA-QCS_mX2iTsXhsv43nfxZ3a8uvKSPxNuN0Slho2FZmHJfTMP0ngxA0rWnA0auwJ6-jvfbTPN8nVEaG4zz_k5ksgBLWhDyuEWWBM-ia8nheCrFWk1kpACRb6HahUaRsk0oHGNfTa_MwNdOxpXcrL5F_PURlKkHvB0i_lM7N0" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-xl aspect-[3/2] bg-primary-container flex flex-col justify-center p-8 text-white">
                  <p className="text-6xl font-bold mb-2">50</p>
                  <p className="font-headline text-button uppercase tracking-widest">Years of Continuous Operation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-primary-container py-16 md:py-section-gap">
        <div className="px-5 md:px-margin-desktop max-w-7xl mx-auto text-center mb-16">
          <h2 className="font-headline text-headline-lg text-white mb-4">Leadership Built on Trust</h2>
          <p className="font-body text-body-lg text-on-primary-fixed-variant max-w-2xl mx-auto">
            Our executive team combines decades of on-site experience with modern engineering expertise to deliver excellence.
          </p>
        </div>
        <div className="px-5 md:px-margin-desktop max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {teamMembers.map((member) => (
            <div key={member.name} className="group relative overflow-hidden bg-white/5 p-4 rounded-xl border border-white/10 hover:border-secondary transition-all">
              <div className="aspect-[4/5] rounded-lg overflow-hidden mb-6">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" alt={member.name} src={member.image} />
              </div>
              <h3 className="font-headline text-headline-md text-white">{member.name}</h3>
              <p className="font-body text-label-sm text-secondary uppercase tracking-widest mb-4">{member.role}</p>
              <p className="font-body text-body-md text-on-primary-fixed-variant mb-6">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-section-gap bg-surface px-5 md:px-margin-desktop">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <h2 className="font-headline text-headline-lg text-primary mb-6">The Verdict from Our Community</h2>
            <div className="flex justify-center lg:justify-start items-center gap-4 mb-4">
              <span className="font-headline text-headline-xl text-secondary">5.0</span>
              <div className="flex text-secondary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/3 bg-white p-8 md:p-12 rounded-2xl shadow-lg relative overflow-hidden">
            <span className="material-symbols-outlined absolute -top-4 -left-4 text-9xl text-secondary/5 opacity-20">format_quote</span>
            <div className="relative z-10">
              <p className="font-body text-body-lg text-primary-container italic mb-8 leading-relaxed">
                "We've worked with BrinJoe on three separate commercial projects over the last decade. Their transition from insulation specialists to full-scale builders has been seamless, and their commitment to 'Integrity' isn't just a slogan—it's how they operate every day on the job site."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold">RM</div>
                <div>
                  <p className="font-headline text-[18px] text-primary">Robert M.</p>
                  <p className="font-body text-label-sm text-on-surface-variant">CEO, OKC Logistics Hub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
