import { ITradeItem, IChatItem } from '../reducers';

export const selectTradeItem = (
  tradeId: string,
  tradeList: Array<ITradeItem>
): {
  type: string;
  payload_list: Array<ITradeItem>;
  payload_item: object;
} => {
  let tradeItem = {};
  tradeList.forEach(ele => {
    ele.isActive = false;
  });
  tradeList.forEach(ele => {
    if (ele.tradeId === tradeId) {
      ele.isActive = true;
      ele.isRead = true;
      tradeItem = Object.assign({}, ele);
    }
  });
  return {
    type: 'SELECT_TRADE_ITEM',
    payload_list: tradeList,
    payload_item: tradeItem
  };
};

export const deleteTradeItem = (
  tradeId: string,
  tradeList: Array<ITradeItem>,
  chatMap: Map<string, Array<IChatItem>>
): {
  type: string;
  payload_list: Array<ITradeItem>;
  payload_map: Map<string, Array<IChatItem>>;
} => {
  let target = 0;
  tradeList.forEach((ele, index) => {
    if (ele.tradeId === tradeId) {
      target = index;
      let chatList: Array<IChatItem> = new Array();
      chatMap.set(tradeId, [...chatList]);
    }
  });
  tradeList.splice(target, 1);
  return {
    type: 'DELETE_TRADE_ITEM',
    payload_list: tradeList,
    payload_map: chatMap
  };
};

export const sendMsg = (
  tradeId: string,
  message: string,
  timestamp: number,
  isUser: boolean,
  chatMap: Map<string, Array<IChatItem>>
): {
  type: string;
  payload_map: Map<string, Array<IChatItem>>;
  payload_list: Array<IChatItem>;
} => {
  let chatList: Array<IChatItem> = chatMap.get(tradeId);
  let chatItem: IChatItem = { message, timestamp, isUser };
  chatList.push(chatItem);
  chatMap.set(tradeId, [...chatList]);

  return {
    type: 'SEND_MESSAGE',
    payload_map: chatMap,
    payload_list: chatList
  };
};

export const releaseBTC = (
  tradeId: string,
  tradeList: Array<ITradeItem>
): {
  type: string;
  payload_list: Array<ITradeItem>;
  payload_item: object;
} => {
  let tradeItem = {};
  tradeList.forEach(ele => {
    if (ele.tradeId === tradeId) {
      ele.isReleased = true;
      ele.trades++;
      tradeItem = Object.assign({}, ele);
    }
  });
  return {
    type: 'RELEASE_BTC',
    payload_list: tradeList,
    payload_item: tradeItem
  };
};
