type ButtonVariant = 'primary' | 'outline' | 'light'

export function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="ikh-button__icon">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 7.8 14.2 12l-4.7 4.2" />
    </svg>
  )
}

export function CheckIcon({ kind = 'blue' }: { kind?: 'blue' | 'white' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`ikh-list-icon ikh-list-icon--${kind}`}>
      <circle cx="12" cy="12" r="9" />
      <path d="m7.5 12.2 3 3 6-6.4" />
    </svg>
  )
}

export function XIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="ikh-list-icon ikh-list-icon--danger">
      <circle cx="12" cy="12" r="9" />
      <path d="m8.6 8.6 6.8 6.8M15.4 8.6l-6.8 6.8" />
    </svg>
  )
}

export function ShieldIcon({ light = false }: { light?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`ikh-shield ${light ? 'ikh-shield--light' : ''}`}>
      <path d="M12 3.5 19 6v5.3c0 4.7-2.8 7.9-7 9.2-4.2-1.3-7-4.5-7-9.2V6l7-2.5Z" />
      <path d="m8.7 12.1 2.2 2.2 4.7-5" />
    </svg>
  )
}

export function PrimaryButton({
  children,
  joinUrl,
  variant = 'primary',
  onClick,
}: {
  children: React.ReactNode
  joinUrl: string
  variant?: ButtonVariant
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}) {
  return (
    <a href={joinUrl} className={`ikh-button ikh-button--${variant}`} onClick={onClick}>
      <ArrowIcon />
      <span>{children}</span>
    </a>
  )
}

export function TrustNote({ light = false, short = false }: { light?: boolean; short?: boolean }) {
  return (
    <div className={`ikh-trust ${light ? 'ikh-trust--light' : ''}`}>
      <ShieldIcon light={light} />
      <span>
        Trusted by {short ? '' : 'over '}
        <strong>10,000+</strong> immigrants {short ? 'in USA, Canada and Europe.' : 'in the U.S., Canada, and Europe'}
      </span>
    </div>
  )
}

export function SectionActions({
  joinUrl,
  light = false,
  alignStart = false,
}: {
  joinUrl: string
  light?: boolean
  alignStart?: boolean
}) {
  return (
    <div className={`ikh-section-actions ${alignStart ? 'ikh-section-actions--left' : ''}`}>
      <PrimaryButton joinUrl={joinUrl} variant={light ? 'light' : 'primary'}>
        Become A Member
      </PrimaryButton>
      <TrustNote light={light} />
    </div>
  )
}
