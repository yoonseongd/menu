import React from "react";

import { Provider } from "react-redux";
import store from "./src/store";

import Nav from "./src/components/nav";

const App = () => {
  return (
    <Provider store={store}>
      <Nav />
    </Provider>
  );
};
export default App;
