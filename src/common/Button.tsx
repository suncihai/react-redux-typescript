import styled from 'styled-components';
import * as React from 'react';
import _ from 'lodash';
import { darkGray, lightGray, green } from '../theme';
import { Text } from './Text';

interface IButton {
  children: any;
  type?: string;
  mr?: string;
  mb?: string;
  onClick: () => void;
}

const Wrapper = styled.button`
  margin: 0;
  margin-right: ${props => props.mr};
  margin-bottom: ${props => props.mb};
  padding: 8px 25px;
  display: inline-block;
  border-radius: 25px;
  cursor: pointer;
  outline: none;
  &.primary {
    background: ${darkGray};
  }
  &.submit {
    background: ${green};
  }
`;

export const Button = ({
  children,
  type = 'primary',
  mr,
  mb,
  onClick
}: IButton) => {
  return (
    <Wrapper mb={mb} mr={mr} className={type} onClick={onClick}>
      <Text type="btn-text">{children}</Text>
    </Wrapper>
  );
};
