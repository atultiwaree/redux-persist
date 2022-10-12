import "./App.css";
import { useState } from "react";
import action from "./action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function App() {
  const patch = useDispatch();
  const [state, setState] = useState("");
  const selector = useSelector((state) => state);

  return (
    <div className="App">
      <input type="text" onChange={(e) => setState(e.target.value)} />
      <button onClick={() => patch(action(state))}>Set</button>
      <h5 style={{ fontWeight: "normal" }}>Mapped or Mapping states</h5>
      {selector.reducer.map((data, i) => (
        <ul style={{ listStyle: "none" }}>
          <li style={{ fontWeight: "bold" }} key={i}>
            <span>✋ </span>
            {data}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default App;
