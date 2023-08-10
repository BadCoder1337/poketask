import { Provider } from "react-redux";

import { HomePage } from "./pages";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <HomePage />
  </Provider>
);

export default App;
