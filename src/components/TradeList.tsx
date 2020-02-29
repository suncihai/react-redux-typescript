import React, { PropTypes } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ITradeList, ITradeItem } from '../reducers';
import TradeItem from './TradeItem';
import styled from 'styled-components';
import { lightGray } from '../theme';
import { selectTradeItem } from '../actions';

const Wrapper = styled.div`
  width: 300px;
  box-shadow: 5px 0 5px -5px ${lightGray};
  z-index: 1;
`;

const TradeList = (props: StateProps & DispatchProps) => (
  <Wrapper>
    {props.tradeList.map((ele, index) => {
      return (
        <TradeItem
          onClick={() => props.selectTradeItem(ele.tradeId, props.tradeList)}
          item={ele}
          key={index}
        />
      );
    })}
  </Wrapper>
);

interface StateProps {
  tradeList: Array<ITradeItem>;
}

interface DispatchProps {
  selectTradeItem: (
    tradeId: string,
    tradeList: Array<ITradeItem>
  ) => {
    type: string;
    payload_list: Array<ITradeItem>;
    payload_item: object;
  };
}

const mapStateToProps = state => ({
  tradeList: state.tradeList
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  selectTradeItem: (tradeId: string, tradeList: Array<ITradeItem>) =>
    dispatch(selectTradeItem(tradeId, tradeList))
});

export default connect(mapStateToProps, mapDispatchToProps)(TradeList);
