import Video from './Video';

export default function Playlist({ searchValue, playlistName, videos }) {
  return (
    <section>
      <h2>{playlistName}</h2>
      <div>
        {videos.map((video) => {
          return <Video key={video.title} video={video} />;
        })}
      </div>
    </section>
  );
}
