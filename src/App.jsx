import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>React 프로젝트에 오신 것을 환영합니다!</h1>
      <p>버튼을 눌러 숫자를 증가시켜 보세요.</p>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        클릭 횟수: {count}
      </button>
    </div>
  );
}

export default App;
