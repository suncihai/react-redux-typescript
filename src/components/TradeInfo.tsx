import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ITradeItem } from '../reducers';
import { Text } from '../common/Text';
import { Button } from '../common/Button';
import { InfoCell } from '../common/InfoCell';
import { Avatar } from '../common/Avatar';
import styled from 'styled-components';
import { lightGray, bitGray } from '../theme';
import { releaseBTC } from '../actions';
import avatar_buyer from '../imgs/avatar_buyer.png';
import avatar_seller from '../imgs/avatar_seller.png';

const Wrapper = styled.div`
  width: 300px;
  box-shadow: -5px 0 5px -5px ${lightGray};
  padding: 30px;
  text-align: center;
  z-index: 1;
`;

const Row = styled.div`
  width: 100%;
  display: block;
`;

const Flex = styled.div`
  display: flex;
  width: 100%;
`;

const TradeInfo = (props: StateProps & DispatchProps) => (
  <Wrapper>
    <Row>
      <Text>{`You are trading with ${props.tradeItem.buyerName}`}</Text>
      {/* hard code time here */}
      <Text type="sub-text" mb="30px">
        Started 23 minutes ago
      </Text>
      {props.tradeItem.isReleased ? (
        <Text type="title" mb="35px" bold>
          Your BTC is released
        </Text>
      ) : (
        <Button
          type="submit"
          mb="25px"
          disabled={!props.tradeItem.isPaid}
          onClick={() => {
            props.releaseBTC(props.tradeItem.tradeId, props.tradeList);
          }}
        >
          Release bitcoins
        </Button>
      )}
    </Row>
    <Flex>
      <InfoCell rb="1px" bb="1px">
        <Avatar src={avatar_buyer} mb="2px" />
        <Row>
          <Text type="green-text" inline bold>
            +{props.tradeItem.posRepu}
          </Text>
          <Text inline bold>
            /
          </Text>
          <Text type="red-text" inline bold>
            -{props.tradeItem.negRepu}
          </Text>
        </Row>
      </InfoCell>
      <InfoCell bb="1px">
        <Text uppercase bold>
          # Of Trades
        </Text>
        <Text>{props.tradeItem.trades}</Text>
      </InfoCell>
    </Flex>
    <Flex>
      <InfoCell rb="1px" bb="1px">
        <Text uppercase bold>
          Trade Status
        </Text>
        <Text type={props.tradeItem.isPaid ? 'green-text' : 'sub-text'} bold>
          {props.tradeItem.isPaid ? 'PAID' : 'NOT PAID'}
        </Text>
      </InfoCell>
      <InfoCell bb="1px">
        <Text uppercase bold>
          Trade Hash
        </Text>
        <Text type="sub-text">{props.tradeItem.hash}</Text>
      </InfoCell>
    </Flex>
    <Flex>
      <InfoCell rb="1px" bb="1px">
        <Text uppercase bold>
          Amount USD
        </Text>
        <Text>{props.tradeItem.usd}</Text>
      </InfoCell>
      <InfoCell bb="1px">
        <Text uppercase bold>
          Amount BTC
        </Text>
        <Text type="sub-text">{props.tradeItem.btc}</Text>
      </InfoCell>
    </Flex>
  </Wrapper>
);

interface StateProps {
  tradeList: Array<ITradeItem>;
  tradeItem: ITradeItem;
}

interface DispatchProps {
  releaseBTC: (
    tradeId: string,
    tradeList: Array<ITradeItem>
  ) => {
    type: string;
    payload_list: Array<ITradeItem>;
    payload_item: object;
  };
}

const mapStateToProps = state => ({
  tradeList: state.tradeList,
  tradeItem: state.tradeItem
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  releaseBTC: (tradeId: string, tradeList: Array<ITradeItem>) =>
    dispatch(releaseBTC(tradeId, tradeList))
});

export default connect(mapStateToProps, mapDispatchToProps)(TradeInfo);
