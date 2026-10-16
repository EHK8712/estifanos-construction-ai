import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#projects', label: 'Projects' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 text-ink-foreground backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span
            aria-hidden="true"
            className="flex size-8 items-center justify-center rounded-md bg-primary font-mono text-sm text-primary-foreground"
          >
            EB
          </span>
          <span className="hidden sm:inline">Estifanos Birihane</span>
        </a>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-1 md:gap-2">
            {links.map((link) => (
              <li key={link.href} className="hidden md:block">
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm text-ink-foreground/75 transition-colors hover:text-ink-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className={cn(buttonVariants({ size: 'lg' }), 'px-4')}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
