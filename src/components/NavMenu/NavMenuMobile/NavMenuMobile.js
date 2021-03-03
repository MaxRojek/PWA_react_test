import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiCart, mdiBookOpen } from "@mdi/js";
import { MenuWrapper, BottomNavButton } from "./NavMenuMobileStyle";

function NavMenuMobile() {
  return (
    <MenuWrapper>
      <BottomNavButton>
        <Link
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
            width: "100%",
          }}
          to="/"
        >
          <Icon path={mdiBookOpen} color={"black"} size={"30"} />

          <div style={{ color: "black" }}>Produkty</div>
        </Link>
      </BottomNavButton>

      <BottomNavButton>
        <Link
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
            width: "100%",
          }}
          to="/basket"
        >
          <Icon path={mdiCart} color={"black"} size={"30"} />

          <div style={{ color: "black", textDecoration: "none" }}>koszyk</div>
        </Link>
      </BottomNavButton>
    </MenuWrapper>
  );
}
export default NavMenuMobile;
