export const ADD_CITY = 'ADD_CITY';
export const DELETE_CITY = 'DELETE_CITY';

export const weatherReducer = (state, action) => {
    switch (action.type) {
      case ADD_CITY:
        return;
      case DELETE_CITY:
        return;
      default:
        return state;
    }
  };