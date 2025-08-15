# project3-express-todoApp
# React Todo App with Node & Express

A simple **Todo application** built with **React** for the frontend and **Node.js + Express** for the backend. Users can add, view, and manage their todos. This project demonstrates a full-stack approach with a RESTful API.

---

## Features

- Add new todos with a **title** and **description**
- View all todos in a list
- Persistent backend with in-memory storage (or you can extend it to a database)
- React frontend with functional components and hooks
- RESTful API powered by Express

---

## Technologies Used

- **Frontend:** React, React Router DOM
- **Backend:** Node.js, Express
- **Data Storage:** In-memory array (can be swapped with a database)
- **Other Tools:** Fetch API for client-server communication

---

## Folder Structure

project/
├─ client/ # React frontend
│ ├─ src/
│ │ ├─ components/ # FormTodo, TodoData, NavComponent
│ │ ├─ pages/ # HomePage, TodosPage
│ │ └─ App.jsx
├─ server/ # Node + Express backend
│ └─ server.js # API routes for todos
├─ package.json
└─ README.md

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/todo-app.git
cd todo-app
```

### Install dependencies for frontend and backend

# In the root directory
```bash
npm install

cd client
npm install
```

### Running the App

#Start the frontend server:
```bash
cd client
npm start
```
#Start the backend server:
```bash
cd ..
npm start
```