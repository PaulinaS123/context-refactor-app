# React Context Refactor App

## Overview

This project demonstrates how to refactor a React application from using **Prop Drilling** to using the **React Context API** with the `useContext` hook.

The application simulates a nested component structure where user information needs to be shared deeply across components.

Originally, the `user` object would need to be manually passed through multiple components:

```text
App → Dashboard → Sidebar → UserProfile
```

Using Context API, the user data is now centralized and can be accessed directly from deeply nested components without unnecessary props.

---

# Objectives

- Understand the problem of Prop Drilling
- Create and implement React Context
- Use the `useContext` hook
- Refactor components to remove unnecessary props
- Improve scalability and maintainability of React applications

---

# Technologies Used

- React
- Vite
- JavaScript
- CSS
- React Context API
- useContext Hook

---

# Project Structure

```text
context-refactor-app/
│
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   ├── Sidebar.jsx
│   │   └── UserProfile.jsx
│   │
│   ├── UserContext.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

# Before Refactor (Prop Drilling)

Before using Context API, the `user` object would need to pass through every component manually:

```text
App
 ↓ user prop
Dashboard
 ↓ user prop
Sidebar
 ↓ user prop
UserProfile
```

Problems with Prop Drilling:
- Harder to maintain
- Components receive props they do not use
- Difficult to scale larger applications
- Increased code complexity

---

# After Refactor (Context API)

Using Context API:

```text
UserProvider
 ↓
Dashboard
 ↓
Sidebar
 ↓
UserProfile
```

Now:
- Components no longer pass unnecessary props
- Shared state is centralized
- Deeply nested components access data directly using `useContext()`

---

# Context Implementation

## UserContext.jsx

The application creates a Context Provider using:

```jsx
createContext()
```

The provider stores shared user data:

```jsx
const [user] = useState({
  name: "Paulina",
  email: "paulina@example.com",
  themePreference: "dark",
});
```

The provider wraps the application:

```jsx
<UserContext.Provider value={{ user }}>
```

---

# useContext Implementation

Inside `UserProfile.jsx`, the application accesses the shared user data directly:

```jsx
const { user } = useContext(UserContext);
```

This removes the need to pass props through intermediate components.

---

# Features

- React Context API implementation
- Shared user state management
- Deeply nested component communication
- Clean component hierarchy
- Improved maintainability
- Styled responsive UI

---

# How to Run the Project

## 1. Clone the Repository

```bash
git clone https://github.com/PaulinaS123/context-refactor-app.git
```

---

## 2. Navigate Into the Project Folder

```bash
cd context-refactor-app
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Start the Development Server

```bash
npm run dev
```

---

## 5. Open in Browser

Open the local Vite server:

```text
http://localhost:5173
```

---

# UI Demonstration

The application displays:
- Dashboard
- Sidebar
- User Profile
- User name
- User email
- Theme preference

All data is retrieved using Context API rather than props.

---

# Test Cases

## Normal Test Cases

### Test Case 1 — User Information Displays Correctly

Expected:
- User name renders
- User email renders
- Theme preference renders

Result:
- Passed

---

### Test Case 2 — Nested Components Render Properly

Expected:
- Dashboard renders
- Sidebar renders
- UserProfile renders

Result:
- Passed

---

### Test Case 3 — Context Data Accessible Without Props

Expected:
- UserProfile accesses user data directly using `useContext`

Result:
- Passed

---

# Edge Test Cases

## Edge Case 1 — Missing User Object

Expected:
- Application does not crash
- Optional fallback UI appears

Example:

```jsx
if (!user) return <p>No user found.</p>;
```

Result:
- Passed

---

## Edge Case 2 — Empty User Fields

Expected:
- Application safely renders empty values

Result:
- Passed

---

## Edge Case 3 — Invalid Theme Preference

Expected:
- Application still renders correctly

Result:
- Passed

---

# Time Complexity

```text
O(1)
```

Accessing Context data using `useContext()` occurs in constant time.

---

# Space Complexity

```text
O(1)
```

Only minimal additional memory is used for shared state storage.

