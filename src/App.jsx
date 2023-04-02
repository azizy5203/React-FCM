import { getToken } from "firebase/messaging";
import { useEffect, useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import {firebaseApp} from "./initFirebase";
import viteLogo from "/vite.svg";
function App() {
  async function requestPermission() {
    console.log("Requesting permission...");
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log("granted");
      // generate token
      // Get registration token. Initially this makes a network call, once retrieved
      // subsequent calls to getToken will return from cache.
      try {
        const token = await getToken(firebaseApp.messaging, {
          vapidKey:
            "BB63v1ZBqnEanBFDM6DX0tq9iH8d8btoyA3hth7bQWieyJB_z8bIPBjk_X2ijAPeYzznSoITOBkszHJCaghJAu8",
        })
        console.log("🚀 [SUCCESS] token: ", token)
      } catch (err) {
        console.log("🚀 [ERROR] err: ", err)
      }
      
    } else if (permission === "denied") {
      alert("Give me permission ynegm");
    }
  }
  useEffect(() => {
    // request notification permission from user
    requestPermission();
  }, []);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
