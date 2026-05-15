import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'fs';
import { join } from 'path';

const fontPath = join(process.cwd(), 'node_modules/@fontsource/inter/files/inter-latin-400-normal.woff');
const fontBoldPath = join(process.cwd(), 'node_modules/@fontsource/inter/files/inter-latin-700-normal.woff');

const fontData = readFileSync(fontPath);
const fontBoldData = readFileSync(fontBoldPath);

// Packers colors
const GREEN = '#203731';
const GOLD = '#FFB612';
const WHITE = '#FFFFFF';
const DARK = '#1a2c26';

export interface OGImageOptions {
  title: string;
  subtitle?: string;
  label?: string;
}

export async function generateOGImage({ title, subtitle, label }: OGImageOptions): Promise<Buffer> {
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          flexDirection: 'column',
          width: '1200px',
          height: '630px',
          background: GREEN,
          padding: '0',
          position: 'relative',
        },
        children: [
          // Gold top bar
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                width: '100%',
                height: '8px',
                background: GOLD,
              },
            },
          },
          // Main content area
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                padding: '60px 80px 60px 80px',
                justifyContent: 'space-between',
              },
              children: [
                // Top: branding
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    },
                    children: [
                      {
                        type: 'span',
                        props: {
                          style: { fontSize: '28px', color: GOLD, fontFamily: 'Inter', fontWeight: 700 },
                          children: '🧀',
                        },
                      },
                      {
                        type: 'span',
                        props: {
                          style: { fontSize: '22px', color: GOLD, fontFamily: 'Inter', fontWeight: 700, letterSpacing: '0.05em' },
                          children: 'CABEÇA DE QUEIJO',
                        },
                      },
                      ...(label ? [{
                        type: 'div',
                        props: {
                          style: {
                            display: 'flex',
                            marginLeft: '16px',
                            background: GOLD,
                            borderRadius: '6px',
                            padding: '4px 14px',
                          },
                          children: [{
                            type: 'span',
                            props: {
                              style: { fontSize: '14px', color: GREEN, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.08em' },
                              children: label,
                            },
                          }],
                        },
                      }] : []),
                    ],
                  },
                },
                // Middle: title
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '20px',
                    },
                    children: [
                      {
                        type: 'h1',
                        props: {
                          style: {
                            fontSize: title.length > 40 ? '56px' : '72px',
                            fontWeight: 700,
                            color: WHITE,
                            fontFamily: 'Inter',
                            lineHeight: 1.1,
                            margin: 0,
                          },
                          children: title,
                        },
                      },
                      ...(subtitle ? [{
                        type: 'p',
                        props: {
                          style: {
                            fontSize: '26px',
                            color: GOLD,
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            margin: 0,
                            lineHeight: 1.4,
                          },
                          children: subtitle,
                        },
                      }] : []),
                    ],
                  },
                },
                // Bottom: URL
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    },
                    children: [
                      {
                        type: 'div',
                        props: {
                          style: { display: 'flex', width: '40px', height: '4px', background: GOLD, borderRadius: '2px' },
                        },
                      },
                      {
                        type: 'span',
                        props: {
                          style: { fontSize: '18px', color: `${WHITE}99`, fontFamily: 'Inter', fontWeight: 400 },
                          children: 'cabecadequeijo.com',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          // Gold bottom bar
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                width: '100%',
                height: '8px',
                background: GOLD,
              },
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Inter', data: fontData, weight: 400, style: 'normal' },
        { name: 'Inter', data: fontBoldData, weight: 700, style: 'normal' },
      ],
    }
  );

  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
  return Buffer.from(resvg.render().asPng());
}
