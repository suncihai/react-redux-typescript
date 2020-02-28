import React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { increment, decrement } from '../actions/counter'
import { State } from '../reducers'
import styled from 'styled-components';

const Wrapper = styled.div`
   background: green;
`

const Counter = (props: RouteComponentProps<any> & StateProps & DispatchProps) => (
  <Wrapper>
    Counter: {props.count}
    <button onClick={props.increment}>+</button>
    <button onClick={props.decrement}>-</button>
  </Wrapper>
)

interface StateProps {
  count: number
}

interface DispatchProps {
  increment: () => void
  decrement: () => void
}

const mapStateToProps = (state: State) => ({
  count: state.count,
})

const mapDispatchToProps = (dispatch: Dispatch<State>) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})

export default connect<StateProps, DispatchProps, RouteComponentProps<any>>(mapStateToProps, mapDispatchToProps)(Counter)
