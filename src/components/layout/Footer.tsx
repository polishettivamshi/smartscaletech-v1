import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Github, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-[#EAE3D5]/70 border-t border-[#D8D3C9] pt-16 pb-10 text-[#111111]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#D8D3C9]">
          {/* Brand Summary */}
          <div className="md:col-span-4 space-y-5">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <img
                src="/logo.png"
                alt=""
                aria-hidden="true"
                className="h-9 w-9 rounded-lg object-cover"
              />
              <span className="text-xl font-display font-extrabold tracking-tight text-[#111111]">
                SmartScale<span className="text-[#D9541E]">Tech</span>
              </span>
            </Link>

            <p className="text-sm text-[#57534E] leading-relaxed max-w-sm">
              Smart Scale Tech (SST / SmartScaleTech) is a Hitech City, Hyderabad studio building custom websites, web applications, AI integrations, ATS resumes, and career assets for businesses, professionals, and graduates across India.
            </p>

            {/* Social Icons with accessible tooltips */}
            <div className="flex items-center gap-3 pt-1">
              {[
                { Icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/company/smartscale-tech' },
                { Icon: Instagram, name: 'Instagram', url: 'https://www.instagram.com/smartscale.tech' },
                { Icon: Github, name: 'GitHub', url: 'https://github.com/smartscaletech' },
                { Icon: MessageCircle, name: 'WhatsApp', url: 'https://whatsapp.com/channel/0029VbCFJRKJJhzXxOaL7g28' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  title={item.name}
                  className="group relative h-10 w-10 rounded-xl bg-white border border-[#D8D3C9] flex items-center justify-center text-[#57534E] hover:text-[#D9541E] hover:border-[#111111] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9541E]"
                >
                  <item.Icon size={17} />
                  <span
                    role="tooltip"
                    className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#111111] px-2.5 py-1 text-[11px] font-semibold text-white shadow-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 transition-all duration-150 z-20"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 bg-[#111111]" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 1: Business Solutions */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#111111] mb-4">
              Business
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Web Development', to: '/services/web-development' },
                { label: 'UI/UX Design', to: '/services/ui-ux-design' },
                { label: 'AI Integration', to: '/services/ai-integration' },
                { label: 'API Development', to: '/services/api-development' },
                { label: 'Cloud & DevOps', to: '/services/cloud-devops' },
                { label: 'SEO & Growth', to: '/services/seo-growth' },
                { label: 'Content Strategy', to: '/services/content-strategy' },
                { label: 'Ad Campaigns', to: '/services/ad-campaigns' },
                { label: 'Brand Identity', to: '/services/brand-identity' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-[#57534E] hover:text-[#D9541E] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Career Solutions */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#111111] mb-4">
              Career
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'ATS Resume Writing', to: '/services/resume-writing' },
                { label: 'LinkedIn Optimization', to: '/services/linkedin-optimization' },
                { label: 'Naukri Optimization', to: '/services/naukri-optimization' },
                { label: 'Indeed Optimization', to: '/services/indeed-optimization' },
                { label: 'Interview Coaching', to: '/services/interview-coaching' },
                { label: 'GitHub Audit', to: '/services/github-audit' },
                { label: 'Cover Letters', to: '/services/cover-letter' },
                { label: 'Salary Negotiation', to: '/services/salary-negotiation' },
                { label: 'Personal Portfolios', to: '/services/personal-portfolio' },
                { label: 'Final Year Projects', to: '/final-year-projects' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-[#57534E] hover:text-[#D9541E] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Free Tools & Studio */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#111111] mb-4">
              Tools &amp; Studio
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Free Tools Hub', to: '/tools' },
                { label: 'Free ATS Checker', to: '/free-ats-resume-checker' },
                { label: 'Headline Generator', to: '/linkedin-headline-generator' },
                { label: 'Job Readiness Audit', to: '/job-readiness-audit' },
                { label: 'Bundle Builder', to: '/custom-package-builder' },
                { label: 'Selected Work', to: '/work' },
                { label: 'About Studio', to: '/about' },
                { label: 'Request Proposal', to: '/request-service' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-[#57534E] hover:text-[#D9541E] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Contact */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#111111] mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#57534E]">
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="text-[#D9541E] shrink-0 mt-0.5" />
                <a
                  href="mailto:smartscaletechforyou@gmail.com"
                  className="hover:text-[#111111] break-all"
                >
                  smartscaletechforyou@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="text-[#D9541E] shrink-0 mt-0.5" />
                <a href="tel:+919000859695" className="hover:text-[#111111] tabular-nums">
                  +91 90008 59695
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#D9541E] shrink-0 mt-0.5" />
                <span>Hitech City, Hyderabad, Telangana, India</span>
              </li>
              <li className="pt-1 text-xs font-semibold text-[#111111]">
                Mon–Sat · 9:00 AM – 9:00 PM IST
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#57534E]">
          <p>&copy; {new Date().getFullYear()} Smart Scale Tech (SmartScaleTech). All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <span>
              Founded by{' '}
              <a
                href="https://www.linkedin.com/in/polishettivamshi/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#111111] hover:text-[#D9541E]"
              >
                Vamshi Polishetti
              </a>
            </span>
            <Link to="/privacy-policy" className="hover:text-[#111111]">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-[#111111]">
              Terms of Service
            </Link>
            <Link to="/refund-policy" className="hover:text-[#111111]">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
