import { useState } from 'react';
import './App.css';
import FullWebsite from './assets/FullWebsite';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FullWebsite />
    </>
  );
}

export default App;
