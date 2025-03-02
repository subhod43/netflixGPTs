import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(store => store.movies?.addTrailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="w-screen">
      <iframe className="w-screen aspect-video"
        src={`https://www.youtube-nocookie.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&loop=1&si=TyjqW1Z4DmFW1E1u&amp;controls=0;rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
