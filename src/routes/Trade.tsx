import React from 'react';
import styled from 'styled-components';
import SubNavBar from '../components/SubNavBar';
import TradeList from '../components/TradeList';
import TradeInfo from '../components/TradeInfo';
import HelloChild from '../components/HelloChild';

const Wrapper = styled.div`
  width: 100%;
`;
const Row = styled.div`
  display: flex;
  height: 100%;
`;

const Trade = () => (
  <Wrapper>
    <SubNavBar />
    <Row>
      <TradeList />
      <TradeInfo />
    </Row>
  </Wrapper>
);

export default Trade;
