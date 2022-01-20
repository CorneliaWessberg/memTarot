import "./index.css";
import RouteApp from "./components/routeApp";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCoffee, faHome } from "@fortawesome/free-solid-svg-icons";
import { CartProvider } from "react-use-cart";

library.add(fab, faCoffee, faHome);

function App() {
  return (
    <div class="app">
      <CartProvider>
        <RouteApp />
      </CartProvider>
    </div>
  );
}

export default App;
