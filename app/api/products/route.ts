import { NextResponse } from 'next/server';
import { db, sb } from '../../../lib/supabase';
import { demo } from '../../../lib/data';

function toClient(row: any) {
  return {
    ...row,
    desc: row.desc ?? row.description ?? '',
  };
}

export async function GET() {
  if (!db) return NextResponse.json(demo);
  const r = await sb('products?select=*&order=created_at.desc');
  const data = await r.json();
  return NextResponse.json(Array.isArray(data) ? data.map(toClient) : data);
}

export async function POST(req: Request) {
  const x = await req.json();
  const row = {
    slug: String(x.slug || ''),
    name: String(x.name || ''),
    cat: String(x.cat || ''),
    price: Number(x.price || 0),
    description: String(x.desc ?? x.description ?? ''),
    image: x.image ? String(x.image) : null,
  };

  if (db) {
    const r = await sb('products', {
      method: 'POST',
      headers: { Prefer: 'return=representation' },
      body: JSON.stringify(row),
    });
    const data = await r.json();
    return NextResponse.json(Array.isArray(data) ? toClient(data[0]) : data, {
      status: r.ok ? 200 : r.status,
    });
  }

  return NextResponse.json({ ...row, desc: row.description });
}
