import React, { useState } from "react";
import "./NavBarComponent.css";
import OrderStatusComponent from "./OrderStatusComponent";

const navbarInitialState = [
  {
    numberState: 3,
    status: "preparing",
    categoryID: "1111",
    selected: true,
  },
  {
    numberState: 1,
    status: "delivering",
    categoryID: "1112",
    selected: false,
  },
  {
    numberState: 1,
    status: "done",
    categoryID: "1113",
    selected: false,
  },
];

function NavBarComponent(props) {
  const [navbarState, setNavbarState] = useState(navbarInitialState);

  const selectedHandler = (categoryID) => {
    setNavbarState((prevNavbarState) => {
      const newNavbarState = prevNavbarState.map((tab) => {
        if (tab.categoryID === categoryID) {
          return { ...tab, selected: true };
        } else {
          return { ...tab, selected: false };
        }
      });
      return [...newNavbarState];
    });
  };

  const navbarSelected = navbarState.find((tab) => {
    return tab.selected === true;
  });

  props.navbarSelected(navbarSelected);

  const navBarContent = navbarState.map((state) => (
    <OrderStatusComponent
      key={state.categoryID}
      status={state.status}
      categoryID={state.categoryID}
      numberState={state.numberState}
      selectedHandler={selectedHandler}
      classNameHandler={
        state.selected
          ? "order-status_component selected"
          : "order-status_component"
      }
    />
  ));

  return <div className="nav-left">{navBarContent}</div>;
}

export default NavBarComponent;
