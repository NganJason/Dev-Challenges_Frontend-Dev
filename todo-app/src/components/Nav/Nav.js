import React from "react";
import { Text } from "../../globalStyles/typography";
import { NavItem, StyledNav } from "./style";

function Nav({setPage, page}) {    
  const togglePage = (e) => {
    let clickedNav = e.target.textContent
    if (clickedNav === "") {
      return
    }

    setPage(clickedNav.toLowerCase())
  }

  return (
    <StyledNav onClick={togglePage}>
      <NavItem active={page === "all"}>
        <Text size="0.9" bd="600" center primary>
          All
        </Text>
      </NavItem>
      <NavItem active={page === "active"}>
        <Text size="0.9" bd="600" center primary>
          Active
        </Text>
      </NavItem>
      <NavItem active={page === "completed"}>
        <Text size="0.9" bd="600" center primary>
          Completed
        </Text>
      </NavItem>
    </StyledNav>
  );
}

export default Nav;
