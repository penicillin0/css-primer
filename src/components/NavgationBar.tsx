import React from "react";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

export const NavgationBar = () => {
  return (
    <Navbar style={{ backgroundColor: "#333" }} expand="lg">
      <NavbarBrand href="/" className="mx-3 text-white">
        CSS Primer
      </NavbarBrand>

      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink
            href="https://github.com/penicillin0/css-primer"
            className="text-white"
          >
            GitHub
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};
