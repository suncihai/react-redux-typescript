import { tradeList } from '../initialData';
import { ITradeBuyItem } from '.';

const tradeListReducer = (state = tradeList, action): Array<ITradeBuyItem> => {
  switch (action.type) {
    case 'SELECT_TRADE_ITEM':
      return [...action.payload_list];
      break;
  }
  return state;
};

export default tradeListReducer;
