require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db'); // your existing db.js
const authRoutes = require('./routes/authRoutes');
const reportRoutes = require('./routes/reportRoutes'); // ⬅️ add this

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Health check
app.get('/api/health', (req, res) => {
  const dbStatus = db && db.threadId ? 'connected' : 'initialized';
  res.json({ status: 'ok', db: dbStatus, time: new Date().toISOString() });
});

// Routes
app.use('/api', authRoutes);    // auth endpoints
app.use('/api', reportRoutes);  // report endpoints ⬅️ add this

// Start server
const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
