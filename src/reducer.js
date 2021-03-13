export const initialState = {
  uid: null,
  email: null,
  admin: false,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_UID: "SET_UID",
  SET_ADMIN: "SET_ADMIN",
  SET_EMAIL: "SET_EMAIL",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        uid: action.uid,
        email: action.email,
        admin: action.admin,
      };

    case actionTypes.SET_UID:
      return {
        ...state,
        uid: action.uid,
      };

    case actionTypes.SET_ADMIN:
      return {
        ...state,
        admin: action.admin,
      };

    case actionTypes.SET_EMAIL:
      return {
        ...state,
        email: action.email,
      };

    default:
      return state;
  }
};

export default reducer;
