import { ITradeBuyItem } from '../reducers'

export const selectTradeItem = (tradeId: string, tradeList: Array<ITradeBuyItem>) : {type: string, payload:Array<ITradeBuyItem>} => {
   tradeList.forEach(ele=>{
      ele.isActive = false;
   })
   tradeList.forEach(ele=>{
     if(ele.tradeId === tradeId) {
        ele.isActive = true;
        ele.isRead = true;
     }
   })
   return {
     type: 'SELECT_TRADE_ITEM',
     payload: tradeList
   }
}