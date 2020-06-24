import React from "react";
import { Provider } from "react-redux";
import Nav from "./src/components/Nav";

const App = () => {
  return (
    <Provider store={store}>
      <Nav />
    </Provider>
  );
};

export default App;
