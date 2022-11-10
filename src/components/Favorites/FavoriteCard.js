import { StyledFavoriteCard } from '../../style/Favorites/FavoriteCard';

/* eslint-disable @next/next/no-img-element */
export default function FavoriteCard({ favorite }) {
  return (
    <StyledFavoriteCard>
      <img className="profile" src={`https://github.com/${favorite}.png`} alt="Favorite picture" />
      <p>{`@${favorite}`}</p>
    </StyledFavoriteCard>
  );
}
