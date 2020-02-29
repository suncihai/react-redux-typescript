import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faMonument } from '@fortawesome/free-solid-svg-icons';
import { Text } from '../common/Text';
import { ChatCell } from '../common/ChatCell';
import { Input } from '../common/Input';
import { ITradeList, ITradeItem, IChatItem } from '../reducers';
import TradeItem from './TradeItem';
import styled from 'styled-components';
import { bitBlue, lightGray, tinyGray } from '../theme';
import { deleteTradeItem } from '../actions';
import moment from 'moment';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  padding: 30px;
  flex-direction: column;
  flex-grow: 1;
  background: ${bitBlue};
  z-index: 0;
`;

const RowTitle = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  padding-bottom: 25px;
  border-bottom: 1px solid ${tinyGray};
`;

const Title = styled.div``;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background: ${lightGray};
  position: absolute;
  cursor: pointer;
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const SendMsgBox = styled.div`
  position: absolute;
  width: calc(100% - 60px);
  bottom: 60px;
`;

const TradeChat = (props: StateProps & DispatchProps) => {
  return (
    <Wrapper>
      <RowTitle>
        <Icon
          onClick={() =>
            props.deleteTradeItem(props.tradeItem.tradeId, props.tradeList)
          }
        >
          <FontAwesomeIcon icon={faTrashAlt} color="white" />
        </Icon>
        <Title>
          <Text bold>{props.tradeItem.paymentType}</Text>
          <Text inline mr="5px">
            {props.tradeItem.buyerName}
          </Text>
          <Text type="green-text" inline bold mr="2px">
            +{props.tradeItem.posRepu}
          </Text>
          <Text bold inline mr="2px">
            /
          </Text>
          <Text type="red-text" inline bold>
            -{props.tradeItem.negRepu}
          </Text>
        </Title>
      </RowTitle>
      {props.tradeChat.map((ele, index) => {
        return (
          <ChatCell
            key={index}
            isUser={ele.isUser}
            time={moment(ele.timestamp).format('hh:mm:ss a')}
          >
            {ele.text}
          </ChatCell>
        );
      })}
      <SendMsgBox>
        <Input
          append
          text="SEND"
          onClick={() => {
            console.log('dddd');
          }}
          onChange={() => {
            console.log('333');
          }}
        />
      </SendMsgBox>
    </Wrapper>
  );
};

interface StateProps {
  tradeItem: ITradeItem;
  tradeList: Array<ITradeItem>;
  tradeChat: Array<IChatItem>;
  isBuyer: boolean;
}

interface DispatchProps {
  deleteTradeItem: (
    tradeId: string,
    tradeList: Array<ITradeItem>
  ) => {
    type: string;
    payload_list: Array<ITradeItem>;
    payload_item: object;
  };
}

const mapStateToProps = state => ({
  tradeItem: state.tradeItem,
  tradeList: state.tradeList,
  tradeChat: state.tradeChat,
  isBuyer: state.isBuyer
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  deleteTradeItem: (tradeId: string, tradeList: Array<ITradeItem>) =>
    dispatch(deleteTradeItem(tradeId, tradeList))
});

export default connect(mapStateToProps, mapDispatchToProps)(TradeChat);
