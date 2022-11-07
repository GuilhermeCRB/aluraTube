/* eslint-disable @next/next/no-img-element */
import { StyledHeader } from '../../style/Header';

export default function Header({ config }) {
  return (
    <StyledHeader>
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} alt="Profile picture" />
        <div>
          <h2>{config.name}</h2>
          <p>{config.description}</p>
        </div>
      </section>
    </StyledHeader>
  );
}
