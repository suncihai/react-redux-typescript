//initial as a seller
const isBuyerReducer = (state = false, action): boolean => {
  switch (action.type) {
    case 'SWITCH_BUYER_SELLER':
      return !action.payload;
    default:
      return state;
  }
};

export default isBuyerReducer;
