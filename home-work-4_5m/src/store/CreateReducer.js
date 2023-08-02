const initialState = {
  name: "",
  surName: "",
  age: "",
};

export const CreateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const updateUser = (payload) => ({ type: "UPDATE_USER", payload });
