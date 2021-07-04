import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Button';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const palette = {
  green: '#69db7c',
  orange: '#ffa94d',
  gray: '#adb5bd',
}

function App() {
  return (
    // ThemeProvider theme 속성은 하위 모든 컴포넌트에 props로 전달됨
    <ThemeProvider theme={{ palette }}>
      <AppBlock>
        <Button>BUTTON</Button>
        <Button color="orange">BUTTON</Button>
        <Button color="gray">BUTTON</Button>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
