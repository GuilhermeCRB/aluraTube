/* eslint-disable @next/next/no-img-element */
export default function Video({ video }) {
  return (
    <a href={video.url}>
      <img src={video.thumb} alt="thumbnail" />
      <span>{video.title}</span>
    </a>
  );
}
