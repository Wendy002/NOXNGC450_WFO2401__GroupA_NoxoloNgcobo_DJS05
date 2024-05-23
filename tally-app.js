/** 
 * @callback Action
 * @param {State}
 * @returns {State}
*/

/**
 * @callback Update
 * @param {Action}
*/

/**
 * @typedef {object} Store
 * @prop {Update} update
 * @prop {Subscribe} subscribe
 */



// initialise factory function createStore()
const createStore = ()=>{
    const state= {};
    const subscribers = [];
    
    const getState = () => state;    // Returns the current state

    const dispatch = (action) =>{

        switch(action.type){
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

    };

    const subscribe =(callback) =>{      // // Function to subscribe to state changes
        subscribers.push(callback);      //Accepts a function that gets called whenever the state changes. 
        console.log('Changed state: ', callback);                               //This function should log the new state to the console.
    }

    return {
        getState,
        dispatch,           // return methods
        subscribe
    };


}