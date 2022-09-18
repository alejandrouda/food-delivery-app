import "./OrdersComponent.css";

function OrdersComponent(props) {
  return (
    <div>
      <div className="orders__order-card orange-order">
        <div className="order-card__order-time">
          <h1 className="order-time__time">{props.time}</h1>
          <h3 className="order-time__units">MINS</h3>
        </div>
        <div className="orders_order-details">
          <h1 className="order-details__order-id">Order #{props.orderID}</h1>
          <h5 className="order-details__address">{props.address}</h5>
        </div>
        <button className="orders__deliver-btn">Deliver</button>
      </div>
    </div>
  );
}

export default OrdersComponent;
