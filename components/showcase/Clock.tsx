'use client';

import { useEffect, useState } from 'react';

const fmt = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Kuala_Lumpur',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
});

/** "Kuala Lumpur 10:42:07 pm", ticking. Renders nothing until mounted to avoid a hydration mismatch. */
export default function Clock({ className }: { className?: string }) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    const tick = () => setNow(new Date());
    const first = requestAnimationFrame(tick);
    const id = setInterval(tick, 1000);
    return () => {
      cancelAnimationFrame(first);
      clearInterval(id);
    };
  }, []);
  return (
    <span className={className} suppressHydrationWarning>
      Kuala Lumpur {now ? fmt.format(now).toUpperCase() : ''}
    </span>
  );
}
