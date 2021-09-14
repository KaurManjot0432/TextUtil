import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';

function App() {
  return (
   <>
<Navbar title="TextUtil" />
{/* <Navbar/> */}
<div class = "container my-3">

<Textform heading="Enter your text"/>
</div>
{/* <About/> */}
   </>
  );
}

export default App;
