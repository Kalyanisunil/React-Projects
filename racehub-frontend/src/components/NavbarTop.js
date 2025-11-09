import React, { useState } from "react";
import { NavLink } from "react-router-dom"; 
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

export default function NavbarTop() {
  const [openNavRight, setOpenNavRight] = useState(false);

  return (
    <MDBNavbar expand="sm" className="navtop-color">
      <MDBContainer fluid className="justify-content-end">
        <MDBNavbarToggler
          type="button"
          data-target="#navbarRightAlignExample"
          aria-controls="navbarRightAlignExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenNavRight(!openNavRight)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openNavRight}>
          <MDBNavbarNav right fullWidth={false} className="ms-auto mb-2 mb-lg-0">

            {/* Example normal links */}
            <MDBNavbarItem>
              <MDBNavbarLink as={NavLink} to="/race-series" className="text-light">
                Race Series
              </MDBNavbarLink>
            </MDBNavbarItem>

            {/* Right-side buttons */}
            <div className="right-links">
                          
            <MDBNavbarItem>
             <MDBNavbarLink
                  as={NavLink}
                  to="/tickets"
                  className="text-light"
                >
                  Tickets
                </MDBNavbarLink>
                          </MDBNavbarItem>
                           <MDBNavbarItem>
             <MDBNavbarLink
                  as={NavLink}
                  to="/store"
                className="text-light"
                >
                  Store
                </MDBNavbarLink>
            </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink
                  as={NavLink}
                  to="/signup"
                  className="text-danger"
                >
                  Sign Up
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink
                  as={NavLink}
                  to="/subscribe"
                  className="text-danger"
                >
                  Subscribe
                </MDBNavbarLink>
              </MDBNavbarItem>
            </div>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
