import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { all_product };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;

// tworzymy tutaj Context by móc przesyłać prposy z elementów które zawierają tego więcej
// Assets zawiera te elementy a my je tutaj jakby przesyłamy by je można było wykorzystać
// i w App je wrzucamy na cała stronke i potem z tego korzystamy
// i potem to wykorzystujemy za pomoca useContext
// aktualnie propsy ktore piszemy gdzie chcemy to sa all_product
