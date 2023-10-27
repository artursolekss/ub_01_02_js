import './App.css';
import { useState } from 'react';
import { AuthPage } from './Pages/Auth';
import { Weather } from './Pages/Weather';
import { Customers } from './Pages/Customers';

function App() {

  const [user, setUser] = useState(sessionStorage.getItem("user"));

  const logout = () => {
    sessionStorage.setItem("user", "")
    setUser("");
  }

  return (
    <div className="App">
      {user !== null && user !== "" &&
        // <Weather onLogout={logout}></Weather>
        <Customers></Customers>
      }
      {
        (user === null || user === "") &&
        <AuthPage></AuthPage>
      }
    </div >
  );
}

export default App;
