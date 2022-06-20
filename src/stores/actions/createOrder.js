export const createOrder = data => {
  return {
    type: 'CREATE_ORDER',
    data: data,
  };
};
