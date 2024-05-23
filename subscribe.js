
export const subscribers = [];                //subscribers array
export const subscribe = (callback) =>{      // Function to subscribe to state changes
    subscribers.push(callback);             //Accepts a function that gets called whenever the state changes. 
                           
};

export const notifySubscribers = ()=>{                    // Function to notify all subscribed functions of the state change
    subscribers.forEach(callback => callback(getState()));    // Add the callback function to the subscribers array
};



