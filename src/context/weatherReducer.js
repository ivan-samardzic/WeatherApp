export const ADD_CITY = 'ADD_CITY';
export const DELETE_CITY = 'DELETE_CITY';

export const weatherReducer = (state, action) => {
    switch (action.type) {
      case ADD_PRODUCT:
        return;
      case REMOVE_PRODUCT:
        return;
      default:
        return state;
    }
  };