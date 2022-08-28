import './OrdersComponent.css'

function OrdersComponent(props) {
  return (
    <div>
      <div className="orders__order-card orange-order">
        <div className="order-card__order-time">
          <h1 className="order-time__time">7</h1>
          <h3 className="order-time__units">MINS</h3>
        </div>
        <div className="orders_order-details">
          <h1 className="order-details__order-id">Order #2454-147</h1>
          <h5 className="order-details__address">Carrer de Sant Joan 228, Eixample, Barcelona</h5>
        </div>
        <button class="orders__deliver-btn">Deliver</button>
      </div>
    </div>
  )
}

export default OrdersComponent