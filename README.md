# 20 React Challenges

This is a log of my journey in becoming more proficient at using the React library and other technologies by building 20 React challenges shared by WebDevCody.

## 🚀 Core Technologies

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" width="40" />
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" width="40" />   
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" width="40" />
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="Vite" width="40" height="40"/>
  &nbsp;
  <img src="https://tanstack.com/assets/splash-dark-8nwlc0Nt.png" alt="TanStack Start" width="40" height="40"/>
</p>

- React
- TypeScript
- Tailwind CSS
- ViteJS
- TanStack Start
- TanStack Query (React Query)


## Challenges

### Rock Paper Scissors 🪨 📄 ✂️ 

In this project, I focused on creating a simple rock paper scissors game, with 2 main screens:

1. Weapon Selection
2. Result

This was my first project using Tailwind CSS and Typescript, and served as an introduction to the syntax of these tools.

Takeaways:
- TypeScript
  - State type declaration
  - Creating types
  - Usage of `as const` to specify types
- Tailwind
  - Basic syntax

### Stopwatch ⏱️

In this project, I created a browser stopwatch which allows the user to start, pause and reset the stopwatch.

Takeaways:
- React
  - Usage of `useRef` for tracking variables without triggering a rerender
  - Using `(prev) => prev + 1` to increment states
  - Conditional rendering with `&&`
- TypeScript
  - Using type inference (Avoid redundant type declarations)
- Tailwind
  - Understood utility classes for styles like width and height

### Dice 🎲

Created a dice site that allows the user to roll a die.

Takeaways:

Relatively simple project, familiarised with syntax of involved technologies.

### Traffic Light 🚦

Created a traffic light display that switched between red, green and orange at set intervals.

Takeaways:
- React
  - Usage of `useEffect` to avoid side effects and state updates during rendering
- General
  - Using `const` and full caps for constant variables for readability and avoid accidental reassignment
  - Using conditional reassignment within `className` for cleaner code

### Quote Generator 💬

Created a quote generator site that displays a quote when prompted.

Takeaways:
- TypeScript/ JavaScript
  - Recap of async JS concepts
  - Recap of promise chaining syntax
  - Recap of usage of `async` and `await` syntax
  - Usage of optional chaining (`quote?.sentence`) to avoid errors with undefined variables
- Tailwind
  - Using variant modifiers (`hover:`) to add styles
- TanStack Query (React Query)
  - Understood the usage of the query client and `useQuery()` as an industry standard for fetching from APIs in react

### Gradient 🌈

Created a gradient generator that displays different gradients based on set colours and direction.

Takeaways:
- React
  - Learnt how to bind states to input values using `name` attribute
- TypeScript
  - Usage of `ChangeEvent` type annotation when dealing with form inputs
- Tailwind
  - Understood that Tailwind generates CSS at build, cannot update styles dynamically (Use inline styling to dynamically change styles with React and CSS)
- CSS
  - Learnt about gradient generation, usage of `linear-gradient()`

## Credits
Thanks to WebDevCody for designing and sharing these projects.