'use client';
import { useEffect, useState } from 'react';
import { supabaseBrowser } from '@/lib/supabaseBrowser';

type SessionState = { status: 'loading' } | { status: 'out' } | { status: 'in'; email: string };

export default function SessionBanner() {
  const [state, setState] = useState<SessionState>({ status: 'loading' });

  useEffect(() => {
    let mounted = true;
    (async () => {
      const supabase = supabaseBrowser();
      const { data } = await supabase.auth.getSession();
      if (!mounted) return;
      const email = data?.session?.user?.email;
      setState(email ? { status: 'in', email } : { status: 'out' });
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (state.status === 'loading') {
    return <div className="text-sm text-gray-500">Checking session…</div>;
  }
  if (state.status === 'out') {
    return <div className="text-sm text-gray-700">You are not signed in.</div>;
  }
  return <div className="text-sm text-gray-700">Signed in as {state.email}</div>;
}
