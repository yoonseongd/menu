import React from "react";

// import store from "./src/store";
// import Nav from "./src/components/nav";
import Nav from "./src1/Nav";

import rootReducer from "./src1/reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";
import BeforeNav from "./src1/BeforeNav";

const store = createStore(rootReducer);
// console.log(store.getState());

const App = () => {
  return (
    <Provider store={store}>
      if(!loading){<BeforeNav />}else{<Nav />}
      {/* 이제 loading을 state로 하고, BeforeNav에서 각 이미지를 클릭했을때 각 스크린으로 가는 액션을 구현해 */}
    </Provider>
  );
};
export default App;
