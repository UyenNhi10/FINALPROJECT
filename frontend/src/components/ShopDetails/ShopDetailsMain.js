import React, { useState } from "react";
import dynamic from 'next/dynamic';
import Breadcrumb from '../Common/Breadcrumb';
import Link from 'next/link';
const RelatedProductSlider = dynamic(() => import('../Elements/Slider/RelatedProductSlider'), {
    ssr: false
  })
import ProductInfo from "./ProductInfo";

const ShopDetailsMain = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
      };
    
      const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
      };
    return (
        <main>
            <Breadcrumb breadcrumbTitle="Shop Details" breadcrumbSubTitle="Shop Details" />

           
            <div className="shop-details_area pt-120 pb-15">
                <div className="container custome-container">
                    <div className="row ">
                    <div className="col-lg-4 col-md-12">
                        <div className="product-details-img mb-30">
                            <img src="assets/img/products/product-thumb-10.png" alt="product img"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="product-side-info mb-30">
                            <h4 className="product-name mb-10">The Almanack</h4>
                            <span className="product-price">$24.00</span>
                            <p>Matent maecenas nec massa viverra aci ute litora aliquam habitant proin commodo bibendum rutru
                                habitant est magnis
                                quisque aliquet congue vesti bulum suscipi erose tellus odio elite purus feugiat prim libero
                                senes nisie gravia</p>
                            <div className="product-quantity-cart mb-25">
                                <div className="product-quantity-form">
                                    <form action="#">
                                        <button type="button" className="cart-minus" onClick={handleDecrement}><i className="far fa-minus"></i></button>
                                        <p className="cart-input m-0">{count}</p>
                                        <button type="button" className="cart-plus" onClick={handleIncrement}><i className="far fa-plus"></i></button>
                                    </form>
                                </div>
                                <Link href="/cart"><a className="edu-btn">Add to Cart</a></Link>
                            </div>
                            <Link href="/wishlist"><a className="edu-border-btn">Add to Wishlist</a></Link>
                            <div className="product__details__tag tagcloud mt-25 mb-10"><span>Tags : </span>
                                <a href="#">App</a>
                                <a href="#">Tips</a>
                                <a href="#">Design</a>
                                <a href="#">Science</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <ProductInfo />

            <RelatedProductSlider />
        </main>
    );
};

export default ShopDetailsMain;