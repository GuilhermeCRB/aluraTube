import { StyledTimeline } from '../../style/Timeline';
import Playlist from './Playlist';

export default function Timeline({ searchValue, playlists }) {
  const playlistNames = Object.keys(playlists);
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = playlists[playlistName];

        const seachedVideos = videos.filter((video) => {
          const titleNormalized = video.title.toLowerCase();
          const searchValueNormalized = searchValue.toLowerCase();
          return titleNormalized.includes(searchValueNormalized);
        });

        return seachedVideos.length === 0 ? (
          <></>
        ) : (
          <Playlist searchValue={searchValue} key={playlistName} playlistName={playlistName} videos={seachedVideos} />
        );
      })}
    </StyledTimeline>
  );
}
