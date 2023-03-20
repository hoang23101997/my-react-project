import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Alert from "react-bootstrap/Alert";
import "./AllProducts.css";
import { products } from "./data";
import { Context } from "../../Context/Context";
import productImg3 from "../../productimg/wc-12-300x300.png";
import productImg4 from "../../productimg/wc-18-300x300.png";
import productImg6 from "../../productimg/wc-img-1-300x300.png";
import productImg7 from "../../productimg/wc-19-300x300.png";
import { color, style } from "@mui/system";
import { yellow } from "@mui/material/colors";
function AllProducts() {
  const { addToCart, FaStar, StarRating } = useContext(Context);
  //Sorting
  const [displayPage, setDisplayPage] = useState([...products]);
  const onChange = (e) => {
    const value = e.target.value;
    switch (value) {
      case "default":
        setDisplayPage([...products]);
        break;
      case "high-price":
        setDisplayPage([...displayPage.sort((a, b) => b.price - a.price)]);
        break;
      case "low-price":
        setDisplayPage([...displayPage.sort((a, b) => a.price - b.price)]);
        break;
      case "rating":
        setDisplayPage([...displayPage.sort((a, b) => b.rating - a.rating)]);
        break;
      case "ASC":
        setDisplayPage([
          ...displayPage.sort((a, b) => a.name.localeCompare(b.name)),
        ]);
        break;
      case "DSC":
        setDisplayPage([
          ...displayPage.sort((a, b) => b.name.localeCompare(a.name)),
        ]);
        break;
    }
    console.log(value, displayPage);
  };

  return (
    <div className="d-flex">
      <div className="w-75 pb-5 pe-5 ps-5">
        <div className="d-flex">
          <div>
            <Link to="/" className="nav-link active">
              Home&nbsp;
            </Link>
          </div>
          <div>/ All Products</div>
        </div>
        <h1 className="mt-3">All Products</h1>
        <div className="d-flex justify-content-between">
          <p className="woocommerce-result-count">Showing 1 – 6 of 6 results</p>
          <form className="woocommerce-ordering" method="get">
            <select
              onChange={(value) => onChange(value)}
              name="orderby"
              className="form-select"
              aria-label="Shop order"
              fdprocessedid="h8ennj"
            >
              <option value="default">No sorting</option>
              <option value="low-price">Sort by price: low to high</option>
              <option value="high-price">Sort by price: high to low</option>
              <option value="rating">Sort by rating: highest</option>
              <option value="ASC">Sort by name: A to Z</option>
              <option value="DSC">Sort by name: Z to A</option>
            </select>
            <input type="hidden" name="paged" value="1"></input>
          </form>
        </div>

        <div>
          <div className="row">
            {displayPage.map((product) => (
              <div className="col-4 g-2" key={product.id}>
                <Link to={`/products/${product.id}`}>
                  {" "}
                  <img className="mt-3" src={product.img}></img>
                </Link>
                <Link
                  className="nav-link fs-5 fw-semibold mt-3"
                  to={`${product.id}`}
                >
                  {" "}
                  {`${product.name}`}
                </Link>
                <StarRating value={product.rating} />
                <div className="d-flex">
                  <div className="text-decoration-line-through me-2 text-body-tertiary">
                    ${product.originPrice}
                  </div>{" "}
                  <div className="fw-semibold"> ${product.price} </div>
                </div>

                <div
                  onClick={() => addToCart(product.id)}
                  className="btn btn-dark mt-3"
                >
                  Add to Cart
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <aside className="w-25 p-4 mt-1 bg-body">
        <h4> Popular Categories</h4>
        <Link className="nav-link" to="/all-products/decoration">
          <div className="d-flex align-items-center mt-3 border-bottom pb-3">
            <img className="w-25" src={productImg6}></img>
            <p style={{ fontSize: 17 }} className="ms-3 mt-2">
              {" "}
              Decoration (4){" "}
            </p>
          </div>
        </Link>
        <Link className="nav-link" to="/all-products/frame&poster">
          <div className="d-flex align-items-center mt-3 border-bottom pb-3">
            <img className="w-25" src={productImg4}></img>
            <p style={{ fontSize: 17 }} className="ms-3 mt-2">
              {" "}
              Frames & Posters (3){" "}
            </p>
          </div>
        </Link>
        <Link className="nav-link" to="/all-products/funiture">
          <div className="d-flex align-items-center mt-3 border-bottom pb-3">
            <img className="w-25" src={productImg3}></img>
            <p style={{ fontSize: 17 }} className="ms-3 mt-2">
              {" "}
              Furniture (3){" "}
            </p>
          </div>
        </Link>
        <Link className="nav-link" to="/all-products/pillows">
          <div className="d-flex align-items-center mt-3 border-bottom pb-3">
            <img className="w-25" src={productImg7}></img>
            <p style={{ fontSize: 17 }} className="ms-3 mt-2">
              {" "}
              Pillows (3){" "}
            </p>
          </div>
        </Link>
        <h4 className="form-label mt-4">Most Popular Products</h4>

        <Link className="nav-link" to="/products/3">
          <div className="d-flex align-items-center flex-column mt-4 border-bottom">
            <img className="w-50" src={productImg3}></img>
            <h5 style={{ fontSize: 17 }} className="d-flex mt-2">
              {" "}
              Modern Wooden Chair
            </h5>
            <p style={{ fontSize: 17 }}>
              <FaStar style={{ color: "orange" }} />
              <FaStar style={{ color: "orange" }} />
              <FaStar style={{ color: "orange" }} />
              <FaStar style={{ color: "orange" }} />
              <FaStar style={{ color: "orange" }} />
            </p>
            <p>$14.00</p>
          </div>
        </Link>

        <Link className="nav-link" to="/products/4">
          <div className="d-flex align-items-center flex-column mt-4 pb-3">
            <img className="w-50" src={productImg4}></img>
            <h5 style={{ fontSize: 17 }} className="d-flex mt-2">
              Simple Frame
            </h5>
            <p style={{ fontSize: 17 }}>
              <FaStar style={{ color: "orange" }} />
              <FaStar style={{ color: "orange" }} />
              <FaStar style={{ color: "orange" }} />
              <FaStar style={{ color: "orange" }} />
              <FaStar style={{ color: "orange" }} />
            </p>
            <div>$19.00</div>
          </div>
        </Link>
      </aside>
    </div>
  );
}

export default AllProducts;
