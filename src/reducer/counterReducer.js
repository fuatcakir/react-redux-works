const initialState = {
  counter: 1,
  history: [],
};

function reducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case "COUNT_UP":
      return {
        ...state,
        counter: state.counter + action.value,
        history: state.history.concat({
          id: Math.random(),
          counter2: state.counter + action.value,
        }),
      };
    case "COUNT_DOWN":
      return {
        ...state,
        counter: state.counter - action.value,
        history: state.history.concat({
          id: Math.random(),
          counter2: state.counter - action.value,
        }),
      };

      case "DEL_ITEM":
        newState.history = newState.history.filter((item) => item.id !== action.value);
      break;
    default:
      break;
  }

  return newState;
}

export default reducer;
