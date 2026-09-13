'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu } from './menu';
import { Sound } from './sound';

export function Shell({ children }: { children: React.ReactNode }) {
  const [o, setO] = useState(false);
  const [d, setD] = useState(false);
  const [h, setH] = useState(false);

  useEffect(() => {
    const f = () => {
      setH(window.scrollY > 80);
    };

    window.addEventListener('scroll', f);

    return () => {
      window.removeEventListener('scroll', f);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', d);
  }, [d]);

  return (
    <>
      <header className="top wrap">
        <b className="glow">𝐊𝐘𝐘 𝐒𝐓𝐎𝐑𝐄 𝐑𝐄𝐀𝐋</b>

        <button className="btn" onClick={() => setD(!d)}>
          ☾
        </button>

        <button className="btn" onClick={() => setO(!o)}>
          ☰
        </button>
      </header>

      <main>{children}</main>

      {o && <Menu />}

      <Sound />

      {!h && (
        <nav className="nav island">
          <button className="btn" onClick={() => setO(!o)}>
            ◉
          </button>

          {o && (
            <>
              <Link href="/">Home</Link>
              <Link href="/produk">Produk</Link>
              <Link href="/cara-order">Order</Link>
              <Link href="/contact">Contact</Link>
            </>
          )}
        </nav>
      )}
    </>
  );
}
