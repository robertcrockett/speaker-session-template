import { useState } from "react";
import Header from "./Header";
import Speakers from "./Speakers";

function App() {
  const [showSessions, setShowSessions] = useState(true);
  const [theme, setTheme] = useState("light");

  return (
    <div
      className={
        theme === "light" ? "container-fluid light" : "container-fluid dark"
      }
    >
      <Header theme={theme} />
      <Speakers
        showSessions={showSessions}
        setShowSessions={setShowSessions}
        theme={theme}
        setTheme={setTheme}
      />
    </div>
  );
}

export default App;
