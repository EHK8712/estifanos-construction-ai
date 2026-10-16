import Image from 'next/image'
import { ArrowRight, MapPin, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { profile } from '@/lib/portfolio-data'

const stats = [
  { value: '5+', label: 'Years in infrastructure' },
  { value: '3', label: 'Major road projects' },
  { value: 'AI', label: 'Engineering evaluation' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-ink-foreground">
      <div aria-hidden="true" className="blueprint-grid absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div className="flex flex-col gap-7">
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <span aria-hidden="true" className="h-px w-8 bg-primary" />
            {profile.name}
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Construction Management &amp; AI Engineering Solutions
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-ink-foreground/80">
            Combining civil engineering expertise, construction project management, and AI technology to deliver
            smarter, more efficient solutions.
          </p>
          <p className="max-w-xl text-pretty leading-relaxed text-ink-foreground/65">
            I am a Civil Engineer and Construction Project Manager with over five years of experience supporting
            highway and infrastructure projects. My background includes construction planning, cost estimating,
            budgeting, contract administration, quality control, and project coordination. I also work in AI
            engineering evaluation, applying technical expertise to assess AI-generated engineering outputs for
            accuracy and compliance.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#experience" className={cn(buttonVariants(), 'h-11 gap-2 px-5 text-base')}>
              View My Experience
              <ArrowRight aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'h-11 border-white/25 bg-transparent px-5 text-base text-ink-foreground hover:bg-white/10 hover:text-ink-foreground',
              )}
            >
              Contact Me
            </a>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-foreground/65">
            <li className="flex items-center gap-2">
              <MapPin aria-hidden="true" className="size-4 text-primary" />
              {profile.location}
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-ink-foreground">
                <Mail aria-hidden="true" className="size-4 text-primary" />
                {profile.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-xl border border-white/15">
            <Image
              src="/images/blueprint.png"
              alt=""
              width={1200}
              height={900}
              priority
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-white/15 bg-ink/80 px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-ink-foreground/70 backdrop-blur">
              <span>Typical Section — Illustrative</span>
              <span>Civil / PM / AI</span>
            </div>
          </div>
          <dl className="mt-4 grid grid-cols-3 divide-x divide-white/10 rounded-xl border border-white/15 bg-white/[0.03]">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 p-4">
                <dt className="order-2 text-xs leading-snug text-ink-foreground/60">{stat.label}</dt>
                <dd className="order-1 text-2xl font-semibold text-primary">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
