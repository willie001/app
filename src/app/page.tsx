import Link from "next/link";
import Card from "@/components/Card";
import { btn } from "@/components/ui";

export default function Home() {
  return (
    <Card title="Welcome" actions={
      <>
        <Link href="/sign-in" className={btn(true)}>Sign In</Link>
        <Link href="/sign-out" className={btn(false)}>Sign Out</Link>
      </>
    }>
      <p className="text-gray-700">
        This is your Next.js + Supabase + TDD starter.
      </p>
      <ul className="list-disc pl-5 space-y-1 text-gray-700">
        <li><Link href="/dashboard">Go to Dashboard</Link></li>
        <li><Link href="/sign-in">Go to Sign-In</Link></li>
        <li><Link href="/sign-out">Go to Sign-Out</Link></li>
      </ul>      
    </Card>
  );
}
