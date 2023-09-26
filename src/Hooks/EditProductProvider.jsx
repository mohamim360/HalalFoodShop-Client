import React, { createContext, useContext, useState } from "react";


const EditProductContext = createContext();


export const EditProductProvider = ({ children }) => {
  const [editProductData, setEditProductData] = useState([]);
  const contextValue = {
    editProductData,
    setEditProductData,
  };
  return (
    <EditProductContext.Provider value={contextValue}>
      {children}
    </EditProductContext.Provider>
  );
};

export const useEditProduct = () => {
  return useContext(EditProductContext);
};
