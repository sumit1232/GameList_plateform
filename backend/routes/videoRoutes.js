const express = require('express');
const Video = require('../models/Video');

const router = express.Router();

// Get all videos
router.get('/', async (req, res) => {
    try {
        const videos = await Video.find();
        res.json(videos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new video
router.post('/', async (req, res) => {
    const { title, description, thumbnail, videoUrl } = req.body;
    const video = new Video({ title, description, thumbnail, videoUrl });

    try {
        const newVideo = await video.save();
        res.status(201).json(newVideo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;