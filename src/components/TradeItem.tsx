import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ITradeItem } from '../reducers';
import {
  green,
  bitBlue,
  bitGray,
  lightGray,
  darkGray,
  tinyGray
} from '../theme';
import styled from 'styled-components';
import { Text } from '../common/Text';
import { Avatar } from '../common/Avatar';
import _ from 'lodash';
import avatar_buyer from '../imgs/avatar_buyer.png';
import avatar_seller from '../imgs/avatar_seller.png';

const Wrapper = styled.div`
  padding: 20px;
  border-left: 1px solid ${bitGray};
  border-bottom: 1px solid ${bitGray};
  cursor: pointer;
  position: relative;
  &.isActive {
    background: ${bitBlue};
  }
`;

const Slider = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftPart = styled.div`
  display: flex;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  margin-right: 8px;
  margin-top: 4px;
  background: ${green};
  &.isRead {
    background: ${lightGray};
  }
  &.isActive {
    background: ${tinyGray};
  }
`;

const TextBox = styled.div``;
const RightPart = styled.div`
  width: 50px;
  text-align: center;
  padding-top: 3px;
`;

const TradeItem = ({ item, onClick }: OwnProps & DispatchProps) => (
  <Wrapper onClick={onClick} className={item.isActive ? 'isActive' : ''}>
    <Slider>
      <LeftPart>
        <Dot
          className={_.compact([
            item.isRead && 'isRead',
            item.isActive && 'isActive'
          ]).join(' ')}
        />
        <TextBox>
          <Text type="sub-text" mb="4px">{`${item.buyerName} is buying`}</Text>
          <Text bold mb="2px">
            {item.paymentType}
          </Text>
          <Text
            type="sub-text"
            nowrap
          >{`${item.usd} USD (${item.btc} BTC)`}</Text>
        </TextBox>
      </LeftPart>
      <RightPart>
        <Avatar
          src={item.avatar === 'buyer' ? avatar_buyer : avatar_seller}
          mb="5px"
        />
        <Text type={item.isPaid ? 'green-text' : 'sub-text'} bold nowrap>
          {item.isPaid ? 'PAID' : 'NOT PAID'}
        </Text>
      </RightPart>
    </Slider>
  </Wrapper>
);

interface OwnProps {
  onClick: () => void;
  item: ITradeItem;
}

interface DispatchProps {}

const mapDispatchToProps = (dispatch: Dispatch<ITradeItem>) => ({});

export default connect<{}, DispatchProps, OwnProps>(mapDispatchToProps)(
  TradeItem
);
