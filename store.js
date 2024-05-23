import { subscribers, subscribe} from "./subscribe.js";
import { state, dispatch } from "./dispatch.js";
 
// initialise factory function createStore()
export const createStore = ()=>{
    state;                // count = 0
    subscribers;          // empty array
    
    const getState = () => state;    // Returns the current state

    dispatch();    // Function to dispatch actions and update the state

    subscribe();     /// Function to subscribe to state changes

    return {
        getState,
        dispatch,           // return methods
        subscribe
    };

};