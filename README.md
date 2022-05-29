# React Router documentation - tutorial walk through

Notes from my work through of the React Router v6 documentation and tutorial mini project

## Key learning points / notes

### Index routes

- render in the parent routes outlet at the parent route path
- match when the parent route matches but no child routes match
- default child route for a parent route
- render if the user hasn't clicked one of the nav list items

### Active links using NavLink

- display the active link
- style using an arrow function and 'isActive' parameter to return an object
- can also apply to className

### Search params

- can read and manipulate the search params with useSearchParams
- works like React.useState() - stores and sets 'state' in the URL search params instead of in memory
