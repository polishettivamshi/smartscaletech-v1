import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Brain,
  Cloud,
  Database,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  FileText,
  Presentation,
  Terminal,
  ShieldCheck,
} from 'lucide-react';
import { SEO } from '../../lib/seo';
import { Breadcrumb } from '../ui/Breadcrumb';
import { Button } from '../ui/Button';

type ProjectDomain = 'all' | 'ai-ml' | 'mern' | 'cloud-devops' | 'data';

interface ProjectBlueprint {
  id: string;
  title: string;
  domain: Exclude<ProjectDomain, 'all'>;
  domainLabel: string;
  degreeFit: string;
  stack: string[];
  summary: string;
  highlights: string[];
}

const DOMAIN_FILTERS: { id: ProjectDomain; label: string }[] = [
  { id: 'all', label: 'All Projects (8)' },
  { id: 'ai-ml', label: 'AI & ML' },
  { id: 'mern', label: 'Full-Stack MERN' },
  { id: 'cloud-devops', label: 'Cloud & DevOps' },
  { id: 'data', label: 'Data & Python' },
];

const PROJECT_CATALOG: ProjectBlueprint[] = [
  {
    id: 'ai-resume-screener',
    title: 'AI-Powered Resume Screening & Skill Gap Analyzer',
    domain: 'ai-ml',
    domainLabel: 'AI / NLP',
    degreeFit: 'B.Tech CSE · AI&ML · MCA',
    stack: ['Python', 'FastAPI / Flask', 'NLP / TF-IDF', 'React'],
    summary:
      'Automated candidate-to-JD ranking engine using NLP keyword extraction, cosine similarity scoring, and structured gap reports.',
    highlights: ['Live web dashboard', 'IEEE-aligned paper structure', 'Visual score analytics'],
  },
  {
    id: 'medical-disease-pred',
    title: 'Multi-Disease Early Risk Prediction Portal',
    domain: 'ai-ml',
    domainLabel: 'Machine Learning',
    degreeFit: 'B.Tech · M.Tech · Data Science',
    stack: ['Scikit-Learn', 'XGBoost', 'Streamlit / React', 'SQLite'],
    summary:
      'Ensemble ML pipeline predicting diabetes, heart, and kidney risk metrics with SHAP feature explainability for clinical viva demos.',
    highlights: ['Trained model artifacts', 'Confusion matrix metrics', 'REST API inference'],
  },
  {
    id: 'smart-lms-mern',
    title: 'Full-Stack Campus Placement & Coding Portal',
    domain: 'mern',
    domainLabel: 'MERN Stack',
    degreeFit: 'B.Tech · MCA · BCA',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    summary:
      'Multi-role campus placement tracker with student resume uploads, eligibility filtering, and admin interview scheduling.',
    highlights: ['Role-based authentication', 'REST API docs', 'Responsive admin dashboard'],
  },
  {
    id: 'telehealth-booking',
    title: 'Real-Time Telehealth Consultation & Pharmacy App',
    domain: 'mern',
    domainLabel: 'Full-Stack Web',
    degreeFit: 'B.Tech CSE · IT · MCA',
    stack: ['TypeScript', 'React', 'Express', 'PostgreSQL / Mongo'],
    summary:
      'End-to-end appointment scheduling platform with doctor availability slots, digital prescriptions, and automated reminders.',
    highlights: ['ER & DFD diagrams ready', 'Clean modular codebase', 'Cloud demo hosted'],
  },
  {
    id: 'cicd-docker-k8s',
    title: 'Zero-Downtime Microservices CI/CD Pipeline on Cloud',
    domain: 'cloud-devops',
    domainLabel: 'Cloud & DevOps',
    degreeFit: 'B.Tech · M.Tech Cloud',
    stack: ['Docker', 'GitHub Actions', 'Nginx', 'AWS / Cloud Run'],
    summary:
      'Automated build, container vulnerability scan, and blue-green cloud deployment architecture with health monitoring endpoints.',
    highlights: ['Live CI/CD workflow', 'Architecture blueprint', 'Monitoring endpoints'],
  },
  {
    id: 'serverless-invoice',
    title: 'Serverless Expense & GST Invoice Processing Engine',
    domain: 'cloud-devops',
    domainLabel: 'Cloud Architecture',
    degreeFit: 'B.Tech CSE · Cloud Computing',
    stack: ['Node.js', 'Cloud Functions', 'Cloud Storage', 'React'],
    summary:
      'Event-driven serverless pipeline parsing uploaded receipts, generating GST-compliant PDFs, and storing audit trails.',
    highlights: ['Scalable serverless flow', 'Low-latency API', 'Full deployment guide'],
  },
  {
    id: 'ecommerce-churn',
    title: 'Customer Churn & Revenue Cohort Analytics Dashboard',
    domain: 'data',
    domainLabel: 'Data Analytics',
    degreeFit: 'B.Tech · MBA Analytics · MCA',
    stack: ['Python', 'Pandas', 'SQL', 'Interactive Charts'],
    summary:
      'RFM segmentation and churn prediction platform visualizing customer retention KPIs and seasonal sales forecasts.',
    highlights: ['Interactive KPI filters', 'Clean CSV pipeline', 'Executive summary report'],
  },
  {
    id: 'fraud-detection',
    title: 'Real-Time UPI & Credit Card Anomaly Detection System',
    domain: 'data',
    domainLabel: 'Data Science',
    degreeFit: 'B.Tech AI&DS · M.Tech',
    stack: ['Python', 'Isolation Forest', 'FastAPI', 'React'],
    summary:
      'Transaction risk scoring engine flagging velocity anomalies and unusual spending patterns with explainable alert logs.',
    highlights: ['SMOTE class balancing', 'Simulated live feed', 'ROC-AUC comparison'],
  },
];

const PACKAGE_INCLUSIONS = [
  {
    icon: Code2,
    title: 'Working Source Code',
    desc: 'Clean, modular, well-commented code pushed to your GitHub with environment setup scripts.',
  },
  {
    icon: FileText,
    title: 'Project Report & Diagrams',
    desc: 'IEEE / university-formatted synopsis, system architecture, UML, ER, and DFD documentation.',
  },
  {
    icon: Presentation,
    title: 'Review PPTs & Cloud Demo Link',
    desc: 'Ready-to-present Review 1, Review 2 & Final Viva slide decks plus a live deployed URL.',
  },
  {
    icon: Terminal,
    title: '1-on-1 Code Walkthrough & Viva Prep',
    desc: 'Direct session with Founder Vamshi so you can explain every file, API, and model in your viva.',
  },
];

export const FinalYearProjectsPage = () => {
  const [activeDomain, setActiveDomain] = useState<ProjectDomain>('all');

  const filteredProjects =
    activeDomain === 'all'
      ? PROJECT_CATALOG
      : PROJECT_CATALOG.filter((p) => p.domain === activeDomain);

  return (
    <main className="bg-[#F3EEE3] min-h-screen">
      <SEO
        title="Final Year Projects Hyderabad (B.Tech, M.Tech, MCA) | Smart Scale Tech (SST)"
        description="End-to-end B.Tech, M.Tech & MCA final year projects in Hitech City, Hyderabad by Smart Scale Tech (SST) across AI/ML, MERN Full-Stack, Cloud DevOps & Data Science with source code, report, PPT & viva prep."
        keywords="final year projects hyderabad, btech final year projects hitech city, mca mtech ieee projects hyderabad, ai ml mern final year project center hyderabad, sst final year projects"
        path="/final-year-projects"
      />

      {/* Hero Header */}
      <section className="pt-12 pb-16 sm:pt-16 border-b border-[#D8D3C9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Home', to: '/' },
              { label: 'Services', to: '/#services' },
              { label: 'Final Year Projects' },
            ]}
            className="mb-7"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#D9541E]">
                Hitech City, Hyderabad · B.Tech, M.Tech, MCA &amp; BCA
              </p>

              <h1 className="text-hero-display font-extrabold text-[#111111]">
                Final Year Projects built for real viva &amp; resume value.
              </h1>

              <p className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-2xl">
                Stop buying broken copy-paste zip files. Get a clean, working build you genuinely
                understand—complete with source code, university documentation, PPT decks, cloud
                demo link, and 1-on-1 viva training starting at{' '}
                <strong className="text-[#111111]">₹2,999</strong>.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://wa.me/919000859695?text=Hello%20SmartScaleTech%2C%20I%20need%20a%20Final%20Year%20Project%20synopsis%20and%20demo%20list."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" size="lg">
                    <MessageCircle size={16} /> Get Synopsis List on WhatsApp
                  </Button>
                </a>
                <Link to="/custom-package-builder">
                  <Button variant="secondary" size="lg">
                    Add ATS Resume (+Bundle Discount) <ArrowRight size={15} />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#D8D3C9] bg-white p-2">
                <img
                  src="/assets/aistudio/Final_Year_Projects__Ideas_in_Code_c262fb23.webp"
                  alt="Final Year Projects Architecture and Code Development by SmartScaleTech"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Inclusions */}
      <section className="py-16 bg-white border-b border-[#D8D3C9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#D9541E] mb-1">
                Complete Package · ₹2,999
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
                From Synopsis Approval to Final Viva
              </h2>
            </div>
            <span className="text-xs font-bold text-[#16845B] inline-flex items-center gap-1.5">
              <ShieldCheck size={15} /> Clean Execution &amp; Code Walkthrough Included
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PACKAGE_INCLUSIONS.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[#F3EEE3]/45 border border-[#D8D3C9] space-y-3"
              >
                <div className="h-10 w-10 rounded-xl bg-white border border-[#D8D3C9] text-[#111111] flex items-center justify-center">
                  <item.icon size={19} />
                </div>
                <h3 className="text-base font-extrabold text-[#111111]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filterable Catalog */}
      <section className="py-16 sm:py-20 bg-[#F3EEE3]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
                Explore Project Blueprints by Domain
              </h2>
              <p className="mt-2 text-sm text-[#57534E]">
                Choose a curated topic below or send your IEEE base paper for custom execution.
              </p>
            </div>

            <div
              role="tablist"
              aria-label="Filter projects by domain"
              className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white border border-[#D8D3C9] rounded-xl self-start md:self-auto"
            >
              {DOMAIN_FILTERS.map((filter) => {
                const isActive = activeDomain === filter.id;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveDomain(filter.id)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                      isActive ? 'bg-[#111111] text-white' : 'text-[#57534E] hover:text-[#111111]'
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => {
              const IconComp =
                project.domain === 'ai-ml'
                  ? Brain
                  : project.domain === 'cloud-devops'
                  ? Cloud
                  : project.domain === 'data'
                  ? Database
                  : Code2;

              return (
                <div
                  key={project.id}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-[#D8D3C9] hover:border-[#111111]/45 transition-colors flex flex-col justify-between gap-5"
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="h-10 w-10 rounded-xl bg-[#F3EEE3] border border-[#D8D3C9] text-[#D9541E] flex items-center justify-center shrink-0">
                        <IconComp size={19} />
                      </div>
                      <div className="text-xs text-[#57534E]">
                        <span className="font-bold text-[#D9541E]">{project.domainLabel}</span>
                        <span aria-hidden="true"> · </span>
                        <span>{project.degreeFit}</span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-extrabold text-[#111111] mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#57534E] leading-relaxed mb-4">{project.summary}</p>

                    <div className="text-xs font-semibold text-[#111111] mb-4">
                      Stack:{' '}
                      <span className="text-[#57534E] font-normal">{project.stack.join(' · ')}</span>
                    </div>

                    <div className="space-y-1.5">
                      {project.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-xs text-[#57534E]">
                          <CheckCircle2 size={14} className="text-[#16845B] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#EAE3D5] flex flex-wrap items-center justify-between gap-3">
                    <div className="tabular-nums">
                      <span className="text-lg font-extrabold text-[#111111]">₹2,999</span>
                      <span className="text-xs text-[#57534E] ml-1.5">Complete Package</span>
                    </div>

                    <a
                      href={`https://wa.me/919000859695?text=${encodeURIComponent(
                        `Hello SmartScaleTech, I want the synopsis & demo details for Final Year Project: "${project.title}".`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#111111] hover:bg-[#D9541E] text-white text-xs font-bold transition-colors whitespace-nowrap"
                    >
                      <MessageCircle size={14} /> Request Synopsis &amp; Demo
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};
