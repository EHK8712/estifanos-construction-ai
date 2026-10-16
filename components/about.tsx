import { HardHat, Ruler, Cpu } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const pillars = [
  { icon: HardHat, label: 'Construction Management', detail: 'Planning, budgeting, contracts, change orders' },
  { icon: Ruler, label: 'Civil Engineering', detail: 'Highway works, quantities, quality control' },
  { icon: Cpu, label: 'AI Engineering', detail: 'Technical evaluation of AI-generated outputs' },
]

export function About() {
  return (
    <section aria-labelledby="about-title" id="about" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="01" eyebrow="Profile" title="About Me" id="about-title" />
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            <p className="text-xl leading-relaxed text-foreground">
              I am a Civil Engineer and Construction Project Manager with over five years of professional experience
              in highway and infrastructure construction.
            </p>
            <p>
              My experience covers construction cost estimation, quantity calculations, project scheduling,
              budgeting, progress monitoring, contract administration, change orders, construction quality control,
              and technical reporting.
            </p>
            <p>
              Throughout my career, I have worked with construction professionals, contractors, engineers, and
              project stakeholders to support efficient project delivery, maintain accurate documentation, and
              resolve technical and contractual issues.
            </p>
            <p>
              In addition to traditional engineering and construction management, I have expanded my experience into
              artificial intelligence through my role as a Civil Engineering Subject Matter Expert and AI Prompt
              Engineer. This work involves evaluating technical documents and AI-generated engineering outputs using
              structured accuracy and compliance criteria.
            </p>
            <p>
              I am interested in opportunities that combine engineering knowledge, construction management, emerging
              technologies, and practical problem-solving.
            </p>
          </div>
          <ul className="flex flex-col gap-4">
            {pillars.map(({ icon: Icon, label, detail }) => (
              <li key={label} className="flex items-start gap-4 rounded-xl border bg-card p-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <p className="font-semibold">{label}</p>
                  <p className="text-sm text-muted-foreground">{detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
