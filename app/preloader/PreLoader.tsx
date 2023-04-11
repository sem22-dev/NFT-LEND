"use client"

import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";
import "./preloader.css"

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container"> 
        <span>V</span>
        <span>A</span>
        <span>U</span>
        <span>L</span>
        <span>T</span>
        <span>S</span>
        <span>W</span>
        <span>A</span>
        <span>P</span>
      </div>
    </div>
  );
};

export default PreLoader;
