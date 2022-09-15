export const initialState = {
  exercise: ['jogging', 'pushups'],
  bodyPart: 'all',
};

export const actionTypes = {
  SET_EXERCISE: 'SET_EXERCISE',
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_EXERCISE:
      return {
        ...state,
        exercise: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
