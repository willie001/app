import Card from '@/components/Card'
import { supabaseBrowser } from '@/lib/supabaseBrowser'

export default async function Page() {
  // In a real app you’d use server helpers; here we keep it simple:
  const supabase = supabaseBrowser()
  const { data } = await supabase.auth.getSession()
  const email = data?.session?.user?.email

  if (!email) {
    return (
      <Card title="Restricted">
        <p>Please sign in to continue.</p>
      </Card>
    )
  }

  return (
    <Card title="Dashboard">
      <p className="text-gray-700">Welcome back, {email}.</p>
    </Card>
  )
}
