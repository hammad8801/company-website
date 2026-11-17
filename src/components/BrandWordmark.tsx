import { cn } from '@/lib/cn'

type BrandWordmarkProps = {
  className?: string
  lineClassName?: string
}

export function BrandWordmark({ className, lineClassName }: BrandWordmarkProps) {
  return (
    <span
      className={cn(
        'inline-flex flex-col font-bold uppercase leading-[0.88] tracking-tight text-ink',
        className,
      )}
      style={{ fontFamily: 'var(--font-display)' }}
    >
      <span className={lineClassName}>Nexora</span>
      <span className={lineClassName}>Solution</span>
    </span>
  )
}
