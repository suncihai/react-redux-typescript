import { tradeList, chatMap } from '../initialData';
import { IChatItem } from '.';

const chatMapReducer = (
  state = chatMap,
  action
): Map<string, Array<IChatItem>> => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      console.log('chatMap', chatMap);
      return action.payload_map;
    case 'DELECT_TRADE_ITEM':
      console.log('chatMap', chatMap);
      return action.payload_map;
    default:
      return state;
  }
};

export default chatMapReducer;
