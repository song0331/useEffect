import { useState } from "react";
import "./App.css";

import Count from "./components/Count";
import InfiniteLoop from "./components/InfiniteLoop";
import ChatRoom from "./components/ChatRoom";
import Timer from "./components/Timer";
import CountBtn from "./components/useRef/CountBtn";
import Login from "./components/Login/Login";


function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* [ useEffect 예제 ] */}
      {/* <Count /> */}
      {/* <InfiniteLoop /> */}
      {/* <ChatRoom /> */}
      {/* <button onClick={() => {
        setShow(!show);
      }}>Timer {show ? 'Stop' : 'Start'}</button>
      {show ? <Timer /> : null} */}


      {/* [ useRef 예제 ] */}
      {/* <CountBtn /> */}
      {/* <Login /> */}
    </>
  );
}

export default App;
