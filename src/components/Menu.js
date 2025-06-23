import React from "react";
import menuData from "../menu.json";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      {Object.entries(menuData).map(([section, items]) => (
        <section key={section} className="menu-section">
          <h2>{section}</h2>
          <ul>
            {items.map((item, idx) => (
              <li key={idx} className="menu-item">
                <span className="menu-item-name">{item.name}</span>
                <span className="menu-item-price">${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default Menu;