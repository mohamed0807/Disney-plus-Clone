import React from "react";
import styled from "styled-components";
import data from "../data.json";
import { useParams } from "react-router-dom";
function Detail() {
  const params = useParams();
  console.log("Params:::", params.id);
  //   const title = data.routes[1].payload.items[0].titleImg;
  //   const bgImg = data.routes[1].payload.items[0].backgroundImg;

  console.log(
    "Its here",
    data.routes[1].payload.items.filter((item) => item.id == params.id)
  );
  const Item = data.routes[1].payload.items.filter(
    (item) => item.id == params.id
  );
  const bgImg = Item[0].backgroundImg;
  const title = Item[0].titleImg;
  const desc = Item[0].description;
  const subtitle = Item[0].subTitle;
  console.log("this:", Item[0]);
  return (
    <Container>
      <Background>
        <img src={bgImg} alt="" />
      </Background>
      <ImgTitle>
        <img src={title} alt="" />
      </ImgTitle>
      <Controls>
        <PlayButton>
          <img
            style={{ height: "20px" }}
            src="https://cdn-icons-png.flaticon.com/512/27/27223.png"
            alt=""
          />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img
            style={{ height: "20px" }}
            src="https://cdn-icons-png.flaticon.com/512/2414/2414251.png"
            alt=""
          />
          <span>Trailer`</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="https://cdn-icons-png.flaticon.com/512/33/33308.png" alt="" />
        </GroupWatchButton>
      </Controls>
      <Subtitle>{subtitle}</Subtitle>
      <Description>
        <h1>{Item[0].title}</h1>
        {desc}
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.5;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImgTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;

  border: none;
  padding: 0px 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;
  background: rgb(190, 190, 190);
  opacity: 0.8;

  &:hover {
    background-color: white;
    opacity: 1;
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgb(0, 0, 0, 0.3);
  color: white;
  text-transform: uppercase;
  border: 1px solid rgb(249, 249, 249);

  &:hover {
    color: black;
  }
`;
const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 16px;

  span {
    padding-top: 7px;
    font-size: 30px;
    color: white;
    padding-bottom: 5px;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background-color: rgb(0, 0, 0,0.6);
  img {
    width:30px;
  }
`;
const Subtitle = styled.div`
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
  color: rgb(249, 249, 249);
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`;
