const express = require('express');
const path = require('path');
const app = express();

// Set the port from environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'ai_camera_simulation.html'));
});

// Route specifically for the simulation page
app.get('/simulation', (req, res) => {
    res.sendFile(path.join(__dirname, 'ai_camera_simulation.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'AI Security Camera Simulation is running' });
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`🎥 AI Security Camera Simulation is running on port ${PORT}`);
    console.log(`🌐 Visit: http://localhost:${PORT}`);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
    console.log('👋 Shutting down gracefully...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('👋 Shutting down gracefully...');
    process.exit(0);
});
