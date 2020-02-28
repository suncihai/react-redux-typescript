import styled from 'styled-components';
import * as React from 'react';
import _ from 'lodash';
import { bitGray, darkGray, lightGray, green } from '../theme';

interface IText {
  children: any;
  type?: string;
  weight?: string;
  mr?: string;
  mb?: string;
}

const Wrapper = styled.p`
  margin: 0;
  margin-right: ${props => props.mr};
  margin-bottom: ${props => props.mb};
  white-space: nowrap;
  &.text {
    font-size: 14px;
    color: ${darkGray};
    &.bold {
      font-weight: bold;
    }
  }
  &.sub-text {
    font-size: 12px;
    color: ${lightGray};
    &.bold {
      font-weight: bold;
    }
  }
  &.sub-dark {
    font-size: 12px;
    color: ${darkGray};
    &.bold {
      font-weight: bold;
    }
  }
  &.green-text {
    font-size: 12px;
    color: ${green};
    &.bold {
      font-weight: bold;
    }
  }
  &.btn-text {
    font-size: 14px;
    color: ${bitGray};
    &.bold {
      font-weight: bold;
    }
  }
`;

export const Text = ({
  children,
  type = 'text',
  weight = 'normal',
  mr,
  mb
}: IText) => {
  return (
    <Wrapper mb={mb} mr={mr} className={_.compact([type, weight]).join(' ')}>
      {children}
    </Wrapper>
  );
};
