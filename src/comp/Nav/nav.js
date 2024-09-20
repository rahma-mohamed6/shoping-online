import React, { useState } from "react";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faArrowRightToBracket,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Nav({ search, setsearch, serachproduct }) {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  let [showadmin, setshowadmin] = useState(false);
  let admin = () => {
    setshowadmin(true);
  };
  let check = () => {
    let inputname = document.getElementById("name").value;
    let inputpas = document.getElementById("pas").value;
    let alink = document.getElementById("link");
    if (inputname === "admin" && inputpas === "100100") {
      return (alink.href = "/dashboard");
    } else {
      return alert("do not admin");
    }
  };

  return (
    <nav className="w-100 relative w-full">
      {showadmin ? (
        <>
          <div className="logo-f  fixed mx-auto p-0 text-white w-full  h-full z-10">
            <div className="from">
              <h3 className="mb-5">loging admin</h3>
              <div className="box text-left my-3">
                <label className="text-xl">user name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="enter user name"
                  maxLength={20}
                  minLength={1}
                />
              </div>
              {/**box */}
              <div className="box text-left mt-4 mb-5">
                <label className="text-xl">password</label>
                <input
                  type="password"
                  id="pas"
                  placeholder="enter password"
                  maxLength={20}
                  minLength={1}
                />
              </div>
              {/**box */}
              <a
                href=""
                onClick={() => check()}
                id="link"
                className="py-2 px-5 bg-orange-500 hover:bg-orange-800 no-underline text-lg text-black rounded-md"
              >
                send
              </a>
            </div>
            {/**from */}
            {/**logo */}
          </div>
        </>
      ) : null}
      <div className="min-header flex p-2 max-w-full justify-between text-center">
        <div className="logo">
          <img
            className="cursor-pointer object-cover"
            src="/image/Techayo.png"
            alt="logo"
            style={{ width: "150px", height: "40px" }}
          />
        </div>
        {/**logo */}

        <div className="search-box">
          <input
            className=" p-1 outline-none bg-none rounded-l-lg w-60 border border-orange-600 border-t-2 border-l-2 border-b-2 border-r-0"
            type="text"
            // value={search}
            placeholder="search"
            onChange={(e) => setsearch(e.target.value)}
          />
          <button
            onClick={serachproduct}
            className="p-1 w-12 bg-orange-600 text-white cursor-pointer rounded-r-lg border border-orange-600 border-r-2 border-t-2 border-b-2 border-l-0 outline-none mr-5 duration-500 hover:bg-orange-300 hover:border-orange-300 hover:text-orange-900"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        {/**search_box */}
        <div className="flex justify-between  items-center">
          <button className="px-4 text-slate-400" onClick={() => admin()}>
            admin
          </button>
          {isAuthenticated ? (
            <div className="user flex mr-3">
              <div className="icon mr-3 text-lg">
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
              {/**icon */}
              <div className="bth ">
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                  className="border-none outline-none cursor-pointer bg-none text-lg "
                >
                  logout
                </button>
              </div>
              {/**bth */}
              {/**user */}
            </div>
          ) : (
            <div className="user flex mr-3">
              <div className="icon mr-3 text-lg">
                <FontAwesomeIcon icon={faArrowRightToBracket} />
              </div>
              {/**icon */}
              <div className="bth ">
                <button
                  onClick={() => loginWithRedirect()}
                  className="border-none outline-none cursor-pointer bg-none text-lg "
                >
                  login
                </button>
              </div>
              {/**btn */}
              {/**user */}
            </div>
          )}
        </div>
        {/**logo */}
      </div>
      {/**min header */}

      <div className="last-header flex items-center max-w-full p-2 h-14 items-center bg-slate-400 justify-between  ">
        {isAuthenticated ? (
          <div className="up flex ">
            <div className="img">
              <img
                src={user.picture}
                alt="image"
                style={{ width: "50px", height: "50px" }}
                className="rounded-full"
              />
            </div>
            {/** img*/}
            <div className="flex flex-col ml-3 text-white">
              <h2>{user.name} </h2>
              <p>{user.email}</p>
            </div>
            {/**flex */}
            {/**up */}
          </div>
        ) : (
          <div className="up flex px-5">
            <div className="icon pr-3 ">
              <FontAwesomeIcon className="text-white" icon={faUser} />
            </div>
            {/**icon */}
            <p onClick={() => loginWithRedirect()} className="text-white">
              please login
            </p>
            {/**flex */}
          </div>
        )}
        <ul className=" flex capitalize">
          <li className="list-none">
            <Link
              className="mr-5 no-underline text-slate-100 font-semibold  duration-1000 hover:text-orange-600"
              to="/"
            >
              home
            </Link>
          </li>
          <li className="list-none">
            <Link
              className="mr-5 no-underline text-slate-100 font-semibold  duration-1000 hover:text-orange-600"
              to="/shop"
            >
              shop
            </Link>
          </li>
          <li className="list-none">
            <Link
              className="mr-5 no-underline text-slate-100 font-semibold duration-1000 hover:text-orange-600"
              to="/cart"
            >
              cart
            </Link>
          </li>
          <li className="list-none">
            <Link
              className="mr-5 no-underline text-slate-100 font-semibold  duration-1000 hover:text-orange-600"
              to="/content"
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
      {/**last_header */}
    </nav>
  );
}
