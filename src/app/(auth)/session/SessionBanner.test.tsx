import { render, screen } from '@testing-library/react'
import SessionBanner from './SessionBanner'

// ESM-safe mock
vi.mock('@/lib/supabaseBrowser', () => {
  return {
    supabaseBrowser: vi.fn(() => ({
      auth: { getSession: vi.fn().mockResolvedValue({ data: { session: null }, error: null }) }
    })),
  }
})

import { supabaseBrowser } from '@/lib/supabaseBrowser' // after vi.mock

describe('SessionBanner', () => {
  it('shows sign-in prompt when logged out', async () => {
    render(<SessionBanner />)
    expect(await screen.findByText(/you are not signed in/i)).toBeInTheDocument()
  })

  it('shows email when logged in', async () => {
    // change the mock for this test
    ;(supabaseBrowser as unknown as vi.Mock).mockReturnValue({
      auth: {
        getSession: vi.fn().mockResolvedValue({
          data: { session: { user: { email: 'test@example.com' } } }, error: null
        }),
      },
    })

    render(<SessionBanner />)
    expect(await screen.findByText(/signed in as test@example.com/i)).toBeInTheDocument()
  })
})
