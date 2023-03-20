import React, { createContext, useState, useEffect } from "react";
import { products } from "../Pages/AllProducts/data";
import { FaStar } from "react-icons/fa";
export const Context = createContext(null);
export const ContextProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);
  useEffect(() => {
    const cartFromLocalStorage = localStorage.getItem("cart");
    if (cartFromLocalStorage !== null)
      setCartItem(JSON.parse(cartFromLocalStorage));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);

  const handleIncrease = (productId) => {
    setCartItem(
      cartItem.map((item) =>
        productId === item.product.id
          ? { ...item, amount: item.amount + 1 }
          : item
      )
    );
  };
  const handleDecrease = (productId) => {
    setCartItem(
      cartItem.map((item) =>
        productId === item.product.id
          ? { ...item, amount: item.amount - 1 }
          : item
      )
    );
  };
  const Star = ({ marked, starId }) => {
    return (
      <span data-star-id={starId} className="star" role="button">
        {marked ? "\u2605" : "\u2606"}
      </span>
    );
  };
  const StarRating = ({ value }) => {
    const [rating, setRating] = useState(parseInt(value) || 0);
    const [selection, setSelection] = useState(0);

    const hoverOver = (event) => {
      let val = 0;
      if (event && event.target && event.target.getAttribute("data-star-id"))
        val = event.target.getAttribute("data-star-id");
      setSelection(val);
    };
    return (
      <div
        onMouseOut={() => hoverOver(null)}
        onClick={(e) =>
          setRating(e.target.getAttribute("data-star-id") || rating)
        }
        onMouseOver={hoverOver}
      >
        {Array.from({ length: 5 }, (v, i) => (
          <Star
            starId={i + 1}
            key={`star_${i + 1}`}
            marked={selection ? selection >= i + 1 : rating >= i + 1}
          />
        ))}
      </div>
    );
  };

  const addToCart = (productId) => {
    alert("Your item is added to cart");
    const index = cartItem.findIndex((item) => item.product.id === productId);
    if (index >= 0) {
      setCartItem((prev) => {
        prev[index].amount++;
        return [...prev];
      });
      // sản phẩm A đã có trong giỏ hàng, khonong thêm sản phẩm A vào giờ hàng nữa
      // Chỉ cần tăng số lượng của nó lên 1 đơn vị thôi
    } else {
      // Sản phẩm A chưa có trong giỏ hàng
      // thêm sản phẩm A vào giỏ hàng với giá trị amount = 1

      setCartItem((prev) => {
        const prod = products.find((p) => p.id === productId);
        return [...prev, { product: prod, amount: 1 }];
      });
    }
  };

  const removeFromCart = (productId) => {
    setCartItem((prev) => {
      const itemIndex = prev.findIndex((item) => item.product.id === productId);
      if (itemIndex >= 0) {
        prev.splice(itemIndex, 1);
      }
      return [...prev];
    });
  };
  const handleChangeAmount = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  const totalItem = cartItem.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const cartSubTotal = cartItem.reduce((acc, item) => {
    return acc + item.amount * item.product.price;
  }, 0);

  const shippingFee = 30;
  const cartTotal = Number(cartSubTotal) + Number(shippingFee);

  const [showTab, setShowTab] = useState(1);
  const handleChangeTab = (e) => {
    setShowTab(e);
  };

  const onSubmitOrder = () => {
    alert("Your order is placed")
  }
  const contextValue = {
    cartItem,
    addToCart,
    removeFromCart,
    totalItem,
    cartSubTotal,
    cartTotal,
    shippingFee,
    handleIncrease,
    handleDecrease,
    FaStar,
    handleChangeTab,
    showTab,
    StarRating,
    handleChangeAmount,
    onSubmitOrder
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
