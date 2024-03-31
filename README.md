Hooks :
1. useState
2. useEffect
3. useContext 
4. useRef
5. 
6. 

Definitions :
1. useState:
useState hook allows functional components to manage state. It returns a stateful value and a function to update it. 
This hook is commonly used for managing component state.

2. useEffect:
useEffect hook allows functional components to perform side effects. It runs after every render of the component 
and can perform tasks like data fetching, subscriptions, or manually changing the DOM.

3. useContext:
useContext hook allows functional components to consume values from React context. It accepts a context object 
(created using React.createContext) and returns the current context value for that context.

4. useRef:
useRef hook returns a mutable ref object. It is commonly used to persist values across renders without causing re-renders,
 or to access the underlying DOM nodes of components.

5. useMemo:
useMemo hook returns a memoized value. It is used to optimize performance by memoizing expensive computations,
 preventing unnecessary re-computation of values between renders.

6. useCallback:
useCallback hook returns a memoized callback function. It is used to optimize performance by memoizing functions, 
preventing unnecessary re-renders of child components that depend on those functions.

7. useReducer:
useReducer hook is an alternative to useState for managing complex state logic. It accepts a reducer function and 
an initial state, and returns the current state and a dispatch function to update it.

8. useImperativeHandle:
useImperativeHandle hook customizes the instance value that is exposed by a ref object. It is typically used in conjunction 
with forwardRef to expose specific functions or properties from child components to parent components.

9. useLayoutEffect:
useLayoutEffect hook is similar to useEffect, but it runs synchronously after all DOM mutations. 
It is useful for performing tasks that require access to the DOM immediately after the component is updated.

10. useDebugValue:
useDebugValue hook is used to display additional debugging information in React DevTools for custom hooks. 
It accepts a formatting function and a value, allowing developers to inspect custom hook values in React DevTools.