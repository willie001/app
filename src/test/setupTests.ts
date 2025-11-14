import '@testing-library/jest-dom';
import { server } from './msw/server';

// Start MSW in tests
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
