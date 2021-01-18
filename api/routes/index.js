import express from 'express';

const router = express.Router();

router.get('/api', (req, res) => {
    res.send('This is a api for devcommunication app');
})

export default router;