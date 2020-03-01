import { tradeList, chatMap } from '../initialData';
import { IChatItem } from '.';
import Cookie from 'js-cookie';

let tradeId: string = '';
if (Cookie.get('paxfulTradeItem')) {
  tradeId = Cookie.get('paxfulTradeItem');
} else {
  tradeId = tradeList.filter(ele => ele.isActive)[0].tradeId;
}
const chatList: Array<IChatItem> = chatMap.get(tradeId);

const tradeChatReducer = (state = chatList, action): Array<IChatItem> => {
  switch (action.type) {
    case 'SELECT_TRADE_ITEM':
      return [...chatMap.get(action.payload_item.tradeId)];
    case 'DELECT_TRADE_ITEM':
      return [...chatMap.get(action.payload_item.tradeId)];
    case 'SEND_MESSAGE':
      return [...action.payload_list];
    default:
      return state;
  }
};

export default tradeChatReducer;
