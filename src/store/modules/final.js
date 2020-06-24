import { createAction, handleActions } from "redux-actions";
import { Map, List } from "immutable";

const STAGE1 = "choice/STAGE1";
const STAGE2 = "choice/STAGE2";
const STAGE3 = "choice/STAGE3";

export const stage1 = createAction(CHANGE_INPUT, (value) => value);
export const stage2 = createAction(INSERT, (text) => text);
export const stage3 = createAction(TOGGLE, (id) => id);

const initialState = Map({
  itmes: [],
  stage1: 0,
  stage2: 0,
  stage3: 0,
});

export default handleActions(
  {
    // 한줄짜리 코드로 반환 할 수 있는 경우엔 다음과 같이 블록 { } 를 생략 할 수 있습니다.
    [CHANGE_INPUT]: (state, action) => state.set("input", action.payload),
    [INSERT]: (state, { payload: text }) => {
      // 위 코드는 action 객체를 비구조화 할당하고, payload 값을 text 라고 부르겠다는 의미입니다.
      const item = Map({ id: id++, checked: false, text }); // 하나 추가 할 때마다 id 값을 증가시킵니다.
      return state.update("todos", (todos) => todos.push(item));
    },
    [TOGGLE]: (state, { payload: id }) => {
      // id 값을 가진 index 를 찾아서 checked 값을 반전시킵니다
      const index = state
        .get("todos")
        .findIndex((item) => item.get("id") === id);
      return state.updateIn(["todos", index, "checked"], (checked) => !checked);
    },
    [REMOVE]: (state, { payload: id }) => {
      // id 값을 가진 index 를 찾아서 지웁니다.
      const index = state
        .get("todos")
        .findIndex((item) => item.get("id") === id);
      return state.deleteIn(["todos", index]);
    },
  },
  initialState
);
