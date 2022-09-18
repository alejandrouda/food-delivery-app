import React, { useState } from "react";
import "./App.css";
import OrdersComponent from "./components/Orders/OrdersComponent";
import NavBarComponent from "./components/Navbar/NavBarComponent";

const orders = [
  {
    orderID: "2454-147",
    address: "Carrer de Sant Joan 228, Eixample, Barcelona",
    time: 5,
    status: "preparing",
  },
  {
    orderID: "2454-148",
    address: "Carrer de Sant Joan 218, Eixample, Barcelona",
    time: 5,
    status: "preparing",
  },
  {
    orderID: "2454-149",
    address: "Carrer de Sant Joan 2, Eixample, Barcelona",
    time: 5,
    status: "preparing",
  },
  {
    orderID: "2454-150",
    address: "Carrer de Sant Joan 22, Eixample, Barcelona",
    time: 5,
    status: "delivering",
  },
  {
    orderID: "2454-151",
    address: "Carrer de Sant Joan 128, Eixample, Barcelona",
    time: 5,
    status: "done",
  },
];

function App() {
  const [selectedTab, setSelectedTab] = useState("preparing");

  const renderingOrders = orders.map((order) => {
    if (order.status === selectedTab.status) {
      return (
        <OrdersComponent
          key={order.orderID}
          orderID={order.orderID}
          address={order.address}
          time={order.time}
        ></OrdersComponent>
      );
    }
  });

  const navbarSelectedHandler = (navbarSelected) => {
    setSelectedTab(navbarSelected);
  };

  return (
    <div className="App">
      <NavBarComponent navbarSelected={navbarSelectedHandler}></NavBarComponent>
      <div className="orders">{renderingOrders}</div>
    </div>
  );
}

export default App;
