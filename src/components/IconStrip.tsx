'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const INITIAL_ROT = [0, 90, 180, 270, 0, 90, 180, 270, 0, 90, 180, 270];

const stripClass = [
  'absolute bottom-[60px] left-0 right-0',
  'flex items-center justify-center gap-[11px] px-5 overflow-hidden',
  'max-[700px]:gap-[7px]',
  'max-[480px]:gap-[5px] max-[480px]:pb-6',
].join(' ');

const tileWrapClass = [
  'w-[61px] h-[60px] flex-shrink-0 flex items-center justify-center',
  'max-[700px]:w-[52px] max-[700px]:h-[52px]',
  'max-[480px]:w-10 max-[480px]:h-10',
].join(' ');

export default function IconStrip() {
  const [rots, setRots] = useState<number[]>(INITIAL_ROT);
  const cursor = useRef(0);

  useEffect(() => {
    const tick = () => {
      setRots((prev) => {
        const next = [...prev];
        next[cursor.current] += 90;
        cursor.current = (cursor.current + 1) % prev.length;
        return next;
      });
    };

    const first = setTimeout(tick, 800);
    const interval = setInterval(tick, 600);
    return () => {
      clearTimeout(first);
      clearInterval(interval);
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
