import React from "react";

// import store from "./src/store";
// import Nav from "./src/components/nav";
import Nav from "./src1/Nav";

import rootReducer from "./src1/reducers";
import Provider from "react-redux";
import createStore from "redux";

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Nav />
    </Provider>
  );
};
export default App;
