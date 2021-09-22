import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/index";
import Product from "./pages/products";
import Shop from "./pages/Shop";




function App() {
  return (
    <div>
      <Switch> 

         <Route exact path="/product/:id">
                <Product />
                </Route> 
            

              <Route exact path="/shop">
                <Shop />
                </Route>

                <Route exact path="/">
                  <Home />
                </Route>  

      </Switch>
    </div>
  );
}
export default App;
