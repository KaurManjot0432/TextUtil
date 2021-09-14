import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import react, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleState = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
    }
  }

  return (
    <>
      <Router>
      <Navbar title="TextUtil" mode={mode} toggleState={toggleState} />
      <Alert alert={alert} />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <div class="container my-3">
            <Textform heading="Enter your text" mode={mode} showAlert={showAlert} />
          </div>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
