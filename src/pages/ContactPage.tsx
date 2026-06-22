import { serviceOptions } from '../data/siteData';
import { TrustBadges } from '../components/TrustBadges';

const contactDetails = [
  { icon: 'phone', label: 'Phone Number', value: '(405) 664-1141' },
  { icon: 'mail', label: 'Email Address', value: 'info@brinjoeconstruction.com' },
  { icon: 'location_on', label: 'Service Areas', value: 'Oklahoma City & Surrounding Areas' },
  { icon: 'schedule', label: 'Business Hours', value: 'Mon-Fri: 8:00 AM – 5:00 PM' },
];

export const ContactPage = () => {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative py-24 px-5 md:px-margin-desktop overflow-hidden bg-primary-container text-on-primary">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent" />
        </div>
        <div className="max-w-4xl relative z-10">
          <h1 className="font-headline text-headline-xl-mobile md:text-headline-xl mb-6 text-white">Contact BrinJoe Construction</h1>
          <p className="font-body text-body-lg text-on-primary-container max-w-2xl">
            Reach out today for a free estimate on your next project. Our structural specialists and insulation experts are ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-margin-desktop py-16 md:py-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div>
                <h2 className="font-headline text-headline-md text-primary mb-6 border-l-4 border-secondary pl-4">Contact Information</h2>
                <p className="text-on-surface-variant mb-8 font-body text-body-md">
                  Connect with Oklahoma's leading construction and insulation team. We provide tailored solutions for residential and industrial needs.
                </p>
              </div>
              <div className="space-y-6">
                {contactDetails.map((item) => (
                  <div key={item.icon} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <p className="font-body text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="font-headline text-headline-md text-on-surface">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 border-t border-outline-variant/30">
              <p className="font-body text-label-sm text-on-surface-variant uppercase tracking-widest mb-6">Certified & Trusted</p>
              <TrustBadges />
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:sticky lg:top-32">
            <div className="bg-white rounded-xl shadow-lg border border-outline-variant/20 overflow-hidden">
              <div className="bg-secondary-container p-6">
                <h3 className="font-headline text-headline-md text-white">Project Inquiry</h3>
                <p className="text-white/80 font-body text-body-md">Tell us about your upcoming project.</p>
              </div>
              <form className="p-6 md:p-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-body text-label-sm text-on-surface-variant uppercase tracking-wider block">Name</label>
                    <input className="w-full px-4 py-3 bg-background-pearl border border-outline-variant focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all rounded" placeholder="John Doe" required type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-body text-label-sm text-on-surface-variant uppercase tracking-wider block">Phone</label>
                    <input className="w-full px-4 py-3 bg-background-pearl border border-outline-variant focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all rounded" placeholder="(405) 000-0000" required type="tel" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-body text-label-sm text-on-surface-variant uppercase tracking-wider block">Email Address</label>
                  <input className="w-full px-4 py-3 bg-background-pearl border border-outline-variant focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all rounded" placeholder="john@example.com" required type="email" />
                </div>
                <div className="space-y-2">
                  <label className="font-body text-label-sm text-on-surface-variant uppercase tracking-wider block">Service Requested</label>
                  <select className="w-full px-4 py-3 bg-background-pearl border border-outline-variant focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all rounded">
                    {serviceOptions.map((opt) => <option key={opt}>{opt}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-body text-label-sm text-on-surface-variant uppercase tracking-wider block">Your Message</label>
                  <textarea className="w-full px-4 py-3 bg-background-pearl border border-outline-variant focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all rounded resize-none" placeholder="Describe your project details, dimensions, and timeline..." required rows={4} />
                </div>
                <button className="w-full bg-secondary-container hover:bg-secondary text-white font-headline text-button uppercase tracking-[0.2em] py-4 rounded shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mt-4" type="submit">
                  Send Message
                </button>
                <p className="text-center text-xs text-on-surface-variant font-body">
                  <span className="material-symbols-outlined text-sm inline-block mr-1">lock</span>
                  Your information is secure and will only be used for project estimates.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[400px] grayscale hover:grayscale-0 transition-all duration-700 bg-surface-container-highest">
        <div className="w-full h-full relative">
          <img alt="Map of Oklahoma City" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAdeiNXtMYWj57Er5JnhAkMiq_ZZKJrX_-yTNrBSkRPUGSqn6EV5Ftl3xc0awsTw2CCiVQ_we-jvdjpSqRPbHL93GuWNfySHdmhsBhbyp1zDJYC9i4K0klk-VqnakiaAHYRDjnqS1EJOKiNeLvg3sIerYeE-ZhknGmecVOQLXFTnNhBo-iD97PLjYrwnxcI5FuD-oYV1jguGXHSIcpnNonMCI-flEA3EPUL6sJLgGM_48kHh8YY8xTnsG7xQZBHjP3hD4wmjoi_r0" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-primary-container text-white px-8 py-4 rounded shadow-2xl flex items-center gap-3 animate-bounce">
              <span className="material-symbols-outlined">push_pin</span>
              <span className="font-bold tracking-wider">OKC HEADQUARTERS</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
