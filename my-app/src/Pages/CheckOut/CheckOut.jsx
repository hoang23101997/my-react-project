import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";
import { FaLock, FaUserShield, FaCreditCard, FaBusinessTime } from "react-icons/fa";
import userImg1 from "./user-2.jpg";
import userImg2 from "./user-1.jpg";
import moneyBack from "./money-back.jpg";
function CheckOut() {
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
    onSubmitOrder,
  } = useContext(Context);

  const cartEmpty = totalItem === 0;

  return (
    <div className="container d-flex pb-5 pe-5 ps-5">
      <div>
        <div className="d-flex pb-3">
          <div>
            <Link to="/" className="nav-link active">
              Home&nbsp;
            </Link>
          </div>
          <div>/ Checkout</div>
        </div>
        <div className="d-flex ps-5 bg-body p-4 w-100">
          <div className="w-50 me-4 pe-3">
            <h2>Your Order </h2>

            {cartEmpty ? (
              <div>
                <div className="d-flex justify-content-start mt-3 mb-3">
                  Your order is currently empty. Come and see our products...
                </div>
                <div>
                  <Link to="/all-products" className="nav-link active">
                    <button className="btn btn-dark mt-3">
                      {" "}
                      Return to shop
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="row mt-4">
                <div className="border border-dark-subtle rounded">
                  <div className="row p-2 pt-3 pb-3">
                    <div className="col fs-6 ">Product</div>
                    <div className="col-2 fs-6 d-flex justify-content-end">
                      Subtotal
                    </div>
                  </div>
                  {cartItem.map((item) => {
                    return (
                      <div
                        key={item.product.id}
                        className="row border-top border-secondary-subtle p-2"
                      >
                        <div className="col text-start d-flex align-items-center">
                          <img
                            style={{ width: 80 }}
                            className="ms-1"
                            src={item.product.img}
                          ></img>
                          <div className="ms-4">{item.product.name}</div>
                        </div>

                        <div className="col-2 d-flex align-items-center">
                          <div className="p-3" key={item.product.id}>
                            x{item.amount}
                          </div>
                        </div>
                        <div className="col-2 d-flex align-items-center justify-content-end me-1">
                          ${item.amount * item.product.price}
                        </div>
                      </div>
                    );
                  })}
                  <div className="row border-bottom border-top p-2 pt-3 pb-3">
                    <div className="col fs-6">SubTotal</div>
                    <div className="col-2 d-flex justify-content-end me-1 fs-6">
                      ${cartSubTotal}
                    </div>
                  </div>
                  <div className="row border-bottom p-2 pt-3 pb-3">
                    <div className="col fs-6">Shipping</div>
                    <div className="col-2 d-flex justify-content-end me-1 fs-6">
                      ${shippingFee}
                    </div>
                  </div>
                  <div className="row p-2 pt-3 pb-3">
                    <div className="col fw-semibold fs-5">Total</div>
                    <div className="col-2 d-flex justify-content-end me-1 fs-5 fw-semibold">
                      ${cartTotal}
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-4 p-0">
                  <input
                    type="text"
                    className="form-control w-100"
                    placeholder="Coupon code"
                    aria-label="Coupon code"
                    aria-describedby="button-addon2"
                  ></input>
                  <button
                    className="btn btn-dark w-50 ms-3 p-2"
                    type="button"
                    id="button-addon2"
                  >
                    Apply
                  </button>
                </div>
                <div className="d-flex mt-5 p-0 ">
                  <button
                    className="d-flex btn btn-dark w-100 p-2 justify-content-center align-items-center"
                    type="button"
                    id="button-addon2"
                    onSubmit={() => onSubmitOrder()}
                  >
                    {" "}
                    <FaLock className="me-2" />
                    Place Order ${cartTotal}
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="w-50 ms-4">
            <div className="container">
              <h2>What you’ll get</h2>
              <p className="mt-4">
                Molestie risus fames enim eu ornare aenean et arcu velit sem
                eget venenatis a quis neque mi, viverra in sed vestibulum,
                hendrerit amet lobortis
              </p>
              <div>
                <ul className="list-group mt-4">
                  <li
                    className="list-group-item bg-dark text-light"
                    aria-current="true"
                  >
                    Best quality in town and 100% authentic
                  </li>
                  <li className="list-group-item">Consequat nibh elementum</li>
                  <li className="list-group-item">Neque pharetra facilisi</li>
                  <li className="list-group-item">
                    Sed nunc tellus nulla nunc
                  </li>
                </ul>
              </div>
              <hr className="mt-5"></hr>

              <div className="card mt-5">
                <div className="card-header">User Review</div>
                <div className="card-body d-flex">
                  <img
                    className="rounded-circle"
                    style={{ width: 100, height: 100 }}
                    src={userImg2}
                  ></img>
                  <div className="ms-3">
                    <h5 className="card-title">Julia Keys</h5>
                    <p className="card-text text-secondary">
                      “Pharetra nec dui egestas pellentesque facilisi amet,
                      placerat pretium egestas sit commodo suspendisse aliquet
                      purus.”
                    </p>
                  </div>
                </div>
              </div>

              <div className="card mt-4">
                <div className="card-header">User Review</div>
                <div className="card-body d-flex">
                  <img
                    className="rounded-circle"
                    style={{ width: 100, height: 100 }}
                    src={userImg1}
                  ></img>
                  <div className="ms-3">
                    <h5 className="card-title">Hugo Medhurst</h5>
                    <p className="card-text text-secondary">
                      “Pharetra nec dui egestas pellentesque facilisi amet,
                      placerat pretium egestas sit commodo suspendisse aliquet
                      purus.”
                    </p>
                  </div>
                </div>
              </div>
              <hr className="mt-5"></hr>
              <div className="mt-5">
                <h3>Purchase with confidence</h3>
                <div className="card mt-4">
                  <div className="card-body d-flex">
                    <img
                      className="rounded-circle"
                      style={{ width: 100, height: 100 }}
                      src={moneyBack}
                    ></img>
                    <div className="ms-3">
                      <h5 className="card-title">100% Money Back Guarantee!</h5>
                      <p className="card-text text-secondary">
                        Adipiscing bibendum id a condimentum risus nec sed
                        malesuada ut etiam egestas. Adipiscing bibendum id a
                        condimentum risus nec.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  Adipiscing bibendum id a condimentum risus nec sed malesuada
                  ut etiam egestas. Adipiscing bibendum id a condimentum risus
                  nec.
                </div> 
                <div className="mt-3">
                <p className="d-flex align-items-center fw-semibold">
                  <FaUserShield className="me-2"/>
                  SSL secured checkout</p>
                  <p className="d-flex align-items-center fw-semibold">
                  <FaBusinessTime className="me-2"/>
                  24/7 support available</p>
                  <p className="d-flex align-items-center fw-semibold">
                  <FaCreditCard className="me-2"/>
                  Payment option</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
