import React from 'react';
import api from '../restApi.json';

const Menu = () => {
  const data = api.data[0];

  return (
    <section className='menu' id='menu'>
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">POPULAR DISHES</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </div>
        <div className="dishes_container">
          {data.dishes.map(element => (
            <div className="card" key={element.id}>
              <img src={element.image} alt={element.title} />
              <h3>{element.title}</h3>
              <button>{element.category}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
