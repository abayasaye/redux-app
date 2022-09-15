import "./Styled.css";
import React from "react";
import styled from "styled-components";

function Styled() {
  const Button = styled.button`
  background-color:#fff;
  color:#000;
  `
  return (
    <div className="styled">
      <button>HELLO</button>
      <h1>Styled</h1>
    </div>
  );
};

export default Styled;
