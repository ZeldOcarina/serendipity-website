import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import respond from "../styles/abstracts/mediaqueries";
import { GiHamburgerMenu } from "react-icons/gi";

import AppContext from "../context/AppContext";

const Wrapper = styled.nav`
  position: ${({ homePage }) => (homePage ? css`absolute` : css`static`)};
  background-color: ${({ homePage }) => (homePage ? css`transparent` : css`var(--color-primary-light)`)};
  top: 0;
  left: 0;
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  z-index: 150;

  .logo {
    width: 20rem;
  }

  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;

    ${respond(
      "phone-port",
      css`
        width: 90%;
      `
    )}
  }

  .links-container {
    display: flex;
    gap: 2.5rem;

    ${respond(
      "tab-port",
      css`
        display: none;
      `
    )}

    &--dark {
      margin-left: auto;
      li,
      a,
      p {
        color: var(--body-color);
      }
    }
  }

  .social-icons {
    ${respond(
      "tab-port",
      css`
        display: none;
      `
    )}
  }

  .nav-link {
    color: var(--body-color);
    text-transform: capitalize;
  }

  .mobile-menu-activator {
    display: none;

    ${respond(
      "tab-port",
      css`
        display: block;
        color: var(--body-color);
        position: absolute;
        right: 10%;
        width: 6%;
        height: auto;
      `
    )}
  }
`;

const Navbar = ({
  siteMetadata: {
    navbarLinks: { social, pages },
  },
  innerPage,
  logo,
  logoAlt,
  homePage,
}) => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useContext(AppContext);

  return (
    <Wrapper scrolled={false} homePage={homePage}>
      <div className="container">
        <Link to="/">
          <img src={logo} alt={logoAlt} className="logo" />
        </Link>
        <div className={innerPage ? "links-container links-container--dark" : "links-container"}>
          {pages.map(({ name, link }, i) => {
            return (
              <Link to={link} className="nav-link" key={i}>
                {name}
              </Link>
            );
          })}
        </div>
        <GiHamburgerMenu
          className="mobile-menu-activator"
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
        />
      </div>
    </Wrapper>
  );
};

export default Navbar;
