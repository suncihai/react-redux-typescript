import { ITradeBuyItem } from './reducers/index'

export const tradeList : Array<ITradeBuyItem> = [
  {
    tradeId: 'PX001',  //indicates paxful trade id 
    buyerName: 'Josh', //buyer's name
    paymentType: 'Amazon Gift Card', //several payment type
    value: '77 USD (0.00542345 BTC)', //in real case may get currency/crypto data from BE and combine to string in FE
    avatar: 'buyer',  //in real case would be a img url path
    isPaid: true, //if buyer already paid
    isRead: false, //if this msg already read
    isActive: false, //if this msg box is selected
  },
  {
    tradeId: 'PX002',
    buyerName: 'Ivan',
    paymentType: 'iTunes Gift Card',
    value: '30 USD (0.003746584 BTC)',
    avatar: 'buyer',
    isPaid: false,
    isRead: false,
    isActive: false,
  },
  {
    tradeId: 'PX003',
    buyerName: 'Erich',
    paymentType: 'iTunes Gift Card',
    value: '45 USD (0.004764238 BTC)',
    avatar: 'buyer',
    isPaid: true,
    isRead: true,
    isActive: true,
  },
  {
    tradeId: 'PX004',
    buyerName: 'Calvin',
    paymentType: 'Paypal',
    value: '30 USD (0.003746584 BTC)',
    avatar: 'buyer',
    isPaid: false,
    isRead: true,
    isActive: false,
  }
]
