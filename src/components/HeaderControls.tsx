import LangToggle from './LangToggle';
import ThemeToggle from './ThemeToggle';

const FIXED_CLASS = 'fixed top-5 right-6 z-[100] flex items-center gap-3';
const INLINE_CLASS = 'flex items-center gap-3';

export default function HeaderControls({
  position = 'fixed',
}: {
  position?: 'fixed' | 'inline';
}) {
  const containerClass = position === 'fixed' ? FIXED_CLASS : INLINE_CLASS;

  return (
    <div className={containerClass}>
      <ThemeToggle />
      <LangToggle position="inline" />
    </div>
  );
}
