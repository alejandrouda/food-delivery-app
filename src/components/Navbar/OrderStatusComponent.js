import React, { useState } from "react";
import "./OrderStatusComponent.css";

function OrderStatusComponent(props) {
  // const [isSelected, setIsSelected] = useState(
  //   props.category === "Preparing" ? true : false
  // );

  const selectedClickHandler = () => {
    props.selectedHandler(props.categoryID);
  };

  return (
    <div className={props.classNameHandler} onClick={selectedClickHandler}>
      <h1 className="order-status_number">{props.numberState}</h1>
      <h3 className="order-status_status-title">{props.status}</h3>
    </div>
  );
}

export default OrderStatusComponent;
