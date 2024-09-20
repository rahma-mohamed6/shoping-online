import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavDash.css";
import { faGear, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons/faBasketShopping";
const NavDash = () => {
  return (
    <>
      <div className="left ">
        <div className="menu">
          <h3>dash board</h3>
          <ul>
            <li className="py-3">
              <Link
                className="mr-5 no-underline font-semibold  duration-1000 hover:text-orange-600"
                to="/product"
              >
                <FontAwesomeIcon className="px-2" icon={faBasketShopping} />
                product
              </Link>
            </li>
            <li className="py-3">
              <Link
                className="mr-5 no-underline  font-semibold  duration-1000 hover:text-orange-600"
                to="/users"
              >
                <FontAwesomeIcon className="px-2" icon={faUserAlt} />
                user
              </Link>
            </li>
          </ul>
        </div>
        {/**menu */}
        <div className="left-bottom">
          <div className="bottom">
            <FontAwesomeIcon className="text-blue-500" icon={faGear} />
            <Link
              className="inline-block px-2 no-underline text-blue-500 font-semibold "
              to="/"
            >
              outlogo
            </Link>
          </div>
          {/**bottom */}
        </div>
        {/**left-bottom */}
        {/**left */}
      </div>
    </>
  );
};

export default NavDash;
