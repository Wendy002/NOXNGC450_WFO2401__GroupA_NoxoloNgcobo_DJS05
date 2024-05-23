
/**
 * Creates a store with a count property and methods to dispatch actions and subscribe to state changes.
 * @returns {object} An object with methods to interact with the store.
 */
export const createStore = ()=>{
    const state= {count: 0};
    const subscribers = [];
    

     /**
      * Returns the current state of the store.
      * @returns {object} The current state.
      */

    const getState = () => state;    
    

    /**
     * Dispatches an action to the store.
     * @param {string} action The action to dispatch.
     */

    const dispatch = (action) =>{

        switch(action){
            case 'ADD':
                state.count += 1;           // Increment the count when the action type is 'ADD'
                break;
            case 'SUBTRACT':               // Decrement the count when the action type is 'SUBTRACT'
                state.count -= 1;
                break;
            case 'RESET':
                state.count = 0;         // Reset the count to 0
                break;
            default:
                throw new Error('Wrong selection/type');            // Log an error message           

        }
        // Notify all subscribed functions of the state change
        notifySubscribers();

    };
    
    /**
     * Subscribes to state changes.
     * @param {function} callback The callback to notify when the state changes.
     */
    const subscribe =(callback) =>{      
        subscribers.push(callback);      
                               
    };

    const notifySubscribers = ()=>{
        subscribers.forEach(callback => callback(getState()));
    };

    return {
        getState,
        dispatch,           // return methods
        subscribe
    };

};