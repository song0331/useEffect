import { useState } from "react";
import "./App.css";

import Count from "./components/Count";
import InfiniteLoop from "./components/InfiniteLoop";
import ChatRoom from "./components/ChatRoom";
import Timer from "./components/Timer";


function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* <Count /> */}
      {/* <InfiniteLoop /> */}
      {/* <ChatRoom /> */}
      <button onClick={() => {
        setShow(!show);
      }}>Timer {show ? 'Stop' : 'Start'}</button>
      {show ? <Timer /> : null}
    </>
  );
}

export default App;
