import React from 'react';
import './global.css';
import VideoList from './components/VideoList';
import AddVideo from './components/AddVideo';


const App = () => {
    return (
        <div>
            <AddVideo />
            <VideoList />
        </div>
    );
};

export default App;