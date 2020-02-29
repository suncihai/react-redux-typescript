import { ITradeBuyItem } from './reducers/index';

export const tradeList: Array<ITradeBuyItem> = [
  {
    tradeId: 'PX001', //indicates paxful trade id
    buyerName: 'Josh', //buyer's name
    paymentType: 'Amazon Gift Card', //several payment type
    usd: '77',
    btc: '0.00542345',
    hash: '45aFD3Rr',
    posRepu: 37,
    negRepu: 1,
    trades: 4,
    avatar: 'buyer', //in real case would be a img url path
    isPaid: true, //if buyer already paid
    isRead: false, //if this msg already read
    isActive: false //if this msg box is selected
  },
  {
    tradeId: 'PX002',
    buyerName: 'Ivan',
    paymentType: 'iTunes Gift Card',
    usd: '30',
    btc: '0.003746584',
    hash: 't8U82Hjdx',
    posRepu: 14,
    negRepu: 6,
    trades: 8,
    avatar: 'buyer',
    isPaid: false,
    isRead: false,
    isActive: false
  },
  {
    tradeId: 'PX003',
    buyerName: 'Erich',
    paymentType: 'iTunes Gift Card',
    usd: '45',
    btc: '0.004764238',
    hash: 'jbDd86Ysne',
    posRepu: 103,
    negRepu: 29,
    trades: 23,
    avatar: 'buyer',
    isPaid: true,
    isRead: true,
    isActive: true
  },
  {
    tradeId: 'PX004',
    buyerName: 'Calvin',
    paymentType: 'Paypal',
    usd: '30',
    btc: '0.003746584',
    hash: 'bvJS82GSds',
    posRepu: 42,
    negRepu: 9,
    trades: 14,
    avatar: 'buyer',
    isPaid: false,
    isRead: true,
    isActive: false
  }
];
