import { GlobalStyles } from "./GlobalStyles";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

const LinkItem = styled.li`
  padding: 10px;
`;

const LinkWrapper = styled.ul`
  list-style: none;
  display: flex;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
