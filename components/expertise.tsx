import { ClipboardList, Construction, BrainCircuit, Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { expertise } from '@/lib/portfolio-data'

const icons = {
  pm: ClipboardList,
  civil: Construction,
  ai: BrainCircuit,
}

export function Expertise() {
  return (
    <section aria-labelledby="expertise-title" id="expertise" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="03" eyebrow="Capabilities" title="Areas of Expertise" id="expertise-title" />
        <ul className="grid gap-6 md:grid-cols-3">
          {expertise.map((group, i) => {
            const Icon = icons[group.id]
            const featured = i === 2
            return (
              <li
                key={group.id}
                className={
                  featured
                    ? 'relative flex flex-col overflow-hidden rounded-xl bg-ink p-7 text-ink-foreground'
                    : 'flex flex-col rounded-xl border bg-card p-7'
                }
              >
                {featured && <div aria-hidden="true" className="blueprint-grid absolute inset-0" />}
                <div className="relative flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Icon aria-hidden="true" className="size-6" />
                    </span>
                    <span className="font-mono text-xs text-current opacity-50">{`0${i + 1}`}</span>
                  </div>
                  <h3 className="text-xl font-semibold leading-snug tracking-tight">{group.title}</h3>
                  <ul className="flex flex-col gap-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span className={featured ? 'text-ink-foreground/85' : 'text-muted-foreground'}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
