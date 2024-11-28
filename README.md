# React Basics

## What is React?
React is a **JavaScript library** for building **user interfaces**. It allows developers to create reusable UI components and manage the state of applications efficiently. React is developed and maintained by Facebook.

---

## Key Features
- **Component-Based**: Build encapsulated components that manage their own state.
- **Declarative**: Design views for each state, and React will update and render components efficiently.
- **Virtual DOM**: React uses a virtual DOM to improve app performance by minimizing direct manipulation of the actual DOM.
- **Unidirectional Data Flow**: Ensures predictable state management.


## Core Concepts

### 1. JSX
JSX is a syntax extension for JavaScript that allows writing HTML-like code inside JavaScript.

```jsx
const element = <h1>Hello, React!</h1>;
```

### 2. Components
Components are the building blocks of a React application. They can be **functional** or **class-based**.

#### Functional Component
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

#### Class Component
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### 3. Props
Props (short for "properties") are used to pass data from one component to another.

```jsx
function Greeting(props) {
  return <h1>Welcome, {props.name}!</h1>;
}

<Greeting name="Saleh" />;
```

### 4. State
State is a local data storage that is managed within the component.

#### Using State in Class Components
```jsx
class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

#### Using State in Functional Components with Hooks
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### 5. Events
React handles events using camelCase syntax.

```jsx
function ClickButton() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

### 6. Conditional Rendering
Render components conditionally based on some logic.

```jsx
function UserGreeting({ isLoggedIn }) {
  return isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Log In</h1>;
}
```

### 7. Lists and Keys
Render lists of elements using `map()` and unique keys.

```jsx
function NameList({ names }) {
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}
```

### 8. Lifecycle Methods (Class Components)
Lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` handle specific moments in a component's lifecycle.

```jsx
class LifecycleDemo extends React.Component {
  componentDidMount() {
    console.log('Component mounted');
  }

  componentWillUnmount() {
    console.log('Component unmounted');
  }

  render() {
    return <h1>Lifecycle Methods</h1>;
  }
}
```

---

## Hooks
Hooks are functions introduced in React 16.8 to manage state and side effects in functional components.

### Common Hooks
1. **useState**: For managing state.
2. **useEffect**: For side effects like fetching data.
3. **useContext**: For accessing context values.
4. **useReducer**: For more complex state management.

#### Example: useEffect
```jsx
import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <p>Seconds Elapsed: {seconds}</p>;
}
```

---

## Installation and Setup
1. Install Node.js and npm/yarn.
2. Create a new React app using `create-react-app`:
   ```bash
   npx create-react-app my-app
   cd my-app
   npm start
   ```

---

## Folder Structure
```
my-app/
├── src/
│   ├── components/  // Reusable components
│   ├── App.js       // Root component
│   ├── index.js     // Entry point
├── public/          // Static assets
├── package.json     // App configuration
```

---

## Useful Resources
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [React Tutorial](https://reactjs.org/tutorial/tutorial.html)
- [React Cheatsheet](https://reactcheatsheet.com/)

---

Happy Coding! 🚀
```
