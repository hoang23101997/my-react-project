import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
function YourCart() {
  const {
    addToCart,
    cartItem,
    removeFromCart,
    cartSubTotal,
    totalItem,
    cartTotal,
    shippingFee,
    handleIncrease,
    handleDecrease,
  } = useContext(Context);

  const cartEmpty = totalItem === 0;

  return (
    <div className="container pb-5 pe-5 ps-5">
      <div className="d-flex pb-3">
        <div>
          <Link to="/" className="nav-link active">
            Home&nbsp;
          </Link>
        </div>
        <div>/ Cart</div>
      </div>
      <div className="ps-5 bg-body p-4">
        <h1>Your Cart </h1>
        <span>
          {cartEmpty ? (
            <div>
              <div className="d-flex justify-content-start mt-3 mb-3">
                Your cart is currently empty. Come and see our products...
              </div>
              <div>
                <Link to="/all-products" className="nav-link active">
                  <button className="btn btn-dark mt-3"> Return to shop</button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="row p-5">
              <div className="row border p-3">
                <div className="col fw-semibold ms-5 fs-5 ">Product</div>
                <div className="col-2 fw-semibold me-3 fs-5">Price</div>
                <div className="col-2 fw-semibold ms-1 me-2 fs-5">Quantity</div>
                <div className="col-2 me-3 fw-semibold ms-1 fs-5">Subtotal</div>
              </div>
              {cartItem.map((item) => {
                return (
                  <div key={item.product.id} className="row border p-3">
                    <div className="col text-start d-flex align-items-center">
                      <FaTrashAlt
                        type="button"
                        onClick={() => removeFromCart(item.product.id)}
                        className="me-4"
                      />
                      <img
                        style={{ width: 80 }}
                        className="ms-1"
                        src={item.product.img}
                      ></img>
                      <div className="ms-4">{item.product.name}</div>
                    </div>
                    <div className="col-2 d-flex align-items-center">
                      ${item.product.price}
                    </div>
                    <div className="col-2 d-flex align-items-center me-4">
                      <button
                        className="btn btn-light"
                        onClick={() => handleDecrease(item.product.id)}
                      >
                        -
                      </button>
                      <div className="p-3" key={item.product.id}>
                        {item.amount}
                      </div>
                      <button
                        className="btn btn-light"
                        onClick={() => handleIncrease(item.product.id)}
                      >
                        +
                      </button>
                    </div>
                    <div className="col-2 d-flex align-items-center ms-3 me-1">
                      ${item.amount * item.product.price}
                    </div>
                  </div>
                );
              })}
              <div className="row border p-3">
                <div className="col fw-semibold ms-5 fs-5">Total</div>
                <div className="col-2 fw-semibold ms-4 fs-5">{totalItem}</div>
                <div className="col-2 fw-semibold fs-5">${cartSubTotal}</div>
              </div>
              <div>
                <Link to="/all-products" className="nav-link">
                  <div className="d-flex justify-content-end">
                    <button
                      style={{ width: 250 }}
                      className="btn btn-dark p-2 mb-2 mt-3"
                    >
                      Continue To Shop
                    </button>
                  </div>
                </Link>
              </div>
              <div className="d-flex  justify-content-end">
                <div className="card w-50 mt-5 mb-5">
                  <div className="card-body">
                    <h5 className="card-title fs-2 ">Cart Totals</h5>
                    <table className="table mt-3">
                      <tbody>
                        <tr>
                          <th scope="row" className="fw-semibold fs-5">
                            Subtotal
                          </th>
                          <td>${cartSubTotal}</td>
                        </tr>
                        <tr>
                          <th scope="row" className="fw-semibold fs-5">
                            Shipping
                          </th>
                          <td>${shippingFee}</td>
                        </tr>
                        <tr>
                          <th scope="row" className="fw-semibold fs-5">
                            Total
                          </th>
                          <td className="fw-semibold fs-5">${cartTotal}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                
                  <Link to ="/checkout">
                    <button className="btn btn-dark fs-5 p-3 w-100">
                      Proceed To Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </span>
      </div>
    </div>
  );
}

export default YourCart;
