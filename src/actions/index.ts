import { ITradeItem } from '../reducers';

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
  tradeList: Array<ITradeItem>
): {
  type: string;
  payload_list: Array<ITradeItem>;
  payload_item: object;
} => {
  let target = 0;
  let newTradeItem = {};
  tradeList.forEach((ele, index) => {
    if (ele.tradeId === tradeId) {
      target = index;
    }
  });
  tradeList.splice(target, 1);
  newTradeItem = Object.assign({}, tradeList[0]);
  return {
    type: 'DELETE_TRADE_ITEM',
    payload_list: tradeList,
    payload_item: newTradeItem
  };
};
