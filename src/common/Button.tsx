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
  disabled?: boolean;
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
  &.submit {
    background: ${green};
  }
  &.disabled {
    background: ${darkGray};
    cursor: not-allowed;
  }
`;

export const Button = ({
  children,
  type = 'submit',
  mr,
  mb,
  disabled = false,
  onClick
}: IButton) => {
  return (
    <Wrapper
      disabled={disabled}
      mb={mb}
      mr={mr}
      className={_.compact([type, disabled && 'disabled']).join(' ')}
      onClick={onClick}
    >
      <Text type="btn-text">{children}</Text>
    </Wrapper>
  );
};
