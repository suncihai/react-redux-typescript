import React, { PropTypes } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ITradeList, ITradeBuyItem } from '../reducers';
import { Text } from '../common/Text';
import { Button } from '../common/Button';
import styled from 'styled-components';
import { lightGray } from '../theme';
import { selectTradeItem } from '../actions';

const Wrapper = styled.div`
  width: 300px;
  height: 700px;
  box-shadow: 5px 0 -5px 5px ${lightGray};
  padding: 30px;
  text-align: center;
`;

const Title = styled.div`
  width: 100%;
`;

const TradeInfo = (props: StateProps & DispatchProps) => (
  <Wrapper>
    {console.log('props', props)}
    <Title>
      <Text>{`You are trading with ${props.buyerName}`}</Text>
      {/* hard code time here */}
      <Text type="sub-text" mb="30px">
        Started 23 minutes ago
      </Text>
      <Button
        type="submit"
        onClick={() => {
          console.log('ddd');
        }}
      >
        Release bitcoins
      </Button>
    </Title>
  </Wrapper>
);

interface StateProps {
  tradeId: string;
  buyerName: string;
  paymentType: string;
  value: string;
  avatar: string;
  isPaid: boolean;
  isRead: boolean;
  isActive: boolean;
}

interface DispatchProps {
  selectTradeItem: (
    tradeId: string,
    tradeList: Array<ITradeBuyItem>
  ) => { type: string; payload: Array<ITradeBuyItem> };
}

const mapStateToProps = (state: ITradeBuyItem) => ({
  tradeId: state.tradeId,
  buyerName: state.buyerName,
  paymentType: state.paymentType,
  value: state.value,
  avatar: state.avatar,
  isPaid: state.isPaid,
  isRead: state.isRead,
  isActive: state.isActive
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  selectTradeItem: (tradeId: string, tradeList: Array<ITradeBuyItem>) =>
    dispatch(selectTradeItem(tradeId, tradeList))
});

export default connect(mapStateToProps, mapDispatchToProps)(TradeInfo);
