// import { createAction, handleActions } from "redux-actions";
// import { Map, List } from "immutable";

// // //  관련 상태 로직

// // // 액션 타입을 정의해줍니다.
// const GET_ITEMS = "nav/GETITEMS";
// // const DECREMENT = "counter/DECREMENT";

// // // 액션 생성 함수를 만듭니다.
// // // 이 함수들은 나중에 다른 파일에서 불러와야 하므로 내보내줍니다.
// export const getItems = createAction(GET_ITEMS);
// // export const decrement = createAction(DECREMENT);

// // 모듈의 초기 상태를 정의합니다.
// const initialState = List({
//   item: Map(),
// });

// // 리듀서를 만들어서 내보내줍니다.
// // handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체이고
// // 두번째 파라미터는 초기 상태입니다.
// export default handleActions(
//   {
//     [GET_ITEMS]: (state, action) => {
//       state.set("item", action.payload);
//     },
//     // action 객체를 참조하지 않으니까 이렇게 생략을 할 수도 있겠죠?
//     // state 부분에서 비구조화 할당도 해주어서 코드를 더욱 간소화시켰습니다.
//   },
//   initialState
// );
