import { useState } from 'react';

import { StyledSearch } from '../../style/Header/Search';

export default function Search({ valorDoFiltro, setValorDoFiltro }) {
  const [valorDaBusca, setValorDaBusca] = useState('Teste');

  return (
    <StyledSearch>
      <input type="text" onChange={(e) => setValorDaBusca(e.target.value)} value={valorDaBusca} />
      <button>🔎</button>
    </StyledSearch>
  );
}
