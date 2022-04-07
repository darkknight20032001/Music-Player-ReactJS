import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { useState } from "react";
const code = new URLSearchParams(window.location.search).get("code");

function App() {
  const [Toggle, setToggle] = useState(true);
  return code ? (
    <Dashboard code={code} />
  ) : (
    <Login Toggle={Toggle} setToggle={setToggle} />
  );
}

export default App;
