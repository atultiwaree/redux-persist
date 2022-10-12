import "./App.css";
import { useState } from "react";
import action from "./action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { actionb } from "./action";
function App() {
  const patch = useDispatch();
  const [state, setState] = useState("");
  const selector = useSelector((state) => state);

  return (
    <div className="App">
      <input type="text" onChange={(e) => setState(e.target.value)} />
      <button onClick={() => patch(action(state))}>Set</button>
      <button onClick={() => patch(actionb(state))}>sum</button>
      <h5 style={{ fontWeight: "normal" }}>Mapped or Mapping states</h5>
      {selector.first.map((data, i) => (
        <ul style={{ listStyle: "none" }}>
          <li style={{ fontWeight: "bold" }} key={i}>
            <span>✋ </span>
            {data}
          </li>
        </ul>
      ))}
      <h5 style={{ fontWeight: "normal" }}>ReducerB states</h5>
      <h6>{selector.second.sum}</h6>
    </div>
  );
}

export default App;
