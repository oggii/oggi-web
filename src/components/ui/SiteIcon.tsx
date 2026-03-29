type SiteIconProps = {
  icon: string;
  className?: string;
  'aria-hidden'?: boolean;
};

function StrokeIcon({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function FilledIcon({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      {children}
    </svg>
  );
}

export default function SiteIcon({ icon, className }: SiteIconProps) {
  switch (icon) {
    case 'solar:arrow-right-linear':
      return (
        <StrokeIcon className={className}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </StrokeIcon>
      );

    case 'mdi:chevron-down':
    case 'solar:alt-arrow-down-linear':
      return (
        <StrokeIcon className={className}>
          <path d="m6 9 6 6 6-6" />
        </StrokeIcon>
      );

    case 'mdi:close':
      return (
        <StrokeIcon className={className}>
          <path d="M6 6l12 12" />
          <path d="M18 6 6 18" />
        </StrokeIcon>
      );

    case 'solar:hamburger-menu-linear':
      return (
        <StrokeIcon className={className}>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </StrokeIcon>
      );

    case 'mdi:instagram':
      return (
        <StrokeIcon className={className}>
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </StrokeIcon>
      );

    case 'mdi:linkedin':
      return (
        <FilledIcon className={className}>
          <path d="M6.75 8.5A1.25 1.25 0 1 0 6.75 6a1.25 1.25 0 0 0 0 2.5ZM5.7 9.7h2.1V18H5.7V9.7Zm3.6 0h2v1.14h.03c.28-.53.96-1.29 1.98-1.29 2.12 0 2.52 1.39 2.52 3.2V18H13.7v-4.65c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46V18H8.3V9.7Z" />
        </FilledIcon>
      );

    case 'solar:mouse-circle-linear':
      return (
        <StrokeIcon className={className}>
          <circle cx="12" cy="12" r="9" />
          <rect x="9.2" y="6" width="5.6" height="12" rx="2.8" />
          <path d="M12 9v2" />
        </StrokeIcon>
      );

    case 'solar:hand-swipe-right-linear':
      return (
        <StrokeIcon className={className}>
          <path d="M4 12h8" />
          <path d="m10 8 4 4-4 4" />
          <path d="M16 9h2a2 2 0 0 1 0 4h-2" />
        </StrokeIcon>
      );

    case 'solar:check-circle-linear':
      return (
        <StrokeIcon className={className}>
          <circle cx="12" cy="12" r="9" />
          <path d="m8.5 12.5 2.3 2.3 4.7-5.1" />
        </StrokeIcon>
      );

    case 'solar:laptop-minimalistic-bold-duotone':
      return (
        <StrokeIcon className={className}>
          <rect x="5" y="6" width="14" height="10" rx="1.5" />
          <path d="M3.5 18h17" />
        </StrokeIcon>
      );

    case 'solar:ranking-bold-duotone':
      return (
        <StrokeIcon className={className}>
          <path d="M6 17V10" />
          <path d="M12 17V7" />
          <path d="M18 17v-4" />
          <path d="M5 17h14" />
        </StrokeIcon>
      );

    case 'solar:rocket-linear':
      return (
        <StrokeIcon className={className}>
          <path d="M14 5c2.5 0 4.5 2 4.5 4.5 0 3.5-2.7 7.2-7.4 8.8-.7.2-1.4-.5-1.1-1.2C11.6 12.4 15.3 9.7 18.8 9.7" />
          <path d="m10 14-3.5 3.5" />
          <path d="M8 8 5 11" />
          <path d="M15.5 8.5h.01" />
        </StrokeIcon>
      );

    case 'solar:network-linear':
      return (
        <StrokeIcon className={className}>
          <circle cx="6" cy="12" r="2" />
          <circle cx="18" cy="7" r="2" />
          <circle cx="18" cy="17" r="2" />
          <path d="M8 12h4" />
          <path d="m13.5 11 3-2.5" />
          <path d="m13.5 13 3 2.5" />
        </StrokeIcon>
      );

    case 'solar:layers-minimalistic-bold-duotone':
    case 'solar:layers-bold-duotone':
      return (
        <StrokeIcon className={className}>
          <path d="m12 5 7 4-7 4-7-4 7-4Z" />
          <path d="m5 12 7 4 7-4" />
          <path d="m5 15 7 4 7-4" />
        </StrokeIcon>
      );

    case 'solar:graph-up-bold':
      return (
        <StrokeIcon className={className}>
          <path d="M5 17h14" />
          <path d="m7 14 3-3 2.5 2.5L17 9" />
          <path d="M14 9h3v3" />
        </StrokeIcon>
      );

    case 'solar:global-bold':
      return (
        <StrokeIcon className={className}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a14 14 0 0 1 0 18" />
          <path d="M12 3a14 14 0 0 0 0 18" />
        </StrokeIcon>
      );

    default:
      return (
        <StrokeIcon className={className}>
          <circle cx="12" cy="12" r="8" />
        </StrokeIcon>
      );
  }
}
