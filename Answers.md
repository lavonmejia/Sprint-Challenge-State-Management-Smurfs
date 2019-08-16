1. What problem does the context API help solve?
   Context API simplifies state management. Using Context API a "context" object can have data stored on it and can be retrieved in the necessary components, from the context object, not props.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   actions are the inputs that can change states for an app
   reducers tells the app how to respond to an action
   store is where the state is stored, it is stored in a single place instead of in pieces across an app

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   Component state is state that is stored at the component level, Application state is stored at the App level

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   redux-thunk is middleware that returns functions instead of actions

1. What is your favorite state management system you've learned and this sprint? Please explain why!
   Redux.Because it allows for global state management.
