# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook. The bug causes an infinite loop because the effect function is called repeatedly without specifying a dependency array. 

## Bug Description
The `useEffect` hook in `MyComponent` lacks a dependency array. This means the effect function is executed after every render, causing an infinite render loop and potentially crashing the application.

## Solution
The solution involves adding a dependency array to the `useEffect` hook. The dependency array should contain all values that the effect function depends on. In this case, it should contain the `count` variable. This ensures that the effect function only runs when the `count` variable changes.

## How to reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the infinite loop in the console and browser.

## How to fix
1. Replace `bug.js` with `bugSolution.js`
2. Observe the corrected behaviour in the console and browser.