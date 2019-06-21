1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
For immutability and not manipulating the current state, therefore preserving the history we have a great deal of methods that help us create an instance of both arrays and objects, some are:
Array --> map(), filter(), reduce(), concat(), [...arr1].
Object --> Object.assign({}, obj1), {...obj1}.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Those 3 represent the chore feature of a Redux application, the store represent the global state, and is considered the 'single source of truth, because it is the focal point from where state gets kept and dispatched to components, is the place where we store so to say Redux state, whereas actions and reducers play a great role in mutating and passing the global state, actions are objects that dispatch request for state changes to the reducers, reducers are function that base on the type of action dispatched perfom those changes to the state and return the newly updated state to all components that are connected to it and use it.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
The major difference that when using Component state this is passed down the tree commonly using props and to reach certain components down the tree this props gets also passed to components that take them for the sole purpose to pass them but not use them, this can be okay for small application with few components but daunting for large application with massive trees where props and state becomes difficult to manage, for this purpose Application state (Redux) comes to the rescue and by holding a global state makes it easy to pass the slices of state needed to the components that are using it, without the need to flow those chunks of state all the way down a tree to reach a far down component, this is great for large applications and makes state management very easy.

4.  What is middleware?
A middleware is a function that sits betweeen actions and reducers and is used to perform a certain task right before the mutation in state occurs.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
'redux-thunk' is great because it allow us to perfom asynchronous actions within 'action-creators' in this way we can perform request to the server/API and other asynchronous task that are not possible to achieve otherwise.

6.  Which `react-redux` method links up our `components` with our `redux store`?
To link the component to the redux store we use the connect method, this method becomes the default export and just like a HOC is a function that returns an enhanced component, this method as 2 sets of parenthesis the first connects the slices of redux state necessary for the component to the component itself, the second passes the action creators to the component which can then use them to perform certain actions resulting in a mutated global state, whereas the second set of parenthesis takes the component that we want to enhance. 
