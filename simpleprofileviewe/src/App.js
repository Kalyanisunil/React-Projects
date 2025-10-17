import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState("Guest");
  const [message, setMessage] = useState("welcome Guest");
  useEffect(() => {
    console.log(`User changed to ${user}`);
  }, [user]);
  const handleClick = () => {
    setMessage("Welcome Alice");
    setUser("Alice");
  };
  return (
    <div className="container">
      <p>{message}</p>
      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default App;
