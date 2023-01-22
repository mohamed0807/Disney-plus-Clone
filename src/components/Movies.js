import React from "react";
import styled from "styled-components";
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";
import data from "../data.json";
import { Link, useParams } from "react-router-dom";
import { selectUserName } from "../features/user/userSlice";

function Movies() {
  const userName = useSelector(selectUserName);

  // console.log("Data::",data.routes.map((item)=>item.payload.items))
  // console.log("Data::",data.routes[1].payload.items.map((item)=>item.backgroundImg))
  console.log(
    "Data::",
    data.routes[1].payload.items.map((item) => item.id)
  );
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {data.routes[1].payload.items.map((item) =>
          userName ? (
            <Link to={`/detail/${item.id}`} key={item.id}>
              <Wrap>
                <img src={item.cardImg} alt="" />
              </Wrap>
            </Link>
          ) : (
            <Link to="/login" key={item.id}>
              <Wrap>
                <img src={item.cardImg} alt="" />
              </Wrap>
            </Link>
          )
        )}
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  padding: 0 0 26px;

  h4 {
    padding-bottom: 20px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
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
`;
