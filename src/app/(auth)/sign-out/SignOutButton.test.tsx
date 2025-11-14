import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignOutButton from './SignOutButton';

vi.mock('@/lib/supabaseBrowser', () => ({
  supabaseBrowser: () => ({
    auth: { signOut: vi.fn().mockResolvedValue({ error: null }) },
  }),
}));

describe('SignOutButton', () => {
  it('signs the user out and shows confirmation', async () => {
    render(<SignOutButton />);
    await userEvent.click(screen.getByRole('button', { name: /sign out/i }));
    expect(await screen.findByText(/signed out successfully/i)).toBeInTheDocument();
  });
});
