import React from "react";
import './Contact.css';

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="imgBx">
          <img
            src={"https://wallpaperaccess.com/full/3214390.jpg"}
            alt="bgImage"
          />
        </div>
        <div className="contentBx">
          <div className="formBx">
            <h2>Login</h2>
            <form>

              <div className="inputBx">
                <span>Username</span>
                <input type="text" name="" />
              </div>
              <div className="inputBx">
                <span>Password</span>
                <input type="Password" name="" />
              </div>
              <div className="remember">
              <label><input type="checkbox" />Remember me</label>
              </div>
              <div className="inputBx">
                <input type="submit" value="Sign in" name="" />
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
