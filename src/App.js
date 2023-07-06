import "./App.css";
import { useState } from "react";
import { Brand } from "./brand";

function App() {
  let mobileBrands = ["Apple", "Samsung", "MI", "Oppo"];
  const [selectedBrand, setSelectedBrand] = useState("");

  function getselectedBrand(val) {
    setSelectedBrand(val);
  }

  return (
    <div className="App">
      <h3>Hey, Select Your favourite Mobile Brand</h3>
      <Brand mobileBrands={mobileBrands} getselectedBrand={getselectedBrand} />
      <p>
        {" "}
        You have selected{" "}
        <b>{selectedBrand === "" ? "not selected any" : selectedBrand}</b>{" "}
        Brand{selectedBrand !== "" && ", You have greate choice."}{" "}
      </p>
    </div>
  );
}

export default App;
