'use client';
import React, { useState } from 'react';
import { supabaseBrowser } from '@/lib/supabaseBrowser';


export default function SignInForm() {
const [email, setEmail] = useState('');
const [message, setMessage] = useState<string | null>(null);
const [error, setError] = useState<string | null>(null);


const onSubmit = async (e: React.FormEvent) => {
e.preventDefault();
setMessage(null); setError(null);
if (!email.trim()) { setError('Email is required'); return; }
const supabase = supabaseBrowser();
const { error: err } = await supabase.auth.signInWithOtp({ email });
if (err) { setError(err.message); return; }
setMessage('Check your email for the magic link.');
};


return (
<form onSubmit={onSubmit} className="space-y-4">
<label className="block text-sm" htmlFor="email">Email</label>
<input
id="email"
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
className="border rounded p-2 w-full"
placeholder="you@example.com"
/>
<button type="submit" className="px-4 py-2 rounded bg-black text-white">Send magic link</button>
{message && <p>{message}</p>}
{error && <p role="alert" className="text-red-600">{error}</p>}
</form>
);
}