import config from '../config.json';

import { CSSReset } from '../src/style/CSSReset_index';
import Menu from '../src/components/Menu';
import Header from '../src/components/Header';
import Timeline from '../src/components/Timeline';

export default function HomePage() {
  return (
    <>
      <CSSReset />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <Menu />
        <Header config={config} />
        <Timeline playlists={config.playlists} />
      </div>
    </>
  );
}
