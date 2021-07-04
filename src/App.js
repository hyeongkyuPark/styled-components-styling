import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import Dialog from './components/Dialog';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const palette = {
  green: '#69db7c',
  orange: '#ffa94d',
  gray: '#adb5bd',
}

function App() {
  const [dialog, setDialog] = useState(false);

  const onClickDialog = () => {
    setDialog(true);
  }
  const onConfirm = () => {
    setDialog(false);
  }
  const onCancel = () => {
    setDialog(false);
  }

  return (
    // ThemeProvider theme 속성은 하위 모든 컴포넌트에 props로 전달됨
    <ThemeProvider theme={{ palette }}>
      <AppBlock>
        <ButtonGroup>
          <Button size="large" onClick={onClickDialog}>CREATE</Button>
        </ButtonGroup>
      </AppBlock>
      <Dialog title="아이디 생성" onConfirm={onConfirm} onCancel={onCancel} visible={dialog}>
        아이디를 생성하시겠습니까?
      </Dialog>
    </ThemeProvider>
  );
}

export default App;
