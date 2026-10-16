import { Mail, MapPin, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { profile } from '@/lib/portfolio-data'

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

export function Contact() {
  return (
    <section aria-labelledby="contact-title" id="contact" className="scroll-mt-16 relative overflow-hidden bg-ink py-20 text-ink-foreground md:py-28">
      <div aria-hidden="true" className="blueprint-grid absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-5">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <span>05</span>
            <span aria-hidden="true" className="h-px w-10 bg-primary" />
            <span>Contact</span>
          </p>
          <h2 id="contact-title" className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            {"Let's build something smarter together."}
          </h2>
          <p className="max-w-lg text-pretty text-lg leading-relaxed text-ink-foreground/70">
            Open to opportunities with construction companies, engineering firms, and technology teams, as well as
            professional collaborations that bring engineering and AI together.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href={`mailto:${profile.email}`} className={cn(buttonVariants(), 'h-11 gap-2 px-5 text-base')}>
              <Mail aria-hidden="true" />
              Email Me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'h-11 gap-2 border-white/25 bg-transparent px-5 text-base text-ink-foreground hover:bg-white/10 hover:text-ink-foreground',
              )}
            >
              <LinkedInIcon aria-hidden="true" className="size-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <ul className="flex flex-col divide-y divide-white/10 rounded-xl border border-white/15 bg-white/[0.03]">
          <li>
            <a href={`mailto:${profile.email}`} className="group flex items-center gap-4 p-6 transition-colors hover:bg-white/5">
              <Mail aria-hidden="true" className="size-5 text-primary" />
              <div className="flex-1">
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink-foreground/55">Email</p>
                <p className="break-all font-medium">{profile.email}</p>
              </div>
              <ArrowUpRight aria-hidden="true" className="size-5 opacity-50 transition-opacity group-hover:opacity-100" />
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 transition-colors hover:bg-white/5"
            >
              <LinkedInIcon aria-hidden="true" className="size-5 text-primary" />
              <div className="flex-1">
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink-foreground/55">LinkedIn</p>
                <p className="break-all font-medium">linkedin.com/in/estifanos-birihane</p>
              </div>
              <ArrowUpRight aria-hidden="true" className="size-5 opacity-50 transition-opacity group-hover:opacity-100" />
            </a>
          </li>
          <li className="flex items-center gap-4 p-6">
            <MapPin aria-hidden="true" className="size-5 text-primary" />
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink-foreground/55">Location</p>
              <p className="font-medium">{profile.location}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
