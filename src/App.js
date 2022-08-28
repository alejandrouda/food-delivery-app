import './App.css';
import OrdersComponent from './components/Orders/OrdersComponent';
import NavBarComponent from './components/Navbar/NavBarComponent';

function App() {
  return (
    <div className="App">
      <NavBarComponent></NavBarComponent>
      <div className="orders">
        <OrdersComponent></OrdersComponent>
        <OrdersComponent></OrdersComponent>
        <OrdersComponent></OrdersComponent>

      </div>
    </div>
  );
}

export default App;
