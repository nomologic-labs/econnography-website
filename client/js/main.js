// ─── API helper ─────────────────────────────────────────────────────────────

const API_BASE = '/api';

async function apiFetch(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  });
  if (!res.ok) throw new Error(`API error ${res.status}: ${res.statusText}`);
  return res.json();
}

// ─── Example calls ──────────────────────────────────────────────────────────

// GET: apiFetch('/items')
// POST: apiFetch('/items', { method: 'POST', body: JSON.stringify({ name: 'foo' }) })

// ─── Init ────────────────────────────────────────────────────────────────────

async function init() {
  try {
    const { status } = await apiFetch('/health');
    console.log('Backend connected:', status);
  } catch (err) {
    console.error('Backend unreachable:', err.message);
  }
}

init();
