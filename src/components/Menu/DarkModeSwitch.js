import { useContext } from 'react';
import { StyledSwitch } from '../../style/Header/StyledSwitch';
import { ColorModeContext } from '../../contexts/ColorMode';

export default function DarkModeSwitch() {
  const contexto = useContext(ColorModeContext);

  return (
    <StyledSwitch>
      <input
        id="darkmode"
        type="checkbox"
        onChange={() => {
          console.log('mudou o state');
          contexto.toggleMode();
        }}
      />
      <label htmlFor="darkmode" className="darkmode-switch">
        <span>🌙</span>
        <span>☀️</span>
      </label>
    </StyledSwitch>
  );
}
