import {createStore } from "./store.js";

/** 
 * @callback Action
 * @param {State}
 * @returns {State}
*/

/**
 * @callback Dispatch
 * @param {Action}
*/

/**
 * @typedef {object} Store
 * @prop {Dispatch} dispatch
 * @prop {Subscribe} subscribe
 */

const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const resetBtn = document.getElementById('reset');


const store = createStore(); // create create store obj

store.subscribe(state => console.log('Changed state: ', state)); // changes state of count everytime dispatch is called

//check if document is open
if(!document.hidden){

    console.log('Initial state: ', store.getState());   // Output: { count: 0 }
    addBtn.addEventListener('click', () =>{
        store.dispatch('ADD');
    // Changed state: { count: 1 }
    });

    subtractBtn.addEventListener('click', () =>{
        store.dispatch('SUBTRACT');
    // Changed state: { count: 1 }
    });

    resetBtn.addEventListener('click', () =>{
        store.dispatch('RESET');
    // Changed state: { count: 1 }
    });
    
}

