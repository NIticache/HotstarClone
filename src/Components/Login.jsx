import React from "react";
import "../Styles/Login.css";
import LoginLogoOne from "../Images/LoginLogoOne.svg";
import LoginLogoTwo from "../Images/LoginLogoTwo.png";
const Login = (props) => {
  return (
    <section className="Login_Container">
      <div className="Login_Contetnt">
        <div className="LoginLogo">
          {" "}
          <img className="LoginLogoOneimg" src={LoginLogoOne} alt="Logo_TOP" />
          <a className="loginbtn" href="#">GET ALL THERE</a>
          <div className="description">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </div>
          <img className="LoginLogoOneimg" src={LoginLogoTwo} alt="Logo_Two"/>
        </div>
       
      </div>
    </section>
  );
};

export default Login;
