import { useState } from "react";
import "./App.css";
import Authentic from "./Components/Authentic";
import Footer from "./Components/Footer";
// import ItemSelection from "./Components/ItemSelection";
import LaptopDisplay from "./Components/LaptopDisplay";
import NavBar from "./Components/NavBar";

function App() {
  const [selectedItem, setSelectedItem] = useState([]);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [popUP, setPopUp] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [price, setPrice] = useState(totalPrice);

  const Item = (arrayItem) => {
    setSelectedItem([...selectedItem, arrayItem]);
    setNumberOfItems((PrevNumberOfItems) => PrevNumberOfItems + 1);
    setTotalPrice(arrayItem.price);
    setPrice((prevTotalPrice) => prevTotalPrice + arrayItem.price);
  };
  // console.log(selectedItem);

  return (
    <>
      <NavBar
        numberOfItems={numberOfItems}
        state={popUP}
        setState={setPopUp}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        price={price}
        setNumberOfItems={setNumberOfItems}
        setPrice={setPrice}
      />
      <Authentic />
      <LaptopDisplay item={Item} />
      <Footer />
    </>
  );
}

export default App;
