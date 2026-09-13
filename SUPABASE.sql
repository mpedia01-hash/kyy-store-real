create table if not exists products (
  slug text primary key,
  name text,
  cat text,
  price int,
  description text,
  image text,
  created_at timestamptz default now()
);

create table if not exists orders (
  id text primary key,
  slug text,
  name text,
  product text,
  total int,
  status text,
  proof text,
  created_at timestamptz default now()
);

create table if not exists settings (
  key text primary key,
  value text
);
