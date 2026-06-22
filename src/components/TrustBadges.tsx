/**
 * Shared Trust Badges component — matches the HomePage design.
 * Colorful gradient cards with icon badges for BBB, Google Rating, and Licensed & Insured.
 */
export const TrustBadges = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {/* BBB Badge */}
      <div className="flex items-center gap-4 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
        <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center shrink-0 shadow-md">
          <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
        </div>
        <div>
          <p className="font-headline text-headline-md text-blue-900 leading-tight">BBB Accredited</p>
          <p className="text-blue-600 text-sm font-medium">A+ Rating Since 1995</p>
        </div>
      </div>

      {/* Google Reviews Badge */}
      <div className="flex items-center gap-4 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
        <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center shrink-0 shadow-md">
          <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
        </div>
        <div>
          <div className="flex items-center gap-1 mb-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="material-symbols-outlined text-amber-500 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            ))}
          </div>
          <p className="font-headline text-headline-md text-amber-900 leading-tight">5.0 Google Rating</p>
          <p className="text-amber-600 text-sm font-medium">200+ Verified Reviews</p>
        </div>
      </div>

      {/* Licensed & Insured Badge */}
      <div className="flex items-center gap-4 bg-gradient-to-r from-emerald-50 to-green-100 border border-emerald-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
        <div className="w-14 h-14 bg-emerald-600 rounded-lg flex items-center justify-center shrink-0 shadow-md">
          <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
        </div>
        <div>
          <p className="font-headline text-headline-md text-emerald-900 leading-tight">Licensed & Insured</p>
          <p className="text-emerald-600 text-sm font-medium">Full Liability Coverage</p>
        </div>
      </div>
    </div>
  );
};
