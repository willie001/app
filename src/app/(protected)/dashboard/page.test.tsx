import { render, screen } from '@testing-library/react'
import Page from './page'

vi.mock('@/lib/supabaseBrowser', () => {
  return {
    supabaseBrowser: vi.fn(() => ({
      auth: { getSession: vi.fn().mockResolvedValue({ data: { session: null }, error: null }) }
    })),
  }
})
import { supabaseBrowser } from '@/lib/supabaseBrowser'

describe('/dashboard', () => {
  it('asks to sign in when logged out', async () => {
    render(await Page())
    expect(screen.getByText(/please sign in to continue/i)).toBeInTheDocument()
  })

  it('shows dashboard when logged in', async () => {
    ;(supabaseBrowser as unknown as vi.Mock).mockReturnValue({
      auth: {
        getSession: vi.fn().mockResolvedValue({
          data: { session: { user: { email: 'u@x.com' } } }, error: null
        }),
      },
    })

    render(await Page())
    expect(screen.getByRole('heading', { name: /dashboard/i })).toBeInTheDocument()
  })
})
