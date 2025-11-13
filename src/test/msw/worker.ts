import { setupWorker } from 'msw';
import { handlers } from './supabase.handlers';
export const worker = setupWorker(...handlers);