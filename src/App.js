import React from "react";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Advait Kitchen</h1>
        <p>Authentic Maharashtrian & Indian Specials</p>
        {/* Add this line for the landing image */}
        <img
          src={process.env.PUBLIC_URL + '/landing.jpg'}
          alt="Advait Kitchen"
          className="landing-image"
        />
      </header>
      <main>
        <Menu />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Advait Kitchen</p>
      </footer>
    </div>
  );
}

export default App;