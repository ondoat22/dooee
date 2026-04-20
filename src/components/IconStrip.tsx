'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const TILE_COUNT = 12;
const INITIAL_STATE = {
  rots: Array.from({ length: TILE_COUNT }, (_, i) => (i * 90) % 360),
  cursor: 0,
};

const stripClass = [
  'absolute bottom-[60px] left-0 right-0',
  'flex items-center justify-center gap-[11px] px-5 overflow-x-clip overflow-y-visible py-3',
  'max-[700px]:gap-[7px]',
  'max-[480px]:gap-[5px] max-[480px]:pb-6',
].join(' ');

const tileWrapClass = [
  'w-[61px] h-[60px] flex-shrink-0 flex items-center justify-center',
  'max-[700px]:w-[52px] max-[700px]:h-[52px]',
  'max-[480px]:w-10 max-[480px]:h-10',
].join(' ');

export default function IconStrip() {
  const [{ rots }, setState] = useState(INITIAL_STATE);

  useEffect(() => {
    const tick = () =>
      setState((s) => {
        const next = [...s.rots];
        next[s.cursor] += 90;
        return { rots: next, cursor: (s.cursor + 1) % next.length };
      });

    let interval: ReturnType<typeof setInterval> | undefined;
    const first = setTimeout(() => {
      tick();
      interval = setInterval(tick, 600);
    }, 800);
    return () => {
      clearTimeout(first);
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <div className={stripClass}>
      {rots.map((rot, i) => (
        <div key={i} className={tileWrapClass}>
          <Image
            src="/images/icon-tile.png"
            alt=""
            width={61}
            height={60}
            className="icon-tile-img w-full h-full block"
            style={{ transform: `rotate(${rot}deg)` }}
            priority={i < 4}
          />
        </div>
      ))}
    </div>
  );
}
