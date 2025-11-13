create table if not exists public.profiles (
id uuid primary key references auth.users on delete cascade,
email text unique not null,
full_name text,
created_at timestamptz default now()
);


-- RLS
alter table public.profiles enable row level security;


create policy "Users can view themselves" on public.profiles
for select using (auth.uid() = id);


create policy "Users can update themselves" on public.profiles
for update using (auth.uid() = id);