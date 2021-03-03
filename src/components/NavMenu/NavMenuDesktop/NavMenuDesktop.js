import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiCart, mdiBookOpen } from "@mdi/js";

import { MenuWrapper, NavDesktopButton } from "./NavMenuDesktopStyle";

function NavMenuDesktop() {
  return (
    <MenuWrapper>
      <NavDesktopButton>
        <Link
          style={{
            display: "flex",
            flexDirection: "row",
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
      </NavDesktopButton>

      <NavDesktopButton>
        <Link
          style={{
            display: "flex",
            flexDirection: "row",
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
      </NavDesktopButton>
    </MenuWrapper>
  );
}
export default NavMenuDesktop;
