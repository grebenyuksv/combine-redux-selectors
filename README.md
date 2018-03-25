# combine-redux-selectors

## Motivation (Redux Selector Asymmetry)

If you're here, you probably already know why. Redux asymmetry is exhaustively desribed is [this article](http://www.datchley.name/scoped-selectors-for-redux-modules/). 

What this small utility makes your selectors accept your global state: `selectors.getTodos(state)`. They know themselves where the corresponding reducer is mounted. As a result, passing them down to [reselect](https://github.com/reactjs/reselect) is trivial.

Just call `combineSelectors` near `combineReducers`:

```javascript
import { combineReducers } from 'redux';
import { combineSelectors } from 'combine-redux-selectors';
import counter, { selectors as fromCounter } from "./reducers/counter";

export const reducer = combineReducers({
    counter
});

export const selectors = combineSelectors({
    counter: fromCounter
});
```

And use the selectors in `mapStateToProps`:

```javascript
import { selectors } from "store";

const mapStateToProps = state => ({
    counter: selectors.getCounter(state)
});
```

No changes to the way you write reducers:

```javascript
export default (state = 0, { type }) => {
    switch (type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
};

export const selectors = {
    getCounter: counter => counter
};
```

Parameters are of course [passed through](https://github.com/grebenyuksv/combine-redux-selectors/blob/master/src/index.test.js#L39), `selectors.getValue(state, param1, param2)` will just work.

This has beautifully for me at two different companies, now I've just decided to outsource it.

## Installation

```npm i combine-redux-selectors -D```