import React from "react";
import "./header.css";
import { HiOutlineFire } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <h1 className="text"> 
          <HiOutlineFire className="icon" />
          Logo
        </h1>
        <h1 className="text1">
          <AiOutlineMenu />
        </h1>
      </div>

      <div className="nav">
        <li>Home</li>
        <li>React</li>
        <li>React</li>
        <li>React</li>
      </div>
    </div>
  );
}
