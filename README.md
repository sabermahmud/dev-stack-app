# 🧱 Dev Stack Builder

A modern and responsive **Dev Stack Builder** built with React, TypeScript, and Tailwind CSS.
It allows developers to explore different technologies and create their own personalized technology stack.

## 🚀 Live Demo

[Live Site](#)

## 📦 GitHub Repository

[GitHub Repository](#)

---

## ✨ Features

* 🔎 **Explore Technologies** — Browse frontend, backend, database, language, styling, and DevOps technologies with useful information.
* 🧰 **Build Your Stack** — Add technologies to your personal stack and remove individual technologies or clear the entire stack.
* 🔔 **Toast Notifications** — Get instant feedback when technologies are added or removed from your stack.

---

## 🛠️ Technologies Used

* React.js
* TypeScript
* Tailwind CSS
* React-Toastify
* React Loader Spinner
* JSON
* Vite
* React Icons

---

## 📋 Project Overview

Dev Stack Builder is a React-based practice project where users can explore different development technologies and build a custom technology stack.

The technology information is stored in a separate JSON file and loaded dynamically into the application. Each technology card displays its logo, name, description, category, difficulty level, rating, and badge.

Users can add technologies to their stack and manage the selected technologies from the **Your Stack** section.

---

## 🧩 Main Features

### Technology Explorer

The application loads technology data from a local JSON file and displays the technologies in a responsive card layout.

Each technology card contains:

* Technology logo
* Technology name
* Description
* Category
* Difficulty level
* Rating
* Badge
* Add to Stack button

### Your Stack

The Your Stack section displays all selected technologies.

Each selected technology contains:

* Technology logo
* Name
* Remove button

Users can also use **Remove All** to clear their complete stack.

### Responsive Design

The application is designed to work across:

* 📱 Mobile
* 📲 Tablet
* 💻 Desktop

The technology cards automatically adjust their layout based on screen size.

---

# ⚛️ React Questions

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript.

It makes React components easier to read and helps us describe what the UI should look like.

---

## 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.

**State** is data managed inside a component that can change over time and cause the component to re-render.

For example, `addedToStack` is state in this project, while `technology` is passed to `TechnologyCard` as a prop.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` allows a React component to store and update data.

In this project, it is mainly used in `App` to store the selected technologies:

```tsx
const [addedToStack, setAddedToStack] = useState<TechDataType[]>([]);
```

It is also used to store the technology data promise before rendering the technology section.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in React, such as fetching data, working with APIs, or interacting with external systems.

In this project, the JSON data is loaded using `fetch()` and a Promise with React's `use()` API, so `useEffect` was not necessary for loading the technology data.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list.

A unique key helps React understand which items were added, removed, or changed and update the UI efficiently.

For example:

```tsx
{techData.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
```

Here, `technology.id` is used as the unique key.

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI based on a condition.

I used it in the **Your Stack** section.

When there are no selected technologies, the application shows:

```tsx
Your stack is empty.
```

Otherwise, it displays the selected technology cards.

```tsx
{addedToStack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <div>
    {addedToStack.map((stack) => (
      <YourStackCard
        key={stack.id}
        stack={stack}
        addedToStack={addedToStack}
        setAddedToStack={setAddedToStack}
      />
    ))}
  </div>
)}
```

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through **props**.

In this project, `App` passes `addedToStack` and `setAddedToStack` to child components.

```tsx
<YourStack
  addedToStack={addedToStack}
  setAddedToStack={setAddedToStack}
/>
```

The child can then use the setter function to update the parent's state.

This allows the child component to send changes back to the parent.

---

# 📁 Project Structure

```text
src/
├── Components/
│   ├── Footer/
│   │   └── Footer.tsx
│   │
│   ├── Hero/
│   │   └── Hero.tsx
│   │
│   ├── Navbar/
│   │   └── Navbar.tsx
│   │
│   ├── Technology/
│   │   ├── TechnologySection.tsx
│   │   └── TechnologyCard.tsx
│   │
│   └── YourStack/
│       ├── YourStack.tsx
│       └── YourStackCard.tsx
│
├── Type/
│   └── Type.ts
│
├── App.tsx
└── main.tsx

public/
└── technology.json
```

---

# 🎯 Learning Goals

This project helped me practice:

* React component architecture
* TypeScript interfaces and props
* React state management
* Passing state and setter functions through props
* Rendering data from JSON
* Array methods such as `map()`, `filter()`, and `some()`
* Conditional rendering
* React `Suspense` and `use()`
* Responsive UI with Tailwind CSS
* Toast notifications
* Building reusable components

---

## 👨‍💻 Built With

**React + TypeScript + Tailwind CSS**

Built as a React practice project focused on learning by building and improving real-world frontend development skills.

---

## 📄 License

This project was created for educational and practice purposes.
