import React from "react";
import styles from "../../../9-homeworks/Session02/block-ui-6/product.module.css";
import Avatar from "../block-ui/components-con/Avatar";
import TextPerson from "../block-ui/components-con/TextPesron";
import AddToCart from "./components-con/AddToCart";
interface Props {}

function ProductUi({}: Props) {
  var dataProducts = [
    {
      images: "block-ui-image/1.jpg",
      names: "EODEM MODO TYPI",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      size: "XL/XXL/S",
      price: "$25",
      oldPrice: "",
      addToCart:
        {
          icon: "fa-solid fa-cart-plus",
          text: "Add to cart",
          type: "success",
        },
    },
    {
      images: "block-ui-image/2.jpg",
      names: "SEQUITUR MUTATIONEM",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      size: "XL/XXL/S",
      price: "$25",
      oldPrice: "",
      addToCart:
        {
          icon: "fa-solid fa-cart-plus",
          text: "Add to cart",
          type: "success",
        },
    },
    {
      images: "block-ui-image/3.jpg",
      names: "CONSUETUDIUM LECTORUM",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      size: "XL/XXL/S",
      price: "$25",
      oldPrice: "",
      addToCart:
        {
          icon: "fa-solid fa-cart-plus",
          text: "Add to cart",
          type: "success",
        },
    },
    {
      images: "block-ui-image/4.jpg",
      names: "PARUM CLARAM",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      size: "XL/XXL/S",
      price: "$25",
      oldPrice: "$75",
      addToCart:
        {
          icon: "fa-solid fa-cart-plus",
          text: "Add to cart",
          type: "success",
        },
    },
  ];
  return (
    <div className="container" style={{ backgroundColor: "#ccc" }}>
      <div className="row">
        {dataProducts.map((dataProduct) => (
          <div className="col-3">
            <div className={styles.product}>
              <div>
                <Avatar image={dataProduct.images} />
                <TextPerson name={dataProduct.names} />
              </div>
              <p style={{ marginTop: "5px" }}>{dataProduct.content}</p>
              <p>{dataProduct.size}</p>
              <span style={{fontWeight: 'bold'}}>{dataProduct.price}</span>
              <span style={{ fontSize:'12px', textDecoration: 'line-through'}}>{dataProduct.oldPrice}</span>
              <br />
              <AddToCart icon={dataProduct.addToCart.icon} text={dataProduct.addToCart.text} type={dataProduct.addToCart.type}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductUi;
