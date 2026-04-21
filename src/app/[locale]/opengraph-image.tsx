import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'ONDO Architects';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
  const stampBuffer = await readFile(
    join(process.cwd(), 'public', 'images', 'stamp.png')
  );
  const stampSrc = `data:image/png;base64,${stampBuffer.toString('base64')}`;

  const logoSize = Math.round(size.width * 0.35);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={stampSrc} width={logoSize} height={logoSize} alt="" />
      </div>
    ),
    size
  );
}
