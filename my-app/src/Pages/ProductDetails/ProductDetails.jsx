import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import { Link, useParams } from "react-router-dom";
import { products } from "../AllProducts/data";
import productImg1 from "../../productimg/wc-26-300x300.png";
import vaseImg from "../../productimg/Small Vase/wc-26.png";
import vaseImg1 from "../../productimg/Small Vase/wc-3-1-100x100.png";
import vaseImg2 from "../../productimg/Small Vase/wc-5-100x100.png";
import vaseImg3 from "../../productimg/Small Vase/wc-7-100x100.png";
import "./ProductDetail.css";

function ProductDetails() {
  const {
    FaStar,
    addToCart,
    handleChangeTab,
    showTab,
    StarRating,
    handleIncrease,
    handleDecrease,
    handleChangeAmount,
  } = useContext(Context);

  const { id } = useParams();
  const product = products.find((item) => item.id == id);
  const {
    name,
    img,
    subImg,
    subImg1,
    subImg2,
    subImg3,
    price,
    category,
    SKU,
    originPrice,
  } = product;
  return (
    <div className="container pb-5 pe-5 ps-5">
      <div className="d-flex pb-3">
        <div>
          <Link to="/" className="nav-link active">
            Home&nbsp;
          </Link>
        </div>

        <div>/ {name} </div>
      </div>
      <div className="d-flex mt-3">
        <div className="d-flex flex-column img-product w-50">
          {" "}
          <img
            className="product-detail w-100"
            style={{ height: 500 }}
            src={img}
          ></img>
          <div className="img-container d-flex img-fluid">
            <img
              style={{ height: 140 }}
              className="product-detail-img w-25 "
              src={subImg}
            ></img>
            <img
              style={{ height: 140 }}
              className="product-detail-img w-25"
              src={subImg1}
            ></img>
            <img
              style={{ height: 140 }}
              className="product-detail-img w-25"
              src={subImg2}
            ></img>
            <img
              style={{ height: 140 }}
              className="product-detail-img w-25"
              src={subImg3}
            ></img>
          </div>
        </div>
        <div className="product ms-5 w-50">
          <h1 className="">{name} </h1>
          <div className="d-flex align-items-center mt-3">
            <StarRating value={product.rating} />
            &nbsp; (1 customer review)
          </div>
          <div className="mt-4">
            <div className="fs-4 d-flex">
              {" "}
              <div className="text-decoration-line-through me-2 text-body-tertiary">
                ${originPrice}
              </div>{" "}
              <div className="fw-semibold">${price}</div>{" "}
            </div>
          </div>
          <div className="mt-3">
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse eget dictum dolor. In dapibus nibh at fermentum
              congue. Nulla dictum est a fermentum volutpat. Praesent odio
              ipsum, convallis at risus non, venenatis laoreet lacus
            </p>
          </div>
          <div className="d-flex mt-3">
            <div onClick={() => addToCart(product.id)} className="btn btn-dark">
              Add to Cart
            </div>
          </div>
          <div className="mt-3">
            <p className="">SKU: {SKU}</p>
            <p className="">Category: {category}</p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="border-bottom">
          <button
            onClick={() => handleChangeTab(1)}
            className={
              showTab === 1
                ? "button bg-body-tertiary active fw-semibold fs-5"
                : "button bg-body-tertiary fs-5"
            }
          >
            Description
          </button>
          <button
            onClick={() => handleChangeTab(2)}
            className={
              showTab === 2
                ? "button bg-body-tertiary ms-1 active fw-semibold fs-5"
                : "button ms-1 bg-body-tertiary fs-5"
            }
          >
            Additional information{" "}
          </button>
          <button
            onClick={() => handleChangeTab(3)}
            className={
              showTab === 3
                ? "button bg-body-tertiary ms-1 active fw-semibold fs-5"
                : "button ms-1 bg-body-tertiary fs-5"
            }
          >
            Reviews (1)
          </button>
        </div>
        <div className="mt-4 d-flex flex-column">
          <div className={showTab === 1 ? "tab-pane active" : "tab-pane hide"}>
            <h2>Description</h2>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse eget dictum dolor. In dapibus nibh at fermentum
              congue. Nulla dictum est a fermentum volutpat.
            </p>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse eget dictum dolor. In dapibus nibh at fermentum
              congue. Nulla dictum est a fermentum volutpat.
            </p>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse eget dictum dolor. In dapibus nibh at fermentum
              congue. Nulla dictum est a fermentum volutpat.
            </p>
          </div>
          <div className={showTab === 2 ? "tab-pane active" : "tab-pane hide"}>
            <h2>Additional information</h2>
            <table className="table table-striped  table-hover mt-4">
              <tbody>
                <tr>
                  <th scope="row">Weight</th>
                  <td className="fst-italic"> 30 kg</td>
                </tr>
                <tr>
                  <th scope="row">Dimensions</th>
                  <td className="fst-italic"> 20 × 30 × 40 cm</td>
                </tr>
                <tr>
                  <th scope="row">Size</th>
                  <td className="fst-italic">Large, Medium, Small</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={showTab === 3 ? "tab-pane active" : "tab-pane hide"}>
            <h2>1 review for Small Vase</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse eget dictum dolor. In dapibus nibh at fermentum
              congue. Nulla dictum est a fermentum volutpat.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div>
          <h2>Related products</h2>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eget dictum dolor. In dapibus nibh at fermentum congue. Nulla dictum
          est a fermentum volutpat.
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;
