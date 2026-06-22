import { Link } from 'react-router-dom';
import { companyInfo } from '../data/siteData';

const benefits = [
  { icon: 'bolt', title: 'Energy Efficiency', description: 'Reduce heating and cooling costs by up to 50% with an airtight thermal envelope.' },
  { icon: 'water_drop', title: 'Moisture Resistance', description: 'Eliminate condensation and mold growth by creating a seamless moisture barrier.' },
  { icon: 'architecture', title: 'Structural Integrity', description: 'Strengthen your wall and roof structure against high winds and Oklahoma storms.' },
  { icon: 'volume_off', title: 'Soundproofing', description: 'Significantly dampen outside noise and create a quieter, more comfortable interior.' },
];

const openCellBenefits = [
  'Most affordable solution for residential use',
  'Exceptional soundproofing capabilities',
  'Flexible expansion for gaps and crevices',
];

const closedCellBenefits = [
  'Dense, rigid structure adds racking strength',
  'Impermeable water and vapor barrier',
  'Highest R-value per inch available',
];

const processSteps = [
  { num: '01', title: 'Free Estimate', description: 'We visit your property to assess needs, measure dimensions, and provide a transparent, no-obligation quote.', accent: false },
  { num: '02', title: 'Professional Install', description: 'Our certified team applies the insulation using industry-leading safety protocols and precision equipment.', accent: true },
  { num: '03', title: 'Final Inspection', description: 'We conduct a thorough cleanup and walk-through to ensure every square inch meets our rigorous quality standards.', accent: false },
];

export const SprayFoamPage = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-container to-[#1c2a4e] relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-5 md:px-margin-desktop w-full max-w-7xl mx-auto py-20 items-center">
          <div className="text-white z-10 space-y-6">
            <span className="inline-block px-4 py-1 bg-secondary-container text-white font-body text-label-sm uppercase tracking-wider rounded-full">
              OKC Insulation Experts
            </span>
            <h1 className="font-headline text-headline-xl-mobile md:text-headline-xl leading-tight">
              Premium Spray Foam Insulation in OKC
            </h1>
            <p className="font-body text-body-lg text-primary-fixed-dim max-w-xl">
              Lower energy bills, increase comfort, and protect your property with professional open and closed-cell spray foam solutions tailored for Oklahoma weather.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/contact"
                className="bg-secondary-container hover:bg-secondary text-white font-headline text-button px-8 py-4 rounded-lg transition-all duration-300 shadow-xl flex items-center gap-2 group"
              >
                Request Insulation Quote
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <Link
                to="/portfolio"
                className="border border-outline-variant hover:bg-white/10 text-white font-headline text-button px-8 py-4 rounded-lg transition-all duration-300"
              >
                Our Portfolio
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-secondary-container/20 blur-3xl rounded-full" />
            <img
              alt="Professional Spray Foam Application"
              className="relative rounded-xl shadow-2xl object-cover w-full h-[500px] border border-white/10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd7KT52WEpRNb4nKsorEUrQA0mSK6hxpWoHmBWVRyuy7ESXoUuHLXiI6cBXqsPTOzLwHCyJHXG6UtocDel8WNl2BhDANZeglg6KxJmnYXgU3FV4lYH7yDcTKaiVFnK8HLNhutCapyNC9NVL7j7OXG-9_VDSYeJk_rAcdthnE_gS50iVxXasebmZuGrgR7D0uGDqZMpIjuljA4qZiU7RjIVykXfDdA4CStH6XrvsSGAYszZRSRMHaQSm2L-SSZcm9kOtq756J3SeMw"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-section-gap px-5 md:px-margin-desktop max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-headline text-headline-lg text-primary mb-4">The Benefits of Professional Spray Foam</h2>
          <div className="h-1.5 w-24 bg-secondary-container mx-auto mb-6" />
          <p className="font-body text-body-md text-text-slate">Investing in high-quality insulation is the most effective way to improve your building's structural integrity and thermal performance.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white p-8 rounded-xl shadow-sm border border-outline-variant/20 hover:shadow-xl transition-all duration-500 group">
              <div className="w-14 h-14 bg-primary-container flex items-center justify-center rounded-lg mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-white text-3xl">{b.icon}</span>
              </div>
              <h3 className="font-headline text-headline-md mb-3 text-primary">{b.title}</h3>
              <p className="font-body text-body-md text-text-slate">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Cell vs Closed Cell */}
      <section className="bg-primary-container py-16 md:py-section-gap px-5 md:px-margin-desktop overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <h2 className="font-headline text-headline-lg text-white mb-6">Open Cell vs. Closed Cell</h2>
            <p className="text-primary-fixed-dim font-body text-body-lg mb-8">Choosing the right insulation depends on your project goals, local climate, and specific building requirements.</p>
            <div className="space-y-4">
              <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
                <h4 className="font-headline text-headline-md text-white flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary-container">bubble_chart</span>
                  Open Cell Foam
                </h4>
                <ul className="mt-4 space-y-2 text-primary-fixed-dim font-body text-body-md">
                  {openCellBenefits.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-green-400">check_circle</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
                <h4 className="font-headline text-headline-md text-white flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary-container">shield</span>
                  Closed Cell Foam
                </h4>
                <ul className="mt-4 space-y-2 text-primary-fixed-dim font-body text-body-md">
                  {closedCellBenefits.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-green-400">check_circle</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="relative grid grid-cols-2 gap-4 hidden lg:grid">
            <div className="space-y-4">
              <div className="h-64 rounded-xl overflow-hidden shadow-2xl">
                <img className="w-full h-full object-cover" alt="Open cell foam texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCykBsecAt6wjjGgyHAiAWwBnOq-3o2vYe6lt8SDs6nbdIfErskyWCjkxMYM4VFMx8rNNlwJTLbtdyetpBVfnFylWt3jLYVji0-7Oy9xjdzNhxDZqbUYUwMP_mKkhhB6UWsDpvXOjDG9BfnJ38wNlSiZZAKt8Xhhz1yvgwxHpU1F7p0hE5dZ9dsvbyo53ezIkVOhqAwhUpQlAYMsasx5oYeDXsPr62FSigdzRGLt8v60ApM322Zvms1LgMeMZRfBofSSutcANZbh58" />
              </div>
              <div className="h-48 rounded-xl overflow-hidden shadow-2xl">
                <img className="w-full h-full object-cover" alt="Worker applying insulation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg8EXGGDMZZ122CJGHVz3ufh2sgpYI8_UPzHOpwlTGWon37AQ4uSvIw1bt2hXZKJzTMlH4k7ZI9iEcJGV541Yycwjn05w9ScDu0Qdro6gduSGB2sb10DgFxQuclCocHR5pIhzdLX7t0P5Qhl9_NPLfgxCB5pdSoY7BGNLTjBteOfx2eP4wFXIziEFgXo_7Dv2JpAOOvYNK2wp6i3yf_7VDoXk4dQwYM2BZZqjndFgLJHoT2NrL6qBFD-kaEpVmuogpCsv8d6sO2jw" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-48 rounded-xl overflow-hidden shadow-2xl">
                <img className="w-full h-full object-cover" alt="Closed cell foam" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD44L86nDbyCUDeXjnsKYARXpE5k5S1KcdM0bMmdkNV0EKQ5-biVdhBuYHRkDbQAp7iLGYeSMJ3OTqC9dxWHGpa8VvSHNnAoc7A2pqbXO3-n9V8zbXIF3YnO52JC-qfX-D5DOkwNvPayzjpIogQss4H4Ny9p8J9B_kdEG5RPtISi-p4Pfjfa5z-V17ta5v63r1se-hAs1UVWHUoJTMkCKMN1B9bkXww2TewMY9rB-mx_VgZWl0Dix-75aMdf9R_dVOon7ShSgZBZGg" />
              </div>
              <div className="h-64 rounded-xl overflow-hidden shadow-2xl">
                <img className="w-full h-full object-cover" alt="Industrial equipment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlvdAUKiiL1AJM8ZpEvPWK6C57Pzg0E_8AQpaAy8W3MUSl3wKs3M604EhBocUChbM8-kkUCxeFYi33D4RNaXddQeVinh5BDVxEuZjr4F8dxAgJu_adBaWtvyWNOfvIHri77pyaJkH4l_NKWN45EMVZqJWQ-DGPw36VnlcqamP9FbUztLgSbi_QVX2R10nqI2hpm9wAubty8_SdKo2tl6BA3JgrtvDNvKhOiWU8wvdVl0V8yOtHrDPIu3aum5vQYSeIVjCPwKlBmwo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-section-gap px-5 md:px-margin-desktop max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <span className="text-secondary font-body text-label-sm uppercase tracking-widest font-bold">How We Work</span>
            <h2 className="font-headline text-headline-lg text-primary mt-2">Our 3-Step Success Plan</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-outline-variant/30 z-0" />
          {processSteps.map((step) => (
            <div key={step.num} className="relative z-10 text-center md:text-left">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full font-headline text-headline-md mb-6 shadow-lg ${
                step.accent ? 'bg-secondary-container text-white' : 'bg-white border-2 border-secondary-container text-secondary-container'
              }`}>
                {step.num}
              </div>
              <h4 className="font-headline text-headline-md text-primary mb-3">{step.title}</h4>
              <p className="font-body text-body-md text-text-slate">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-surface-container py-16 md:py-section-gap">
        <div className="px-5 md:px-margin-desktop max-w-5xl mx-auto">
          <div className="bg-white p-8 md:p-16 rounded-2xl shadow-xl relative">
            <span className="material-symbols-outlined text-6xl text-secondary-fixed opacity-40 absolute top-8 left-8">format_quote</span>
            <div className="text-center space-y-8 relative z-10">
              <div className="flex justify-center text-secondary mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-3xl text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <blockquote className="font-headline text-headline-md md:text-headline-lg italic text-primary">
                "BrinJoe transformed our drafty home in OKC. The energy savings were immediate—our electric bill dropped by nearly 30% the very first month. Highly recommend their professional team!"
              </blockquote>
              <div className="pt-6">
                <p className="font-headline text-headline-md text-primary mb-1">Robert Henderson</p>
                <p className="text-text-slate font-body text-label-sm uppercase tracking-widest">Homeowner, Oklahoma City</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary-container py-20">
        <div className="px-5 md:px-margin-desktop max-w-7xl mx-auto text-center text-white">
          <h2 className="font-headline text-headline-xl-mobile md:text-headline-xl mb-6">Ready to insulate your home?</h2>
          <p className="font-body text-body-lg mb-10 max-w-2xl mx-auto opacity-90">
            Start saving on your energy bills today with Oklahoma's most trusted spray foam insulation experts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-secondary font-headline text-headline-md px-10 py-5 rounded-lg shadow-2xl hover:scale-105 transition-transform">
              Contact Us Today
            </Link>
            <a href={`tel:${companyInfo.phone}`} className="border-2 border-white text-white font-headline text-headline-md px-10 py-5 rounded-lg hover:bg-white/10 transition-colors">
              Call {companyInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
