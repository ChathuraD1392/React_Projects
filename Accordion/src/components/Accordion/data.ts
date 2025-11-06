

const data = [
    {
        id: 1,
        question: "What is React and why is it used?",
        answer:"React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the UI when data changes using a virtual DOM.It’s mainly used because it makes UI updates fast, maintains predictable state management, and improves developer productivity."

    },
    {
        id: 2 ,
        question: "What are React Hooks?",
        answer: "Hooks are special functions that let you use React features (like state and lifecycle methods) inside functional components."
    },
     {
        id: 3,
        question: "What is the purpose of the key prop in React lists?",
        answer: "The key prop helps React identify which items have changed, been added, or removed when rendering lists.It improves performance by allowing React to reuse elements instead of re-rendering everything.Each key should be unique among siblings (usually use an id)."
    },
     {
        id: 4,
        question: "What is React Context and when should it be used?",
        answer: "eact Context is a way to share data across multiple components without having to pass props manually through every level of the component tree. It’s useful for global data that many components need to access, such as user authentication, themes, or language settings. You create a context using createContext(), provide it with a Provider component, and consume it in child components using useContext(). However, context should be used carefully—if the shared data changes frequently, it can cause unnecessary re-renders of many components."
    },
     {
        id: 5,
        question: "What is React Router and how does it work?",
        answer: "React Router is a popular library used for adding client-side routing to React applications. It enables navigation between pages without reloading the entire page, giving a smooth single-page app experience. It works by matching the current URL path with defined route components and rendering the corresponding page or component."
    },
]

export default data;