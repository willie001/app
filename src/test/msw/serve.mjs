// Run only in dev for E2E; not shipped in prod bundles
if (typeof window !== 'undefined') {
(async () => {
const { worker } = await import('./worker');
await worker.start({ onUnhandledRequest: 'bypass' });
})();
}