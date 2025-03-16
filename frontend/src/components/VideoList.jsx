import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import '../components/Videolist.css';


const VideoList = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            const response = await axios.get('http://localhost:5000/api/videos');
            setVideos(response.data);
        };
        fetchVideos();
    }, []);

    return (
        <div className="video-list-container">
            <h1>Videos</h1>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {videos.map((video) => (
                    <SwiperSlide key={video._id}>
                        <div className="video-card">
                            <img src={video.thumbnail} alt={video.title} />
                            <h2>{video.title}</h2>
                            <p>{video.description}</p>
                            <a
  href={video.videoUrl}
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: 'inline-block',
    padding: '8px 16px',
    backgroundColor: '#3b82f6', // Default button color
    color: '#ffffff', // Text color
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '14px',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = '#2563eb'; // Hover color
    e.target.style.transform = 'translateY(-2px)'; // Lift effect
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = '#3b82f6'; // Reset to default color
    e.target.style.transform = 'translateY(0)'; // Reset lift effect
  }}
  onMouseDown={(e) => {
    e.target.style.transform = 'translateY(0)'; // Reset on click
  }}
>
  Watch Video
</a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default VideoList;