import React from 'react';
import { VideoPlayer } from '.';

const App = () => {
  const videoPlayerProps = {
    filename: 'Screens.mp4', // Replace with the actual filename
    autoPlay: true, // Optional: set to false if you don't want autoplay
  };

  return (
    <div>
      <VideoPlayer {...videoPlayerProps} />
    </div>
  );
};

export default App;
