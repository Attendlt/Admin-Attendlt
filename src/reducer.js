export const initialState = {
  uid: null,
  email: null,
  admin: false,
  instituteId: null,
  storedInstitutes: null,
  storedUsers: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_UID: "SET_UID",
  SET_ADMIN: "SET_ADMIN",
  SET_EMAIL: "SET_EMAIL",
  SET_INST_ID: "SET_INST_ID",
  SET_INSTITUTES: "SET_INSTITUTES",
  SET_USERS: "SET_USERS",
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

    case actionTypes.SET_INST_ID:
      return {
        ...state,
        instituteId: action.instituteId,
      };

    case actionTypes.SET_USERS:
      return {
        ...state,
        storedUsers: action.storedUsers,
      };

    case actionTypes.SET_INSTITUTES:
      return {
        ...state,
        storedInstitutes: action.storedInstitutes,
      };

    default:
      return state;
  }
};

export default reducer;
