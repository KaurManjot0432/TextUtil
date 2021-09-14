import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import react, { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');

  const toggleState = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
   <>
<Navbar title="TextUtil" mode={mode} toggleState={toggleState} />
{/* <Navbar/> */}
<div class = "container my-3">

<Textform heading="Enter your text" mode={mode}/>
</div>
{/* <About/> */}
   </>
  );
}

export default App;
