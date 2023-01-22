import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img className="disney" src="/images/viewers-disney.png" alt="" />
      </Wrap>
      <Wrap>
        <img className="pixar" src="/images/viewers-pixar.png" alt="" />
      </Wrap>
      <Wrap>
        <img className="marvel" src="/images/viewers-marvel.png" alt="" />
      </Wrap>
      <Wrap>
        <img className="starwars" src="/images/viewers-starwars.png" alt="" />
      </Wrap>
      <Wrap>
        <img className="natgeo" src="/images/viewers-national.png" alt="" />
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  padding: 30px 0px 26px;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  cursor: pointer;
  border-radius: 5px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
  .disney:hover {
    background: url(/images/d-intro.gif) no-repeat;
    // background-position:cover;
    object-fit: cover;
    background-size: cover;
  }
  .marvel:hover {
    background: url(/images/m-intro.gif);
    object-fit: cover;
    background-size: cover;
  }
  .pixar:hover {
    background: url(/images/p-intro.webp);
    object-fit: cover;
    background-size: cover;
  }
  .starwars:hover {
    background: url(/images/sw-intro.gif);
    object-fit: cover;
    background-size: cover;
  }
  .natgeo:hover {
    background: url(/images/n-intro.webp);
    object-fit: cover;
    background-size: cover;
  }
`;
