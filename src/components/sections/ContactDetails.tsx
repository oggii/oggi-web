import type { Dictionary } from '@/i18n/dictionaries';
import ContactMapLoader from './ContactMapLoader';

const PhoneCallingIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.68-.35 1.05-.2 1.1.37 2.28.57 3.55.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.6 21 3 13.4 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.27.2 2.48.57 3.55.14.37.06.78-.2 1.05L6.6 10.8Z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="mt-1 w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.68-.35 1.05-.2 1.1.37 2.28.57 3.55.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.6 21 3 13.4 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.27.2 2.48.57 3.55.14.37.06.78-.2 1.05L6.6 10.8Z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="mt-1 w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
  </svg>
);

type Props = {
  t: Dictionary;
};

export default function ContactDetails({ t: dict }: Props) {
  const cp = dict.contactPage;

  return (
    <div className="grid gap-8 content-start">
      {/* Contact info card */}
      <div className="reveal-up relative overflow-hidden rounded-[2rem] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(157,78,221,0.22),transparent_45%),rgba(255,255,255,0.03)] p-6 md:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white">
            <PhoneCallingIcon />
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-luxota-accent">{cp.detailsTag}</p>
            <h2 className="text-2xl md:text-3xl font-medium text-white">{cp.detailsTitle}</h2>
          </div>
        </div>

        <p className="mb-8 text-base md:text-lg font-light leading-relaxed text-luxota-dim">{cp.detailsIntro}</p>

        <div className="space-y-5">
          <a
            href="tel:+41762292893"
            className="flex items-start gap-4 rounded-[1.5rem] border border-white/8 bg-black/20 px-5 py-4 transition-colors hover:border-luxota-accent/30 hover:bg-white/[0.04]"
          >
            <span className="text-luxota-accent">
              <PhoneIcon />
            </span>
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.24em] text-white/40">{cp.phoneLabel}</div>
              <div className="mt-2 text-lg font-medium text-white">+41 76 229 28 93</div>
            </div>
          </a>

          <div className="flex items-start gap-4 rounded-[1.5rem] border border-white/8 bg-black/20 px-5 py-4">
            <span className="text-luxota-accent">
              <MapPinIcon />
            </span>
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.24em] text-white/40">{cp.addressLabel}</div>
              <div className="mt-2 text-lg font-medium text-white">Grienmattweg 4, 4410 Liestal</div>
            </div>
          </div>
        </div>
      </div>

      {/* Map card — static shell + client-loaded iframe */}
      <div className="reveal-up relative overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.03] shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-luxota-accent/40 to-transparent"></div>

        <div className="flex items-center justify-between border-b border-white/8 px-6 md:px-8 py-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-luxota-accent">{cp.mapTag}</p>
            <h3 className="mt-2 text-xl font-medium text-white">{cp.mapTitle}</h3>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/60">
            Liestal
          </div>
        </div>

        <ContactMapLoader />
      </div>
    </div>
  );
}
