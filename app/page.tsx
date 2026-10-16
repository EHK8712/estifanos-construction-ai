import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Expertise } from '@/components/expertise'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { profile } from '@/lib/portfolio-data'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Experience />
        <Expertise />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-ink py-8 text-ink-foreground/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm md:flex-row md:items-center md:justify-between">
          <p>
            {'© '}
            {new Date().getFullYear()} {profile.name}
          </p>
          <p className="font-mono text-xs uppercase tracking-widest">{profile.title}</p>
        </div>
      </footer>
    </>
  )
}
