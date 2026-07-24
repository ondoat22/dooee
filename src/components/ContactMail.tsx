'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Modal from './Modal';

export default function ContactMail({ email }: { email: string }) {
  const t = useTranslations('dooee');
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable — ignore */
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-sm text-neutral-500 dark:text-neutral-400 inline-flex items-center gap-1.5 transition-all hover:text-ondo-red dark:hover:text-ondo-red hover:gap-2.5"
      >
        {t('contactLabel')} →
      </button>

      <Modal open={open} onClose={() => setOpen(false)} labelledBy="contact-modal-title">
        <div className="p-6">
          <div id="contact-modal-title" className="text-[15px] font-medium text-neutral-900 dark:text-white mb-1">
            {t('secContact')}
          </div>
          <div className="text-[13px] text-neutral-500 dark:text-neutral-400 mb-5">{email}</div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={copy}
              className="flex-1 text-[13px] text-neutral-900 dark:text-white bg-neutral-100 dark:bg-ondo-card2 rounded-lg px-3 py-2.5 transition-colors hover:bg-neutral-200 dark:hover:bg-black"
            >
              {copied ? t('mailCopied') : t('mailCopy')}
            </button>
            <a
              href={`mailto:${email}`}
              className="flex-1 text-center text-[13px] text-white bg-ondo-red rounded-lg px-3 py-2.5 transition-opacity hover:opacity-90"
            >
              {t('mailOpen')}
            </a>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label={t('close')}
          className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center text-neutral-400 hover:text-neutral-700 dark:hover:text-white transition-colors"
        >
          ✕
        </button>
      </Modal>
    </>
  );
}
