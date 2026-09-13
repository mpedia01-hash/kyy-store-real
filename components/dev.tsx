'use client';
import { useEffect, useState } from 'react';
import { DevLogin } from './devlogin';
import { DevManage } from './devmanage';

export function Dev() {
  const [o, setO] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch('/api/auth')
      .then((r) => {
        if (!cancelled) setO(r.ok);
      })
      .catch(() => {
        if (!cancelled) setO(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return o ? <DevManage /> : <DevLogin ok={setO} />;
}
