'use client';

import React, { useEffect } from 'react';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';

import 'video.js/dist/video-js.css';
import './styles.css';

export interface VideoPlayerProps {
  filename: string;
  autoPlay?: boolean;
}

function VideoPlayer(videoPlayerProps: VideoPlayerProps) {
  const videoRef = React.useRef<HTMLDivElement>(null);
  const playerRef = React.useRef<Player | null>(null);
  const playerOptions = {
    autoplay: videoPlayerProps.autoPlay,
    preload: 'auto',
    enableSmoothSeeking: true,
    experimentalSvgIcons: true,
    nativeControlsForTouch: true,
    noUITitleAttributes: true,
    loop: true,
    controls: true,
    fluid: true,
    responsive: true,
    sources: [
      {
        src: `/assets/${videoPlayerProps.filename}`,
        type: 'video/mp4',
      },
    ],
    userActions: {
      click: true,
    },
  };
  useEffect(() => {
    if (!playerRef.current && videoRef.current) {
      const videoElement = document.createElement('video-js');
      videoElement.classList.add('vjs-9-16');
      videoRef.current.appendChild(videoElement);
      playerRef.current = videojs(videoElement, playerOptions);
    }
  }, []);

  useEffect(() => {
    const player = playerRef.current;
    
    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
}

export default VideoPlayer;
