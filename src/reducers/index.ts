import { combineReducers } from 'redux';
import { RouterState } from 'connected-react-router';
import counterReducer from './counter';
import tradeListReducer from './tradeList'
import tradeItemReducer from './tradeItem'

const rootReducer = combineReducers({
  count: counterReducer,
  tradeList: tradeListReducer,
  tradeItem: tradeItemReducer
})

export interface State {
  count: number
  router: RouterState
}

export interface ITradeList {
  tradeList: Array<ITradeBuyItem>
}

export interface ITradeBuyItem {
   tradeId: string,
   buyerName: string,
   paymentType: string,
   value: string,
   avatar: string,
   isPaid: boolean,
   isRead: boolean,
   isActive: boolean,
}

export default rootReducer
