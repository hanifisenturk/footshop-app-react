import ProductCard from "../Components/ProductCard/ProductCard";

const AVAILABLE_SHOES = [
  {
    id: "shoes1",
    name: "Nike Super Run",
    img: "https://i.ibb.co/TqPGvSp/png-removebg-preview-2.png",
    price: 45.99,
  },
  {
    id: "shoes2",
    name: "Nike Incredible Shoes",
    img: "https://i.ibb.co/7zWRRfP/png-removebg-preview-1.png",
    price: 32.99,
  },
  {
    id: "shoes3",
    name: "Nike Ultimate",
    img: "https://i.ibb.co/r3jdKWR/png-removebg-preview.png",
    price: 75.45,
  },
  {
    id: "shoes4",
    name: "Nike for Kids",
    img: "https://i.ibb.co/GFtRjPv/Forum-Mid-Ayakkabi-Beyaz-FY4976-01-standard-removebg-preview.png",
    price: 125.1,
  },
  {
    id: "shoes5",
    name: "Nike for men",
    img: "https://i.ibb.co/7rhzxdz/ULTRABOOST-22-Mavi-GX5461-01-standard-removebg-preview.png",
    price: 15.99,
  },
  {
    id: "shoes6",
    name: "Nike Boomer",
    img: "https://i.ibb.co/M5ptpw1/jordan-ma2-paris-saint-germain-ayakkab-g-Zjbp6-removebg-preview.png",
    price: 225.99,
  },
  {
    id: "shoes7",
    name: "Nike Spacex",
    img: "https://i.ibb.co/0tVRPB1/air-max-plus-ayakkab-s-Jm-D8-Lt-removebg-preview.png",
    price: 65.99,
  },
  {
    id: "shoes8",
    name: "Nike Terminator",
    img: "https://i.ibb.co/Tm3VCTw/air-huarache-ayakkab-s-Vdd6-TS-removebg-preview.png",
    price: 55.99,
  },
];

const ProductList = (props) => {
  const ShoesList = AVAILABLE_SHOES.map((shoes) => {
    return (
      <ProductCard
        key={shoes.id}
        productId={shoes.id}
        productName={shoes.name}
        productImage={shoes.img}
        productPrice={shoes.price}
      ></ProductCard>
    );
  });

  return ShoesList;
};

export default ProductList;
