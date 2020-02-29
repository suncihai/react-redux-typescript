import React, { PropTypes } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ITradeList, ITradeBuyItem } from '../reducers';
import { Text } from '../common/Text';
import { Button } from '../common/Button';
import { InfoCell } from '../common/InfoCell';
import { Avatar } from '../common/Avater';
import styled from 'styled-components';
import { lightGray, bitGray } from '../theme';
import { selectTradeItem } from '../actions';
import avatar_buyer from '../imgs/avatar_buyer.png';
import avatar_seller from '../imgs/avatar_seller.png';

const Wrapper = styled.div`
  width: 300px;
  box-shadow: 5px 0 5px -5px ${lightGray};
  padding: 30px;
  text-align: center;
`;

const Row = styled.div`
  width: 100%;
  display: block;
`;

const Flex = styled.div`
  display: flex;
  width: 100%;
`;

const TradeInfo = ({ tradeItem }: StateProps & DispatchProps) => (
  <Wrapper>
    <Row>
      <Text>{`You are trading with ${tradeItem.buyerName}`}</Text>
      {/* hard code time here */}
      <Text type="sub-text" mb="30px">
        Started 23 minutes ago
      </Text>
      <Button
        type="submit"
        mb="25px"
        disabled={!tradeItem.isPaid}
        onClick={() => {
          console.log('ddd');
        }}
      >
        Release bitcoins
      </Button>
    </Row>
    <Flex>
      <InfoCell rb="1px" bb="1px">
        <Avatar src={avatar_buyer} mb="2px" />
        <Row>
          <Text type="green-text" inline bold>
            +{tradeItem.posRepu}
          </Text>
          <Text inline bold>
            /
          </Text>
          <Text type="red-text" inline bold>
            -{tradeItem.negRepu}
          </Text>
        </Row>
      </InfoCell>
      <InfoCell bb="1px">
        <Text uppercase bold>
          # Of Trades
        </Text>
        <Text>{tradeItem.trades}</Text>
      </InfoCell>
    </Flex>
    <Flex>
      <InfoCell rb="1px" bb="1px">
        <Text uppercase bold>
          Trade Status
        </Text>
        <Text type={tradeItem.isPaid ? 'green-text' : 'sub-text'} bold>
          {tradeItem.isPaid ? 'PAID' : 'NOT PAID'}
        </Text>
      </InfoCell>
      <InfoCell bb="1px">
        <Text uppercase bold>
          Trade Hash
        </Text>
        <Text type="sub-text">{tradeItem.hash}</Text>
      </InfoCell>
    </Flex>
    <Flex>
      <InfoCell rb="1px" bb="1px">
        <Text uppercase bold>
          Amount USD
        </Text>
        <Text>{tradeItem.usd}</Text>
      </InfoCell>
      <InfoCell bb="1px">
        <Text uppercase bold>
          Amount BTC
        </Text>
        <Text type="sub-text">{tradeItem.btc}</Text>
      </InfoCell>
    </Flex>
  </Wrapper>
);

interface StateProps {
  tradeItem: ITradeBuyItem;
}

interface DispatchProps {}

const mapStateToProps = state => ({
  tradeItem: state.tradeItem
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TradeInfo);
