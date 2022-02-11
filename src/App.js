import { Provider } from "react-redux"
import RestaurantScreen from "./components/RestaurantScreen"
import store from "./store"
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RestaurantScreen />
      </Provider>
    </div>
  )
}

export default App
