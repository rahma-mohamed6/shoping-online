import React from "react";
import "./Cat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
export default function Cart({ cart, setcart }) {
  let incqty = (product) => {
    let exist = cart.find((x) => {
      return x.id === product.id;
    });
    setcart(
      cart.map((card) => {
        return card.id === product.id ? { ...exist, qty: exist.qty + 1 } : card;
      })
    );
  };
  let decqty = (product) => {
    let exist = cart.find((x) => {
      return x.id === product.id;
    });
    setcart(
      cart.map((card) => {
        return card.id === product.id ? { ...exist, qty: exist.qty - 1 } : card;
      })
    );
  };
  let removeproduct = (product) => {
    let exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist.qty > 0) {
      setcart(
        cart.filter((card) => {
          return card.id !== product.id;
        })
      );
    }
  };
  let total = cart.reduce((price, item) => price + item.qty * item.price, 0);
  return (
    <>
      <div className="cart w-full py-5">
        {cart.length === 0 && (
          <div className="empty cart w-full items-center">
            <h2 className="text-center uppercase text my-5 text-3xl tracking-wide font-extrabold">
              your shopping cart is empty
            </h2>
            <Link className="no-underline" to="/shop">
              <button className="cursor-pointer mx-auto block p-2 px-4 rounded-md  text-white bg-orange-600 mt-2 hover:bg-orange-800">
                shop now
              </button>
            </Link>
            {/**empty */}
          </div>
        )}
        <div className="container w-full max-w-full">
          {cart.map((card) => {
            return (
              <div className="box w-full p-2 rounded-xl text-center relative overflow-hidden shadow-md">
                <div className="img-box  w-full text-center">
                  <img src={card.img} className="h-52 mx-auto" alt="" />
                </div>
                {/**img-box */}

                <div className="detail w-full text-center">
                  <h3 className="uppercase text-orange-500 my-2 tracking-widest">
                    {card.Name}
                  </h3>
                  <p className="text-lg tracking-wider">
                    price :{card.price} $
                  </p>
                  <div className="quantity w-full">
                    <button
                      onClick={() => incqty(card)}
                      className="mx-3 bg-orange-600 py-1 px-3 rounded-md cursor-pointer"
                    >
                      +
                    </button>
                    <input
                      type="number"
                      className=" text-center w-14"
                      value={card.qty}
                    />
                    <button
                      onClick={() => decqty(card)}
                      className="mx-3 bg-orange-600 py-1 px-3 rounded-md cursor-pointer"
                    >
                      -
                    </button>
                    <p className="my-2 tracking-wider">
                      tatal : {card.price * card.qty} ${" "}
                    </p>{" "}
                  </div>
                  {/**quantity */}
                  <div className="icon">
                    <li
                      onClick={() => removeproduct(card)}
                      className="list-none bg-orange-600 w-fit absolute top-4 right-4 text-white p-1 cursor-pointer"
                    >
                      <FontAwesomeIcon icon={faClose} />
                    </li>
                  </div>
                </div>
                {/**detail */}
                {/**box */}
              </div>
            );
          })}

          <div className="bottom p-2 w-fit  mt-5 items-center h-10">
            {cart.length > 0 && (
              <div className="total">
                <h4 className="tracking-wider font-semibold text-2xl">
                  total : {total} $
                </h4>
                <button className="text-xl rounded-md text-white bg-orange-400 py-2 px-4">
                  checkout
                </button>
              </div>
            )}
            {/**bottom */}
          </div>
        </div>
        {/**container */}
        {/**cart */}
        <Footer />
      </div>
    </>
  );
}
