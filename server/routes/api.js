const express = require('express');
const router = express.Router();

// Health check — used by frontend to verify connection
router.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Add your routes below, e.g.:
// router.get('/items', (req, res) => { ... });
// router.post('/items', (req, res) => { ... });

module.exports = router;
