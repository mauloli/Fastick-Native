const initialState = {
  data: [],
};

const addUrl = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_URL': {
      return {
        ...state,
        data: action.data,
      };
    }
    case 'DELETE_URL': {
      return {
        ...state,
        data: [],
      };
    }
    default: {
      return state;
    }
  }
};

export default addUrl;
