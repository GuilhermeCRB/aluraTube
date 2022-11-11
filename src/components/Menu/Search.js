import { StyledSearch } from '../../style/Header/Search';

export default function Search({ valorDoFiltro, setValorDoFiltro }) {
  return (
    <StyledSearch>
      <input type="text" onChange={(e) => setValorDoFiltro(e.target.value)} value={valorDoFiltro} />
      <button>🔎</button>
    </StyledSearch>
  );
}
