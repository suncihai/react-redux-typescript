import { ITradeItem, IChatItem } from './reducers/index';

export const tradeList: Array<ITradeItem> = [
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
    isBuy: true,
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
    isBuy: true,
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
    isBuy: true,
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
    isBuy: true,
    isPaid: false,
    isRead: true,
    isActive: false
  }
];

export const chatList1: Array<IChatItem> = [
  {
    message: 'Hi, I want to buy your BTC',
    timestamp: 1583065114000,
    isUser: false
  },
  {
    message: 'KK, How much do u want?',
    timestamp: 1583075114000,
    isUser: true
  }
];

export const chatList2: Array<IChatItem> = [
  {
    message: 'hello',
    timestamp: 1583085114000,
    isUser: false
  },
  {
    message: `What's up?`,
    timestamp: 1583090114000,
    isUser: true
  },
  {
    message: 'Are you still selling?',
    timestamp: 1583091114000,
    isUser: false
  }
];

export const chatList3: Array<IChatItem> = [
  {
    message: 'Hi, I want to buy your BTC',
    timestamp: 1583091434000,
    isUser: false
  },
  {
    message: 'KK, How much do u want?',
    timestamp: 1583092514000,
    isUser: true
  },
  {
    message: 'Emmm... Let me see',
    timestamp: 1583093714000,
    isUser: false
  },
  {
    message:
      'Well, I wonder if you could lower down a little bit since recently BTC is going down you know? I would like to buy more if you could make price as 9880. You know I am just wondering',
    timestamp: 1583094124000,
    isUser: false
  }
];

export const chatList4: Array<IChatItem> = [
  {
    message: 'Hey man',
    timestamp: 1583067814000,
    isUser: false
  }
];

export const chatMap: Map<string, Array<IChatItem>> = new Map();
chatMap.set('PX001', chatList1);
chatMap.set('PX002', chatList2);
chatMap.set('PX003', chatList3);
chatMap.set('PX004', chatList4);
