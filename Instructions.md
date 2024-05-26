# Instructions, challenges and reflections on redux-like store for tally app

## How to run your code.
- Press f12/ deve tools to view the website console, check the console for the different  output using the dispatch function
- Feel free to change the input values on the dispatch function to see different outputs

## A brief overview of my approach.

#### Function Name: createStore()
- **Purpose**: Creates a simple store for state management. <br/>
**Returned Object**:
 - getState: Returns the current state of the store (initially { count: 0 }).
 - dispatch: Accepts an action (e.g., 'ADD', 'SUBTRACT', 'RESET') and modifies the state accordingly.
 - subscribe: Allows functions to subscribe to state changes.<br/>
**Action Handling**:
 - 'ADD': Increments the count property by 1.
 - 'SUBTRACT': Decrements the count property by 1.
 - 'RESET': Sets the count property to 0.
 - Throws an error for unknown action types. <br/>
**State Initialization**:
 - state: Initially { count: 0 }.<br/>
**Subscribers**:
 - An array of callback functions.
 - Notifies subscribers when the state changes

## Challenges I faced and how I overcame them.
 - **Over encapsulation** (challenge)- code started confusing me and prouced lot of bugs.
 - **Created one file** (solution)- Created one file that hides infrmation about the store function and only create an object on the tally app and grab all the dependencies wiouth knowing how the code looks like.