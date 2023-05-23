import About from "./Component/About";
import Main from "./Component/Main";
import Navbar from "./Component/Navbar";
import {Routes, Route, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" home="Home" about="About"  />
        <Routes>
          <Route path="/" element={<Main heading="Enter Your Text Below"/>} />
          <Route path="/about" element={<About headingAbout="About TextUtils"/>} />  
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
