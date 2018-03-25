import { createStore, combineReducers } from "redux";
import combineSelectors from "combine-redux-selectors";
import counter, { selectors as fromCounter } from "./reducers/counter";

const reducer = combineReducers({
    deeply: combineReducers({
        nested: combineReducers({
            counter
        })
    })
});

export const selectors = combineSelectors({
    deeply: combineSelectors({
        nested: combineSelectors({
            counter: fromCounter
        })
    })
});

export default createStore(reducer);
