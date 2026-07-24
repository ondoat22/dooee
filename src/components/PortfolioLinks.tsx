'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Modal from './Modal';

type Portfolio = { name: string; hoverLabel?: string; images: string[] };

const PLACEHOLDER_COUNT = 3;

export default function PortfolioLinks({ portfolios }: { portfolios: Portfolio[] }) {
  const t = useTranslations('dooee');
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);

  const active = activeIdx !== null ? portfolios[activeIdx] : null;
  const slides: (string | null)[] = active
    ? active.images.length > 0
      ? active.images
      : Array(PLACEHOLDER_COUNT).fill(null)
    : [];

  const open = (i: number) => {
    setActiveIdx(i);
    setSlide(0);
  };
  const close = () => setActiveIdx(null);
  const prev = () => setSlide((s) => (s - 1 + slides.length) % slides.length);
  const next = () => setSlide((s) => (s + 1) % slides.length);

  return (
    <>
      <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-3 items-start max-w-[380px]">
        {portfolios.map((pf, i) =>
          pf.hoverLabel ? (
            <button
              key={i}
              type="button"
              onClick={() => open(i)}
              className="group/pf inline-block text-sm text-left"
            >
              <span className="grid overflow-hidden">
                <span className="[grid-area:1/1] whitespace-nowrap transition-transform duration-200 ease-out text-neutral-900 dark:text-white group-hover/pf:-translate-y-full">
                  {pf.name}
                </span>
                <span className="[grid-area:1/1] whitespace-nowrap translate-y-full transition-transform duration-200 ease-out text-ondo-red group-hover/pf:translate-y-0">
                  {pf.hoverLabel}
                </span>
              </span>
              <span className="block h-px w-full origin-left scale-x-0 bg-ondo-red transition-transform duration-300 ease-out group-hover/pf:scale-x-100 mt-0.5" />
            </button>
          ) : (
            <button
              key={i}
              type="button"
              onClick={() => open(i)}
              className="group/pf relative inline-block text-sm text-neutral-900 dark:text-white transition-colors hover:text-ondo-red dark:hover:text-ondo-red"
            >
              {pf.name}
              <span className="pointer-events-none absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-ondo-red transition-transform duration-300 ease-out group-hover/pf:scale-x-100" />
            </button>
          )
        )}
      </div>

      <Modal
        open={active !== null}
        onClose={close}
        labelledBy="portfolio-modal-title"
        panelClassName="relative w-full max-w-4xl bg-white dark:bg-ondo-card rounded-xl shadow-2xl border border-black/5 dark:border-white/5"
      >
        {active && (
          <div className="p-4">
            <div
              id="portfolio-modal-title"
              className="text-[15px] font-medium text-neutral-900 dark:text-white mb-3 px-1 pr-8"
            >
              {active.name}
            </div>

            <div className="relative h-[58vh] sm:h-[70vh] bg-neutral-100 dark:bg-black rounded-lg overflow-hidden flex items-center justify-center select-none">
              {slides[slide] ? (
                <Image
                  src={slides[slide] as string}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 90vw, 896px"
                  className="object-contain select-none pointer-events-none"
                  draggable={false}
                />
              ) : (
                <span className="text-[13px] text-neutral-400 dark:text-neutral-600">
                  {t('portfolioEmpty')}
                </span>
              )}

              {slides.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous"
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 dark:bg-black/60 text-neutral-700 dark:text-white shadow hover:bg-white dark:hover:bg-black transition-colors"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 dark:bg-black/60 text-neutral-700 dark:text-white shadow hover:bg-white dark:hover:bg-black transition-colors"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {slides.length > 1 && (
              <div className="flex justify-center items-center mt-3 text-[12px] tabular-nums text-neutral-500 dark:text-neutral-400">
                <span className="text-neutral-900 dark:text-white">{String(slide + 1).padStart(2, '0')}</span>
                <span className="mx-1 text-neutral-300 dark:text-neutral-600">/</span>
                <span>{String(slides.length).padStart(2, '0')}</span>
              </div>
            )}
          </div>
        )}
        <button
          type="button"
          onClick={close}
          aria-label={t('close')}
          className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center text-neutral-400 hover:text-neutral-700 dark:hover:text-white transition-colors z-10"
        >
          ✕
        </button>
      </Modal>
    </>
  );
}
