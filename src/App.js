import "./index.css";
import RouteApp from "./components/routeApp";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCoffee )

function App() {
  return (
    <div class="app">
    
        <RouteApp />
 
    </div>
  );
}

export default App;
