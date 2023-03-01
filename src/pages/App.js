import { css } from '@emotion/react';

const st = () => css`
  color: red;
`

function App() {
  return (
    <div className="App" css={st}>
      <header className="App-header">
        <p css={st}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
