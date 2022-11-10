import { StyledFavorites } from '../../style/Favorites';
import FavoriteCard from './FavoriteCard';

export default function Favorites({ favorites }) {
  return (
    <StyledFavorites>
      <h2>AluraTube Favoritos</h2>
      <div>
        {favorites.map((favorite) => (
          <FavoriteCard key={favorite} favorite={favorite} />
        ))}
      </div>
    </StyledFavorites>
  );
}
