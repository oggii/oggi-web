type PlausibleProps = Record<string, string | number | boolean>;

type PlausibleFn = (event: string, options?: { props?: PlausibleProps }) => void;

declare global {
  interface Window {
    plausible?: PlausibleFn;
  }
}

export function track(event: string, props?: PlausibleProps): void {
  if (typeof window === 'undefined') return;
  window.plausible?.(event, props ? { props } : undefined);
}
