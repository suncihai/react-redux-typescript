import * as React from 'react';
import { useState, useRef } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Text } from '../common/Text';
import { ChatCell } from '../common/ChatCell';
import { Input } from '../common/Input';
import { ITradeItem, IChatItem } from '../reducers';
import styled from 'styled-components';
import { bitBlue, lightGray, tinyGray } from '../theme';
import { deleteTradeItem } from '../actions';
import { sendMsg } from '../actions';
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

const ChatContainer = styled.div`
  height: 85%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
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

const ChatEndRef = styled.div``;
const SendMsgBox = styled.div`
  position: absolute;
  width: calc(100% - 60px);
  bottom: 60px;
`;

const TradeChat = (props: StateProps & DispatchProps) => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  return (
    <Wrapper>
      <RowTitle>
        <Icon
          onClick={() =>
            props.deleteTradeItem(
              props.tradeItem.tradeId,
              props.tradeList,
              props.chatMap
            )
          }
        >
          <FontAwesomeIcon icon={faTrashAlt} color="white" />
        </Icon>
        <Title>
          <Text type="title" bold>
            {props.tradeItem.paymentType}
          </Text>
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
      <ChatContainer>
        {props.tradeChat.map((ele, index) => {
          return (
            <ChatCell
              key={index}
              isUser={ele.isUser}
              time={moment(ele.timestamp).format('hh:mm:ss a')}
            >
              {ele.message}
            </ChatCell>
          );
        })}
        <ChatEndRef ref={messagesEndRef} />
      </ChatContainer>
      <SendMsgBox>
        <Input
          append
          text="SEND"
          onClick={() => {
            props.sendMsg(
              props.tradeItem.tradeId,
              input,
              new Date().getTime(),
              true,
              props.chatMap
            );
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
          }}
          onChange={e => {
            setInput(e.target.value);
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
  chatMap: Map<string, Array<IChatItem>>;
}

interface DispatchProps {
  deleteTradeItem: (
    tradeId: string,
    tradeList: Array<ITradeItem>,
    chatMap: Map<string, Array<IChatItem>>
  ) => {
    type: string;
    payload_list: Array<ITradeItem>;
    payload_map: Map<string, Array<IChatItem>>;
  };
  sendMsg: (
    tradeId: string,
    message: string,
    timestamp: number,
    isUser: boolean,
    chatMap: Map<string, Array<IChatItem>>
  ) => {
    type: string;
    payload_map: Map<string, Array<IChatItem>>;
    payload_list: Array<IChatItem>;
  };
}

const mapStateToProps = state => ({
  tradeItem: state.tradeItem,
  tradeList: state.tradeList,
  tradeChat: state.tradeChat,
  isBuyer: state.isBuyer,
  chatMap: state.chatMap
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  deleteTradeItem: (
    tradeId: string,
    tradeList: Array<ITradeItem>,
    chatMap: Map<string, Array<IChatItem>>
  ) => dispatch(deleteTradeItem(tradeId, tradeList, chatMap)),
  sendMsg: (
    tradeId: string,
    message: string,
    timestamp: number,
    isUser: boolean,
    chatMap: Map<string, Array<IChatItem>>
  ) => dispatch(sendMsg(tradeId, message, timestamp, isUser, chatMap))
});

export default connect(mapStateToProps, mapDispatchToProps)(TradeChat);
