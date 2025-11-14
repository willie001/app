import './globals.css';
import Link from 'next/link';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 flex flex-col">
        <header className="border-b bg-white">
          <nav className="mx-auto max-w-3xl px-4 py-3 flex items-center gap-4">
            <Link href="/" className="font-semibold text-gray-900">
              PropIQ
            </Link>
            <div className="ml-auto flex items-center gap-3">
              <Link href="/dashboard" className="px-3 py-1 rounded hover:bg-gray-100">
                Dashboard
              </Link>
              <Link href="/sign-in" className="px-3 py-1 rounded hover:bg-gray-100">
                Sign in
              </Link>
              <Link href="/sign-out" className="px-3 py-1 rounded hover:bg-gray-100">
                Sign out
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex-1 flex items-center justify-center p-6">
          {/* sanity probe — should render as a red pill if Tailwind is active */}
          <div className="bg-red-500 text-white px-3 py-1 rounded-2xl">Tailwind works</div>
          {children}
        </main>
      </body>
    </html>
  );
}
