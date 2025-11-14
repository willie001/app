import { setupWorker } from 'msw/browser';
import { handlers } from './supabase.handlers';
export const worker = setupWorker(...handlers);
