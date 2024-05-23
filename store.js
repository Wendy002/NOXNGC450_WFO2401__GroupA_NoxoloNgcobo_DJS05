
// initialise factory function createStore()
export const createStore = ()=>{
    const state= {count: 0};
    const subscribers = [];
    
    const getState = () => state;    // Returns the current state

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

    const subscribe =(callback) =>{      // // Function to subscribe to state changes
        subscribers.push(callback);      //Accepts a function that gets called whenever the state changes. 
                               
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