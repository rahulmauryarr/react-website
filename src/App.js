import $ from 'jquery';
//import popover from 'popper.js'; 
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Header';
import Alert from './components/Alert';
import { useState } from 'react';
//import ContactUs from './components/ContactUs'
import Todo from './components/Todo'
import Latestnews from './components/Latestnews'
import Home from './components/Home'
import { Routes, Route } from "react-router-dom";
import Clock from './components/Clock';
// import Deatils from './components/Deatils';
import LoadingBar from 'react-top-loading-bar'
import PasswordGen from './components/PasswordGen';

$(document).ready(function () {
  console.log("ready!");
});
function App() {
  const [progress, setProgress] = useState(0)
  let currentProgress=(progress)=>{
      setProgress(progress);
  }

  let [alert, alertValue] = useState(null);

  let dynamicAlert = (message, type) => {
    alertValue({
      msg: message,
      type: type,
    });
    setTimeout(function () {
      alertValue(null);
    }, 2000)
  }
  return (
    <>
      <Navbar dynamicAlert={dynamicAlert} item1="TextUtils" item2="News" item3="ToDoApp" item4="PassGenrator" item5="Clock"  logo={logo} />
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <Alert alert={alert} />
      <div className="App">
        <div className='container px-md-5'>
          <Routes>
            <Route exact path='/text_utils' element={<Home dynamicAlert={dynamicAlert} heading="Enter text below " />}></Route>
            <Route exact path='/' element={<Latestnews currentProgress={currentProgress}country={"in"} category={"general"} />}></Route>
            <Route exact path='/todo' element={< Todo />}></Route>
            <Route exact path='/password-genrator' element={<PasswordGen title={"Password Genrater"} />}></Route>
            <Route exact path='/clock' element={< Clock />}></Route>
            <Route exact path='/business' element={<Latestnews currentProgress={currentProgress}country={"in"} category={"business"} />}></Route>
            <Route exact path='/entertainment' element={<Latestnews currentProgress={currentProgress}country={"in"} category={"entertainment"} />}></Route>
            <Route exact path='/health' element={<Latestnews currentProgress={currentProgress}country={"in"} category={"health"} />}></Route>
            <Route exact path='/science' element={<Latestnews currentProgress={currentProgress}country={"in"} category={"science"} />}></Route>
            <Route exact path='/sports' element={<Latestnews currentProgress={currentProgress}country={"in"} category={"sports"} />}></Route>
            <Route exact path='/technology' element={<Latestnews currentProgress={currentProgress}country={"in"} category={"technology"} />}></Route>
          </Routes>
          {/* <Routes>
            
          </Routes> */}

        </div>
      </div >
    </>
  );
}
export default App;
