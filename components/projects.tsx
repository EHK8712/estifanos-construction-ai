import { SectionHeading } from '@/components/section-heading'
import { projects } from '@/lib/portfolio-data'

export function Projects() {
  return (
    <section aria-labelledby="projects-title" id="projects" className="scroll-mt-16 border-t bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="04" eyebrow="Portfolio" title="Selected Engineering Projects" id="projects-title" />
        <ul className="grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <li key={project.name}>
              <article className="group flex h-full flex-col rounded-xl border bg-card transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
                <div className="flex items-center justify-between border-b px-6 py-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  <span>{`PRJ-0${i + 1}`}</span>
                  <span className="h-1.5 w-10 rounded-full bg-primary/70 transition-all group-hover:w-14" aria-hidden="true" />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
                  <dl className="grid gap-2 text-sm">
                    <div className="flex flex-col">
                      <dt className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Role</dt>
                      <dd className="font-medium">{project.role}</dd>
                    </div>
                    <div className="flex flex-col">
                      <dt className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                        Organization
                      </dt>
                      <dd className="font-medium text-accent-foreground">{project.organization}</dd>
                    </div>
                  </dl>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-2" aria-label="Focus areas">
                    {project.tags.map((tag) => (
                      <li key={tag} className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
