import { tradeList } from '../initialData';
import { ITradeItem } from '.';

const tradeListReducer = (state = tradeList, action): Array<ITradeItem> => {
  switch (action.type) {
    case 'SELECT_TRADE_ITEM':
      return [...action.payload_list];
      break;
    case 'DELETE_TRADE_ITEM':
      return [...action.payload_list];
      break;
  }
  return state;
};

export default tradeListReducer;
