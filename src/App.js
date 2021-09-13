import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
   <>
<Navbar title="TextUtil" />
{/* <Navbar/> */}
<div class = "container my-3">

<Textform heading="Enter your text"/>
</div>
   </>
  );
}

export default App;
