import React from "react";
import "./product-photo.css";
import productlogo from "../product-media/product.jpg";

function Productphoto(){
    return(
        
           <div className="product-photo">
           <div className="productlogo"><img src={productlogo}/></div>
            </div> 
    
    );
};
export default Productphoto;