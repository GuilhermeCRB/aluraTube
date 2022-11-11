import config from '../config.json';

import { useState } from 'react';

import Menu from '../src/components/Menu';
import Header from '../src/components/Header';
import Timeline from '../src/components/Timeline';
import Favorites from '../src/components/Favorites';

export default function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = useState('');

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Header config={config} />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />
        <Favorites favorites={config.favorites} />
      </div>
    </>
  );
}
