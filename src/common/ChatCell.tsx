import styled from 'styled-components';
import * as React from 'react';
import { Text } from '../common/Text';
import { Avatar } from '../common/Avatar';
import { tinyGray, lightBlue } from '../theme';
import avatar_user from '../imgs/avatar_user.png';
import avatar_buyer from '../imgs/avatar_buyer.png';
import avatar_seller from '../imgs/avatar_seller.png';

interface IChatCell {
  children: any;
  isUser: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.isUser ? 'flex-end' : 'flex-start')};
  padding: 20px;
`;

const Flex = styled.div`
  display: flex;
`;

const TextBg = styled.div`
  padding: 12px;
  border-radius: 4px;
  background: ${props => (props.isUser ? lightBlue : 'white')};
  order: ${props => (props.isUser ? -1 : 1)};
  margin-left: ${props => (props.isUser ? 0 : '15px')};
  margin-right: ${props => (props.isUser ? '15px' : 0)};
`;

export const ChatCell = ({ children, isUser }: IChatCell) => {
  return (
    <Wrapper isUser={isUser}>
      <Flex>
        <TextBg isUser={isUser}>
          <Text type={isUser ? 'white-text' : 'text'} maxwidth="400px">
            {children}
          </Text>
        </TextBg>
        <Avatar src={isUser ? avatar_user : avatar_buyer} />
      </Flex>
    </Wrapper>
  );
};
