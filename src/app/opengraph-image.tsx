import { ImageResponse } from 'next/og';

export const alt = '0ggi Web & AI';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          background: 'linear-gradient(135deg, #050507 0%, #0d0d12 55%, #191029 100%)',
          color: 'white',
          fontFamily: 'Arial, sans-serif',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 20% 20%, rgba(157,78,221,0.28), transparent 35%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1), transparent 30%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 40,
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 32,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '56px 64px',
            background: 'rgba(255,255,255,0.03)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ fontSize: 24, letterSpacing: 8, color: '#9D4EDD', textTransform: 'uppercase' }}>0GGI</div>
            <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, maxWidth: 760 }}>
              High-performance websites and AI agents for real growth.
            </div>
            <div style={{ fontSize: 28, lineHeight: 1.4, color: 'rgba(255,255,255,0.72)', maxWidth: 760 }}>
              Next.js, technical SEO, conversion-focused design, and smart automation for ambitious businesses.
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 24 }}>
            <div style={{ display: 'flex', gap: 20, color: 'rgba(255,255,255,0.75)' }}>
              <span>Webdesign</span>
              <span>SEO</span>
              <span>AI Agents</span>
            </div>
            <div style={{ color: '#9D4EDD' }}>0ggi.ch</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}

