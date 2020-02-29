import { tradeList } from '../initialData';
import { ITradeBuyItem } from '.';

const tradeItem = tradeList.filter(ele => ele.isActive)[0];

const tradeItemReducer = (state = tradeItem, action): ITradeBuyItem => {
  switch (action.type) {
    case 'SELECT_TRADE_ITEM':
      return action.payload_item;
    default:
      return state;
  }
};

export default tradeItemReducer;
