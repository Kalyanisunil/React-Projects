
import React, { useState } from "react";
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
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
import NavbarTop from "./NavbarTop";

export default function CNavbar() {
  const [openNavRight, setOpenNavRight] = useState(false);

  return (
    <>
      <NavbarTop />
      <MDBNavbar expand="sm" dark bgColor="dark" className="navbar-bg-image">
        <MDBContainer fluid>
          <MDBNavbarBrand as={NavLink} to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f2/New_era_F1_logo.png"
              height="30"
              alt=""
              loading="lazy"
            />
          </MDBNavbarBrand>

          <MDBNavbarToggler
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpenNavRight(!openNavRight)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar open={openNavRight}>
            <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">

              <MDBNavbarItem>
                <MDBNavbarLink as={NavLink} to="/schedule">
                  Schedule
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink as={NavLink} to="/results">
                  Results
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link">
                    Drivers
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link as={NavLink} to="/drivers/list">
                      All Drivers
                    </MDBDropdownItem>
                    <MDBDropdownItem link as={NavLink} to="/drivers/standings">
                      Driver Standings
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link">
                    Teams
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link as={NavLink} to="/teams/list">
                      All Teams
                    </MDBDropdownItem>
                    <MDBDropdownItem link as={NavLink} to="/teams/standings">
                      Team Standings
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink as={NavLink} to="/fantasy">
                  Fantasy & Gaming
                </MDBNavbarLink>
              </MDBNavbarItem>

            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
