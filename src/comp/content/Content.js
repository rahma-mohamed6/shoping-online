import React, { useState } from "react";
import "./Content.css";
import Footer from "../Footer/Footer";

export default function Content() {
  let [user, setuser] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });
  let names, values;
  let data1 = (e) => {
    values = e.target.value;
    names = e.target.name;
    setuser({ ...user, [names]: values });
  };
  let send = async (e) => {
    let { Name, Email, Subject, Message } = user;
    e.preventDefault();
    fetch(
      "https://react-ecommerce-content-default-rtdb.firebaseio.com/Message.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name,
          Email,
          Subject,
          Message,
        }),
      }
    );
    alert("thank you");
  };
  return (
    <>
      <div className="contact py-5 w-full ">
        <div className="container my-8 w-full max-w-full text-center">
          <form method="POST">
            <div className="POST text-center mx-auto shadow-xl py-3 px-2">
              <div className="box w-full mx-auto py-3 text-left relative ">
                <lable className="mx-3 text-2xl">name</lable>
                <input
                  className="rounded-md absolute right-0 p-2  "
                  type="text"
                  placeholder="Enter Name"
                  name="Name"
                  value={user.Name}
                  onChange={data1}
                />
              </div>
              {/**box name*/}
              <div className="box w-full mx-auto py-3 text-left relative ">
                <lable className="mx-3 text-2xl">e-mail</lable>
                <input
                  className="rounded-md absolute right-0 p-2  "
                  type="email"
                  placeholder="Enter E-mail"
                  name="Email"
                  value={user.Email}
                  onChange={data1}
                />
              </div>
              {/**box email */}

              <div className="box w-full mx-auto py-3 text-left relative ">
                <lable className="mx-3 text-2xl">subject</lable>
                <input
                  className="rounded-md absolute right-0 p-2  "
                  type="text"
                  placeholder="Subject"
                  name="Subject"
                  value={user.Subject}
                  onChange={data1}
                />
              </div>
              {/**box subject*/}

              <div className="box w-full mx-auto py-2 text-left relative ">
                <lable className="mx-3 text-2xl">massage</lable>
                <textarea
                  className="rounded-md absolute right-0 "
                  placeholder="Enter massage"
                  name="Message"
                  value={user.Message}
                  onChange={data1}
                ></textarea>
              </div>
              {/**box massage*/}
            </div>
            {/**post */}
            <button
              type="submit"
              className="py-2 px-5 bg-orange-600 items-center mt-3 font-semibold tracking-wide text-white hover:bg-orange-800"
              onClick={send}
            >
              send
            </button>
          </form>
          {/**from */}
        </div>
        {/**container */}
      </div>
      {/**contact */}
      <Footer />
    </>
  );
}
