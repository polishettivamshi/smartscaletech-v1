interface TrustGuaranteeBannerProps {
  onOpenSamples?: () => void;
}

const TRUST_SIGNALS = [
  {
    value: 'Direct Founder Work',
    label: 'Consult directly with Vamshi Polishetti - no outsourced templates or middle layers.',
  },
  {
    value: '24–48 Hr Turnaround',
    label: 'First resume & LinkedIn drafts delivered within 48 hours with revision rounds.',
  },
  {
    value: '19+ Digital Services',
    label: 'Full-stack web apps, UI/UX, AI integration, SEO, ATS resumes & academic projects.',
  },
  {
    value: 'Full Code Ownership',
    label: 'Clean React/TypeScript repositories and editable Word + PDF files handed over.',
  },
];

export const TrustGuaranteeBanner = ({ onOpenSamples }: TrustGuaranteeBannerProps = {}) => {
  return (
    <section
      aria-label="Verified Studio Standards"
      className="bg-white border-y border-[#D8D3C9] py-8"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TRUST_SIGNALS.map((item) => (
            <div key={item.value} className="space-y-1">
              <p className="font-display text-sm sm:text-base font-extrabold text-[#111111]">
                {item.value}
              </p>
              <p className="text-xs text-[#57534E] leading-relaxed">{item.label}</p>
            </div>
          ))}
        </div>

        {onOpenSamples && (
          <div className="mt-6 pt-5 border-t border-[#D8D3C9] flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="text-[#57534E]">
              Every claim on our site is verifiable—inspect sample deliverables or test our free tools directly.
            </span>
            <button
              type="button"
              onClick={onOpenSamples}
              className="font-semibold text-[#111111] hover:text-[#D9541E] underline underline-offset-4 cursor-pointer"
            >
              Preview Deliverable Samples →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
