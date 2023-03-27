import { useState } from 'react';
import './App.css';
import ClassBased from './component/ClassBased';
import LifeCycle from './component/LifeCycle';

const message = 'This is some message'

function App() {

  const [show, setShow] = useState(false)
  return (
    <div className="App">
      {/* <ClassBased message={message} num={17} /> */}
      <button onClick={() => setShow(!show)} >Click to show LifeCycle</button> 
      {show && <LifeCycle />}
      
    </div>
  );
}

export default App;
