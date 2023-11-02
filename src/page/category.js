import React from 'react';
import Layout from '../component/layout/layout';
import darkSofa from '../image/darkSofa.jpg';
import woodenTable from '../image/woodenTable.jpg';
import simpleDesk from '../image/simpleDesk.jpg';
import rolldownChair from '../image/rolldownChair.jpg';
import whiteBedGreenUpholstery from '../image/whiteBedGreenUpholstery.jpg'
import blackCabinet from '../image/blackCabinet.jpg';
import { Link } from 'react-router-dom'; 
import './category.css'
function Category() {
  const categories = [
    {
      name: 'Sofas',
      image: darkSofa,
    },
    {
      name: 'Tables',
      image: woodenTable,
    },
    {
      name: 'Beds & Matresses + Frames',
      image: whiteBedGreenUpholstery,
    },
    {
      name: 'Cabinets',
      image: blackCabinet,
    },
    {
      name: 'Chairs',
      image: rolldownChair,
    },
    {
      name: 'Desks',
      image: simpleDesk,
    },
  ];

  return (
    <Layout>
      <div className="categories-list">
        {categories.map((category, index) => (
          <Link to={`/category/${category.name.toLowerCase()}`} key={index} className="category-card">
            <img src={category.image} alt={category.name} className="category-image" />
            <h3 className="category-name">{category.name}</h3>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export default Category;
