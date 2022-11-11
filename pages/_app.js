import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { CSSReset } from '../src/style/CSSReset_index';
import ColorModeProvider, { ColorModeContext } from '../src/contexts/ColorMode';

const theme = {
  light: {
    backgroundBase: '#f9f9f9',
    backgroundLevel1: '#ffffff',
    backgroundLevel2: '#f0f0f0',
    borderBase: '#e5e5e5',
    textColorBase: '#222222',
  },
  dark: {
    backgroundBase: '#181818',
    backgroundLevel1: '#202020',
    backgroundLevel2: '#313131',
    borderBase: '#383838',
    textColorBase: '#FFFFFF',
  },
};

function ProviderWrapper({ children }) {
  return <ColorModeProvider initialMode={'dark'}>{children}</ColorModeProvider>;
}

function MyApp({ Component, pageProps }) {
  const { mode } = useContext(ColorModeContext);

  return (
    <ThemeProvider theme={theme[mode]}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default function _App(props) {
  return (
    <ProviderWrapper>
      <MyApp {...props} />
    </ProviderWrapper>
  );
}
