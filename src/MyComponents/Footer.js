import React from "react";

export const Footer = () => {
  let footerStyle={
    position : "relative",
    top: "10vh",
    width : "100%",
    border : "5px solid green"
  }
  return (
    <div>
    <footer className="bg-dark text-light py-3" style={footerStyle}>
    <p className="text-center">
      Copyright &copy; My TodoList.com
    </p>
    </footer>
    </div>
  );
};