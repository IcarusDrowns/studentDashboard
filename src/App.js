import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "tachyons";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateEvent from "./pages/CreateEvent";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/createevent" element={<CreateEvent />}></Route>
          <Route path="/details/:eventId" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
