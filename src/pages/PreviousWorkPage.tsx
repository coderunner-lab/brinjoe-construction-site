import { Link } from 'react-router-dom';
import { asset } from '../utils/assetPath';

export interface Project {
  slug: string;
  title: string;
  category: string;
  coverImage: string;
  description: string;
  images: { src: string; alt: string; label?: string }[];
  /** If true, images are displayed as side-by-side before/after pairs */
  beforeAfter?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'porch-deck',
    title: 'Porch Deck',
    category: 'Outdoor Living',
    coverImage: asset('/images/portfolio/porch-deck/cover.jpg'),
    description:
      'A custom-built porch and deck addition designed for durability and outdoor comfort in the Oklahoma climate. Built with precision framing and premium materials.',
    images: [
      { src: asset('/images/portfolio/porch-deck/1.jpg'), alt: 'Porch deck view 1' },
      { src: asset('/images/portfolio/porch-deck/2.jpg'), alt: 'Porch deck view 2' },
      { src: asset('/images/portfolio/porch-deck/3.jpg'), alt: 'Porch deck view 3' },
      { src: asset('/images/portfolio/porch-deck/4.jpg'), alt: 'Porch deck view 4' },
      { src: asset('/images/portfolio/porch-deck/5.jpg'), alt: 'Porch deck view 5' },
      { src: asset('/images/portfolio/porch-deck/6.jpg'), alt: 'Porch deck view 6' },
      { src: asset('/images/portfolio/porch-deck/7.jpg'), alt: 'Porch deck view 7' },
      { src: asset('/images/portfolio/porch-deck/8.jpg'), alt: 'Porch deck view 8' },
      { src: asset('/images/portfolio/porch-deck/9.jpg'), alt: 'Porch deck view 9' },
      { src: asset('/images/portfolio/porch-deck/10.jpg'), alt: 'Porch deck view 10' },
    ],
  },
  {
    slug: 'norcrest',
    title: 'Norcrest Drive Transformation',
    category: 'Full Renovation',
    coverImage: asset('/images/portfolio/norcrest/cover.png'),
    description:
      'A complete before-and-after transformation on Norcrest Drive. This residential renovation showcased BrinJoe\'s full-service capabilities — from structural framing to drywall, painting, and final finishes.',
    beforeAfter: true,
    images: [
      { src: asset('/images/portfolio/norcrest/1.png'), alt: 'Room 1 — Before', label: 'Before' },
      { src: asset('/images/portfolio/norcrest/2.png'), alt: 'Room 1 — After', label: 'After' },
      { src: asset('/images/portfolio/norcrest/3.png'), alt: 'Room 2 — Before', label: 'Before' },
      { src: asset('/images/portfolio/norcrest/4.png'), alt: 'Room 2 — After', label: 'After' },
      { src: asset('/images/portfolio/norcrest/5.png'), alt: 'Room 3 — Before', label: 'Before' },
      { src: asset('/images/portfolio/norcrest/6.png'), alt: 'Room 3 — After', label: 'After' },
      { src: asset('/images/portfolio/norcrest/7.png'), alt: 'Room 4 — Before', label: 'Before' },
      { src: asset('/images/portfolio/norcrest/8.png'), alt: 'Room 4 — After', label: 'After' },
      { src: asset('/images/portfolio/norcrest/9.png'), alt: 'Room 5 — Before', label: 'Before' },
      { src: asset('/images/portfolio/norcrest/10.png'), alt: 'Room 5 — After', label: 'After' },
      { src: asset('/images/portfolio/norcrest/11.png'), alt: 'Room 6 — Before', label: 'Before' },
      { src: asset('/images/portfolio/norcrest/12.png'), alt: 'Room 6 — After', label: 'After' },
    ],
  },
];

export const PreviousWorkPage = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="px-5 md:px-margin-desktop py-20 bg-primary-container relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <h1 className="font-headline text-headline-xl-mobile md:text-headline-xl text-white mb-6">
            Project Portfolio
          </h1>
          <p className="font-body text-body-lg text-primary-fixed max-w-2xl">
            Delivering excellence across Oklahoma City. From custom outdoor builds
            to full interior renovations, explore how we build trust into every
            square foot.
          </p>
        </div>
      </section>

      {/* Project Cards */}
      <section className="px-5 md:px-margin-desktop py-16 md:py-section-gap">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/portfolio/${project.slug}`}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 aspect-[4/3]"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                alt={project.title}
                src={project.coverImage}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-primary-container/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-secondary-container/90 text-white text-xs font-bold uppercase tracking-widest rounded mb-3">
                  {project.category}
                </span>
                <h3 className="text-white font-headline text-headline-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-white/70 font-body text-body-md line-clamp-2 mb-4 max-w-lg">
                  {project.description}
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-white/60 font-body text-sm">
                    {project.images.length} photos
                  </span>
                  <span className="text-white/30">•</span>
                  <span className="flex items-center text-secondary-container font-headline text-button uppercase tracking-widest">
                    View Project
                    <span className="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-transform">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-container py-16 md:py-section-gap px-5 md:px-margin-desktop text-center relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 overflow-hidden">
          <span className="text-[120px] md:text-[200px] font-bold text-white whitespace-nowrap select-none">
            BRINJOE
          </span>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <h2 className="font-headline text-headline-xl-mobile md:text-headline-xl text-white mb-8">
            Ready to start your project?
          </h2>
          <p className="font-body text-body-lg text-primary-fixed max-w-xl mx-auto mb-12">
            Whether it's a commercial retrofit or a dream home build, our team is
            ready to bring precision and reliability to your site.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/contact"
              className="bg-secondary-container text-white px-10 py-5 font-headline text-button uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
            >
              Get a Quote
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-10 py-5 font-headline text-button uppercase tracking-widest hover:bg-white hover:text-primary-container transition-all"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
