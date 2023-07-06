import React, { useEffect, useState } from "react";

export function Brand(props) {
  const { mobileBrands, getselectedBrand } = props;
  const [selectedBrand, setSelectedBrand] = useState("");

  useEffect(() => {
    getselectedBrand(selectedBrand);
  }, [selectedBrand]);

  return (
    <>
      <select
        onChange={(e) => setSelectedBrand(e.target.value)}
        className="brand_dropdown"
      >
        <option value="" disabled selected>
          --Select Brand--
        </option>
        {mobileBrands.map((item) => (
          <option>{item}</option>
        ))}
      </select>
    </>
  );
}

