export function SectionHeading({
  index,
  eyebrow,
  title,
  id,
}: {
  index: string
  eyebrow: string
  title: string
  id: string
}) {
  return (
    <div className="mb-12 flex flex-col gap-3">
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent-foreground">
        <span>{index}</span>
        <span aria-hidden="true" className="h-px w-10 bg-primary" />
        <span>{eyebrow}</span>
      </p>
      <h2 id={id} className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
    </div>
  )
}
