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
 * @props {Update} update
 */



// initialise factory function createStore()
const createStore = ()=>{
    const state= {};
    const subscribers = [];
    
    const getState = () => state;
    
}