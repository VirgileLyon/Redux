import React, { Component } from "react";
import { connect } from "react-redux";

const addAction = {
    type: 'ADD',
};

const removeAction = {
    type: 'REMOVE',
};

const addAction10 = {
    type: 'ADD10',
};

const removeAction10 = {
    type: 'REMOVE10',
};

const resetAction = {
    type: 'RESET',
};

class CounterContainer extends Component {
    render() {
        const { counter, dispatch } = this.props;

        return (
            <div>
                <p>{counter}</p>
                <button onClick={() => dispatch(addAction)}>
                    add
     </button>
                <button onClick={() => dispatch(removeAction)}>
                    remove
     </button>

                <button onClick={() => dispatch(removeAction10)}>
                    remove10
     </button>

                <button onClick={() => dispatch(addAction10)}>
                    add10
     </button>

                <button onClick={() => dispatch(resetAction)}>
                    reset
     </button>
            </div>);
    }
}
const mapStateToProps = state => ({
    counter: state
});

const counterContainer = connect(mapStateToProps)(CounterContainer)

export default counterContainer;