import { notifySubscribers } from "./subscribe.js";

export const state= {count: 0};   
export const dispatch = (action) =>{

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