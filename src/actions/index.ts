import { ITradeBuyItem } from '../reducers';

export const selectTradeItem = (
  tradeId: string,
  tradeList: Array<ITradeBuyItem>
): {
  type: string;
  payload_list: Array<ITradeBuyItem>;
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
