import React from "react";
import { connect } from "react-redux";
import { selectors } from "../store";

const Counter = ({ counter, increment, decrement }) => (
    <div>
        <div>Counter: {counter}</div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
);

const mapStateToProps = state => ({
    counter: selectors.getCounter(state)
});

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" })
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
