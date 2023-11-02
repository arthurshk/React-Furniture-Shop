import React from 'react';
import Layout from '../component/layout/layout';
import './products.css';
import blackCabinet from '../image/blackCabinet.jpg';
import blackCabinet3Shelves from '../image/blackCabinet3Shelves.jpg';
import charcoalblackSofa from '../image/charcoalblackSofa.jpg';
import darkGreenBedWhiteUpholstery from '../image/darkGreenBedWhiteUpholstery.jpg';
import darkGreyBed from '../image/darkGreyBed.jpg';
import darkSofa from '../image/darkSofa.jpg';
import darkTable from '../image/darkTable.jpg';
import greySofa from '../image/greySofa.jpg';
import multilevelwhiteCabinet from '../image/multilevelwhiteCabinet.jpg';
import navyblueArmchair from '../image/navyBlueArmchair.jpg';
import navyblueSofa from '../image/navyBlueSofa.jpg';
import reclinerBed from '../image/reclinerBed.jpg';
import rolldownChair from '../image/rolldownChair.jpg';
import simpleDesk from '../image/simpleDesk.jpg';
import whiteArmchair from '../image/whiteArmchair.jpg';
import whiteBed from '../image/whiteBed.jpg';
import whiteBedGreenUpholstery from '../image/whiteBedGreenUpholstery.jpg';
import whiteCabinet from '../image/whiteCabinet.jpg';
import whiteCabinetDresser from '../image/whiteCabinetDresser.jpg';
import whiteDresser3by2 from '../image/whiteDresser3by2.jpg';
import whiteSofa from '../image/whiteSofa.jpg';
import woodenDarkTable from '../image/woodenDarkTable.jpg';
import woodenRoundTable from '../image/woodenRoundTable.jpg';
import woodenTable from '../image/woodenTable.jpg';
function Products() {
  const furnitureItems = [
    
    {
      id: 1,
      name: 'Dark Cabinet',
      description: 'Stylish and spacious cabinet for your storage needs.',
      imageUrl: blackCabinet,
      price: '$89.99',
    },
    {
      id: 2,
      name: 'Wide Dark Cabinet',
      description: 'A wide and functional cabinet with ample storage space.',
      imageUrl: blackCabinet3Shelves,
      price: '$199.99',
    },
    {
      id: 3,
      name: 'Space Black Sofa',
      description: 'Modern black sofa for a comfortable living room.',
      imageUrl: charcoalblackSofa,
      price: '$464.99',
    },
    {
      id: 4,
      name: 'Dark Green Bed + Frame',
      description: 'Elegant dark green bed with a sturdy frame.',
      imageUrl: darkGreenBedWhiteUpholstery,
      price: '$849.99',
    },
    {
      id: 5,
      name: 'Dark Grey Bed + Frame',
      description: 'Sleek and comfortable dark grey bed with frame.',
      imageUrl: darkGreyBed,
      price: '$749.99',
    },
    {
      id: 6,
      name: 'Dark Leather Sofa',
      description: ' Luxurious dark leather sofa for your living room.',
      imageUrl: darkSofa,
      price: '$349.99',
    },
    {
      id: 7,
      name: 'Space Dark Table',
      description: 'Stylish and versatile dark table for your space.',
      imageUrl: darkTable,
      price: '$104.99',
    },
    {
      id: 8,
      name: 'Gray Sofa',
      description: 'A cozy and chic gray sofa to relax in.',
      imageUrl: greySofa,
      price: '$399.99',
    },
    {
      id: 9,
      name: 'Multi Level White Cabinet',
      description: 'White cabinet with multiple levels for organization.',
      imageUrl: multilevelwhiteCabinet,
      price: '$695.99',
    },
    {
      id: 10,
      name: 'Navy Blue Armchair',
      description: 'Navy blue armchair for added seating comfort.',
      imageUrl: navyblueArmchair,
      price: '$199.99',
    },
    {
      id: 11,
      name: 'Navy Blue Sofa',
      description: 'Navy blue sofa with a touch of elegance.',
      imageUrl: navyblueSofa,
      price: '$499.99',
    },
    {
      id: 12,
      name: 'Recliner Chair',
      description: 'Reclining chair for ultimate relaxation.',
      imageUrl: reclinerBed,
      price: '$139.99',
    },
    {
      id: 13,
      name: 'Rolldown Cream Chair',
      description: 'A comfortable cream chair with a unique design.',
      imageUrl: rolldownChair,
      price: '$259.99',
    },
    {
      id: 14,
      name: 'Short Shiny White Desk',
      description: 'Shiny white desk for work or study.',
      imageUrl: simpleDesk,
      price: '$69.99',
    },
    {
      id: 15,
      name: 'Solid Cream Armchair',
      description: 'Solid cream armchair for a classic look.',
      imageUrl: whiteArmchair,
      price: '$179.99',
    },
    {
      id: 16,
      name: 'White Bed + Frame',
      description: 'White bed with a stylish frame.',
      imageUrl: whiteBed,
      price: '$599.99',
    },
    {
      id: 17,
      name: 'White Bed with Green Upholstery + Frame',
      description: 'White bed with green upholstery and frame.',
      imageUrl: whiteBedGreenUpholstery,
      price: '$849.99',
    },
    {
      id: 18,
      name: 'Shiny White Six-Piece Cabinet',
      description: 'Shiny white cabinet with multiple compartments.',
      imageUrl: whiteCabinet,
      price: '$459.99',
    },
    {
      id: 19,
      name: 'Cream Dresser',
      description: 'Cream dresser for your bedroom storage needs.',
      imageUrl: whiteCabinetDresser,
      price: '$329.99',
    },
    {
      id: 20,
      name: 'Cream Dresser 3X2',
      description: 'Compact cream dresser with a 3x2 design.',
      imageUrl: whiteDresser3by2,
      price: '$799.99',
    },
    {
      id: 21,
      name: 'Cream Cushioned Sofa',
      description: 'Cream cushioned sofa for a cozy living room.',
      imageUrl: whiteSofa,
      price: '$349.99',
    },
    {
      id: 22,
      name: 'Wooden Dark Table',
      description: 'Wooden dark table with a touch of sophistication.',
      imageUrl: woodenDarkTable,
      price: '$299.99',
    },
    {
      id: 23,
      name: 'Wooden Round Table',
      description: 'Elegant round wooden table for various uses.',
      imageUrl: woodenRoundTable,
      price: '$149.99',
    },
    {
      id: 24,
      name: 'Wooden Dining Table + 4 Chairs',
      description: 'Wooden dining table set with four chairs for family meals.',
      imageUrl: woodenTable,
      price: '$699.99',
    },
  ];

  return (
    <Layout>
    <div className="products-container">
      {furnitureItems.map((item) => (
        <div key={item.id} className="furniture-card">
          <img src={item.imageUrl} alt={item.name} className="furniture-image" />
          <h3 className="furniture-name">{item.name}</h3>
          <p className="furniture-description">{item.description}</p>
          <p className="furniture-price">{item.price}</p> 
          <div className="button-container">
            <button className="add-to-cart-button">Add to Cart</button>
            <button className="view-item-button">View Item</button>
          </div>
        </div>
      ))}
    </div>
  </Layout>
  );
}

export default Products;