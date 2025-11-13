import { http, HttpResponse } from 'msw';


// Minimal example mocking Supabase auth endpoints
export const handlers = [
http.post('https://*.supabase.co/auth/v1/token', async () => {
return HttpResponse.json({ access_token: 'test-token', token_type: 'bearer' });
}),
http.post('https://*.supabase.co/auth/v1/otp', async () => {
return new HttpResponse(null, { status: 200 });
})
];