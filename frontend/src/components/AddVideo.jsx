import React, { useState } from 'react';
import axios from 'axios';
import "../components/Addvideo.css"

const AddVideo = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [videoUrl, setVideoUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newVideo = { title, description, thumbnail, videoUrl };

        try {
            await axios.post('http://localhost:5000/api/videos', newVideo);
            alert('Video added successfully!');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="video-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="form-input"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="form-input"
        />
        <input
          type="text"
          placeholder="Thumbnail URL"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          required
          className="form-input"
        />
        <input
          type="text"
          placeholder="Video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          required
          className="form-input"
        />
        <button type="submit" className="submit-button">
          Add Video
        </button>
      </form>
    );
};

export default AddVideo;