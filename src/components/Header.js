import React, { useEffect } from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setSignOut,
  setUserLogin,
} from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        navigate("/");
      }
    });
  }, []);

  const SignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(setSignOut());
        navigate("/login");
        console.log("success");
      })
      .catch((error) => {
        console.log(error.message);
        console.log("error");
      });
  };
  const signIn = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        console.log(userName);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
      });
  };

  return (
    <Nav>
      <Logo onClick={() => navigate("/")} src="/images/logo.svg" />

      {userName ? (
        <>
          <NavMenu>
            <a>
              <img src="/images/home-icon.svg"  alt=""/>
              <span>HOME</span>
            </a>
            <a>
              <img src="/images/search-icon.svg"  alt=""/>
              <span>Search</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" alt="" />
              <span>Watchlist</span>
            </a>
            <a>
              <img src="/images/original-icon.svg"  alt=""/>
              <span>Originals</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" alt="" />
              <span>Movies</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" alt="" />
              <span>Series</span>
            </a>
          </NavMenu>
          <UserImg onClick={SignOut} src="/images/profile.jpg" />
        </>
      ) : (
        <Login onClick={signIn}>Login</Login>
      )}
    </Nav>
  );
}

export default Header;

const Login = styled.button`
  width: 100px;
  border: 2px solid white;
  background-color: black;
  color: white;
  height: 40px;
  font-size: 17px;
  border-radius: 5px;
  font-weight: bold;
  position: absolute;
  right: 60px;
  cursor: pointer;
  letter-spacing: 1.5px;
  text-transform: upperCase;
  text-align: center;
  &:hover {
    background-color: gray;
  }
`;

const Nav = styled.nav`
  height: 70px;
  background-color: black;
  display: flex;
  align-items: center;
  padding: 0 30px;
`;
const Logo=styled.img`
    width:80px;
    opacity:;
`
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-transform: upperCase;
    cursor: pointer;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
const UserImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
