import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from './PreviousWorkPage';

export const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  /** Group images into pairs for before/after projects */
  const imagePairs: { before: (typeof project.images)[0]; after: (typeof project.images)[0] }[] = [];
  if (project.beforeAfter) {
    for (let i = 0; i < project.images.length; i += 2) {
      imagePairs.push({
        before: project.images[i],
        after: project.images[i + 1],
      });
    }
  }

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt={project.title}
          src={project.coverImage}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/30 to-transparent" />
        <div className="relative z-10 px-5 md:px-margin-desktop pb-12 max-w-[1440px] mx-auto w-full">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white font-headline text-button uppercase tracking-widest mb-6 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Portfolio
          </Link>
          <span className="block px-3 py-1 bg-secondary-container/90 text-white text-xs font-bold uppercase tracking-widest rounded w-fit mb-4">
            {project.category}
          </span>
          <h1 className="font-headline text-headline-xl-mobile md:text-headline-xl text-white">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Project Content */}
      <section className="px-5 md:px-margin-desktop py-16 md:py-section-gap">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-headline text-headline-lg text-primary mb-6">
              About This Project
            </h2>
            <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
              {project.description}
            </p>
            <p className="font-body text-body-md text-on-surface-variant mt-4">
              <span className="font-bold text-primary">{project.images.length}</span> photos
              {project.beforeAfter && (
                <span> · <span className="font-bold text-primary">{imagePairs.length}</span> before & after comparisons</span>
              )}
            </p>
          </div>

          {/* Before/After Gallery */}
          {project.beforeAfter && imagePairs.length > 0 && (
            <div className="space-y-12">
              <h3 className="font-headline text-headline-md text-primary">
                Before & After
              </h3>
              {imagePairs.map((pair, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      alt={pair.before.alt}
                      src={pair.before.src}
                    />
                    <div className="absolute top-4 left-4 bg-red-600/90 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                      Before
                    </div>
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-lg group">
                    <img
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      alt={pair.after.alt}
                      src={pair.after.src}
                    />
                    <div className="absolute top-4 left-4 bg-emerald-600/90 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                      After
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Standard Gallery */}
          {!project.beforeAfter && project.images.length > 0 && (
            <div className="space-y-8">
              <h3 className="font-headline text-headline-md text-primary">
                Project Gallery
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                {project.images.map((img, i) => (
                  <div
                    key={i}
                    className="relative rounded-xl overflow-hidden shadow-lg group"
                  >
                    <img
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      alt={img.alt}
                      src={img.src}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-container-high py-16 px-5 md:px-margin-desktop">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-headline-lg text-primary mb-6">
            Like what you see?
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant mb-10">
            Let's discuss how BrinJoe Construction can bring the same quality and
            precision to your next project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/contact"
              className="bg-secondary-container text-white px-10 py-5 font-headline text-button uppercase tracking-widest hover:scale-105 transition-transform shadow-lg"
            >
              Get a Free Estimate
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-primary-container text-primary-container px-10 py-5 font-headline text-button uppercase tracking-widest hover:bg-primary-container hover:text-white transition-all"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
