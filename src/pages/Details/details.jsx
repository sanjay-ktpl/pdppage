import React from "react";
import Header from '../../components/Header/Header.jsx';
import Footers from "../../components/footer/footer.jsx";
import Productphoto from "../../components/product-media/product-photo.jsx";
import Productinfo from "../../components/product-info/product-info.jsx";

function DetailsPage(){
    return(
        <div> 

                <Header />  
                <div className="container">
                <div className="product-info-wrapper">
                <Productphoto />
                <Productinfo />
                
                </div>
                </div>

                <Footers />

                </div>
                
    );
}

export default DetailsPage;