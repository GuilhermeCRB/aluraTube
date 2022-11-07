import { StyledTimeline } from '../../style/Timeline';
import Playlist from './Playlist';

export default function Timeline({ playlists }) {
  const playlistNames = Object.keys(playlists);
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = playlists[playlistName];
        return <Playlist key={playlistName} playlistName={playlistName} videos={videos} />;
      })}
    </StyledTimeline>
  );
}
