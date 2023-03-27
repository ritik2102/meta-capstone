 
// import {Header} from './components/header';
// import {Main} from './components/main';
// import {Footer} from  './components/footer';
import './App.css';
import { ReactDOM } from "react-dom/client";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import {HomePage} from './components/homepage';
import { BookingPage } from './components/bookingpage';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/booking" element={<BookingPage/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
