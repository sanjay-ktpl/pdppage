import React from "react";
import "./product-info.css";

function Productinfo(){
    return(
        
           <div className="product-info">
           <div className="product-name"><strong>1839 Manuka Honey For Kids UMF 8+ 500</strong></div>
           <div className="price-box">
            <div className="price">KWD 22.00</div>
           </div>
           <div class="actions">
            <button type="submit" title="Add to Cart" class="action primary tocart" id="product-addtocart-button">
                <span>Add to Cart</span>
            </button>
                   <button type="button" title="Buy Now" class="action primary buynow" id="product-buynow-button">
        <span>Buy Now</span>
    </button>

        </div>
            </div> 
    
    );
};
export default Productinfo;