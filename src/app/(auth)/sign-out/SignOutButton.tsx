'use client';
import { useState } from 'react';
import { supabaseBrowser } from '@/lib/supabaseBrowser';

export default function SignOutButton() {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    setMessage(null);
    const supabase = supabaseBrowser();
    const { error } = await supabase.auth.signOut();
    setLoading(false);
    if (error) setMessage('Error signing out.');
    else setMessage('Signed out successfully.');
  };

  return (
    <div className="space-y-3">
      <button
        onClick={handleSignOut}
        disabled={loading}
        className="px-4 py-2 rounded bg-black text-white disabled:opacity-60"
      >
        {loading ? 'Signing out…' : 'Sign Out'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}
