import {
  DesktopNav,
  Link,
  Logo,
  LogoText,
  LogoutButton,
  MenuLoginUserDiv,
  Nav,
  NavItem,
  NavItems,
  NavWrapper,
} from "./style";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useRef, useState } from "react";

import { useLocation } from "react-router-dom";
import {
  removeToken,
  removeTokenLocalStorage,
  removeUser,
} from "../../store/store";

function Header() {
  const [scroll, setscroll] = useState(0);
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const handleScroll = () => {
      let presentScroll = window.scrollY;
      if (scroll > 0) {
        setShow(false);
      }
      if (presentScroll - scroll < 0) {
        setShow(true);
      }

      setscroll(presentScroll);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  const navData = [
    {
      title: "Home",
      url: "/",
      active: true,
    },
    {
      title: "Login",
      url: "/login",
      active: !user,
    },
    {
      title: "Sign Up",
      url: "/signup",
      active: !user,
    },
  ];

  const linkStyle = ({ isActive }) => {
    return {
      borderBottom: isActive ? "1px solid white" : "",
      borderColor: isActive ? "#00d4bd" : "",
      color: isActive ? "#00d4bd" : "",
    };
  };

  return (
    <Nav show={show}>
      <NavWrapper>
        <Logo>
          <LogoText to='/'>
            Contact <span>Saver</span>
          </LogoText>
        </Logo>

        <DesktopNav>
          <NavItems>
            {navData.map((item) => {
              return (
                item.active && (
                  <NavItem key={item.title}>
                    <Link
                      to={item.url}
                      style={linkStyle}
                    >
                      {item.title}
                    </Link>
                  </NavItem>
                )
              );
            })}

            <LogoutButton
              onClick={() => {
                dispatch(removeUser());
                dispatch(removeToken());
                dispatch(removeTokenLocalStorage());
              }}
            >
              Logout
            </LogoutButton>
          </NavItems>
        </DesktopNav>
      </NavWrapper>
    </Nav>
  );
}

export default Header;
