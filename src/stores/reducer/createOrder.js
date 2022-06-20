const initialState = {
  data: [],
};

const createOrder = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_ORDER': {
      return {
        ...state,
        data: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default createOrder;
