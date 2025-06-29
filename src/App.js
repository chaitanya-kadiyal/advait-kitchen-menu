import React from "react";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Advait Kitchen</h1>
        <p>Authentic Maharashtrian & Indian Food</p>
        <p>Where every bite tells a flavorful tale!</p>
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
      <footer style={{
        background: '#f9f9f9',
        padding: '2rem 0',
        textAlign: 'center',
        borderTop: '1px solid #eee',
        marginTop: '2rem'
      }}>
        <h2>Contact Us</h2>
        <p>Takeouts and Catering Orders only , Price mentioned per Plate</p>   
        <p>To place orders call, text, or WhatsApp: <a href="tel:9016027007">901-602-7007</a></p>
        <p>
          <a href="sms:9016027007" style={{marginRight: '1rem'}}>Text</a>
          <a href="https://wa.me/9016027007" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </p>
        <hr style={{margin: '2rem 0', borderColor: '#eee'}} />
        <p style={{fontSize: '0.9rem', color: '#888'}}>
         &copy; {new Date().getFullYear()} Advait Kitchen LLC. All rights reserved.
        </p>     
      </footer>
    </div>
  );
}

export default App;