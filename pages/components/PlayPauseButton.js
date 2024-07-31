import { useState, useRef, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { FaPlay, FaPause } from "react-icons/fa";

const PlayPauseButton = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Check if we're in the client environment before accessing Audio
    if (typeof window !== "undefined") {
      audioRef.current = new Audio(src);
    }
  }, [src]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Button
      onClick={togglePlayPause}
      leftIcon={isPlaying ? <FaPause /> : <FaPlay />}
      size="md"
      bg="#f57373"
      color="white"
    >
      {isPlaying ? "Pause" : "Play"}
    </Button>
  );
};

export default PlayPauseButton;
