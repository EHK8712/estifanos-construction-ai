import { Calendar, MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { experiences } from '@/lib/portfolio-data'

export function Experience() {
  return (
    <section aria-labelledby="experience-title" id="experience" className="scroll-mt-16 border-y bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="02" eyebrow="Career" title="Professional Experience" id="experience-title" />
        <ol className="relative flex flex-col gap-8 border-l-2 border-dashed border-primary/40 pl-6 md:ml-[11rem] md:pl-10">
          {experiences.map((exp, i) => (
            <li key={`${exp.company}-${exp.period}`} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[33px] top-6 size-4 rounded-full border-4 border-background bg-primary ring-2 ring-primary/40 md:-left-[49px]"
              />
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground md:absolute md:-left-[13.5rem] md:top-6 md:mb-0 md:w-36 md:text-right">
                {exp.period.split(' – ')[0]}
                <span className="hidden md:block">{'→ '}{exp.period.split(' – ')[1]}</span>
              </p>
              <article className="rounded-xl border bg-card p-6 shadow-sm md:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    {i === 0 && (
                      <span className="mb-3 inline-block rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
                        Current role
                      </span>
                    )}
                    <h3 className="text-xl font-semibold tracking-tight">{exp.role}</h3>
                    <p className="mt-1 font-medium text-accent-foreground">{exp.company}</p>
                  </div>
                  <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground md:items-end">
                    <li className="flex items-center gap-2">
                      <Calendar aria-hidden="true" className="size-4" />
                      {exp.period}
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin aria-hidden="true" className="size-4" />
                      {exp.location}
                    </li>
                  </ul>
                </div>
                {exp.project && (
                  <p className="mt-4 text-sm">
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Project: </span>
                    <span className="font-medium">{exp.project}</span>
                  </p>
                )}
                <ul className="mt-5 grid gap-3 md:grid-cols-2">
                  {exp.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rotate-45 bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
