import { useState } from "react";
import "./App.css";
import User from "./Components/user";

function App() {
  const [userName, setUserName] = useState("");
  const [userProfile, setUserProfile] = useState(false);
  return (
    <>
      <div className="App">
        <div className="header">
          <h1>Find Profile</h1>
          <input
            placeholder="username"
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <button onClick={() => setUserProfile(true)}>Search</button>
      </div>
      {userProfile ? <User userName={userName} /> : <></>}
    </>
  );
}

export default App;
