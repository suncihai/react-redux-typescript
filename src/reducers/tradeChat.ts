import { tradeList, chatMap } from '../initialData';
import { IChatItem } from '.';

const tradeId: string = tradeList.filter(ele => ele.isActive)[0].tradeId;
const chatList: Array<IChatItem> = chatMap.get(tradeId);

const tradeChatReducer = (state = chatList, action): Array<IChatItem> => {
  switch (action.type) {
    case 'SELECT_TRADE_ITEM':
      return [...chatMap.get(action.payload_item.tradeId)];
    default:
      return state;
  }
};

export default tradeChatReducer;
