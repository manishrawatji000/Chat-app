 import express from 'express';
 import dotenv from 'dotenv';
 import authrouter from './routes/auth.router.js';
 import messageRouter from './routes/message.router.js';
 import path from 'path';
 dotenv.config();
 const PORT = process.env.PORT || 3000;
 const __dirname = path.resolve();
 const app = express();
 app.use("/api/auth", authrouter);
 app.use("/api/message", messageRouter);
 if (process.env.NODE_ENV === 'production') {
     app.use(express.static(path.join(__dirname, '../frontend/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
    });
 }
 app.listen(PORT, () => console.log('Server running on port :' + PORT));