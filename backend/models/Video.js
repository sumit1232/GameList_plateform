const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: { type: String, required: true }, // URL of the image
    videoUrl: { type: String, required: true }, // URL of the video
});

module.exports = mongoose.model('Video', videoSchema);