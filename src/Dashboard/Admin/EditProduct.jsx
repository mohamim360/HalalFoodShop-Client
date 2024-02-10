import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditProductForm from "./EditProductForm";

function EditProduct() {
  const { prodId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState("");

  const token = localStorage.getItem("token");

  const getEditProduct = async (prodId) => {
    const response = await fetch(
      `https://halalfoodshop.onrender.com/admin/product/products/${prodId}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const data = await response.json();

    setProductData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getEditProduct(prodId);
  }, [prodId]);

  console.log(productData);

  return (
    <>
      {!isLoading ? (
        <EditProductForm productData={productData} prodId={prodId} />
      ) : (
        <div className="m-auto flex justify-center items-center h-full">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
    </>
  );
}

export default EditProduct;
