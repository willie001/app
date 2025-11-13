import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignInForm from './SigInForm';


vi.mock('@/lib/supabaseBrowser', () => ({
supabaseBrowser: () => ({
auth: { signInWithOtp: vi.fn().mockResolvedValue({ data: {}, error: null }) }
})
}));


describe('SignInForm', () => {
it('sends magic link for a valid email', async () => {
render(<SignInForm />);
const email = screen.getByLabelText(/email/i);
await userEvent.type(email, 'test@example.com');
await userEvent.click(screen.getByRole('button', { name: /send magic link/i }));
expect(await screen.findByText(/check your email/i)).toBeInTheDocument();
});


it('shows validation error for empty email', async () => {
render(<SignInForm />);
await userEvent.click(screen.getByRole('button', { name: /send magic link/i }));
expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
});
});