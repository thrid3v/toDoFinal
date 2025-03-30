# Cute Todo App

A delightful and playful todo application with a cute aesthetic, featuring personal and shared tasks.

## Features

- Personal and shared task management
- Cute pastel sticky note design
- Animated interactions and effects
- Responsive layout
- User authentication
- Task sharing capabilities

## Project Structure

```
thridev/
├── public/
│   ├── css/
│   │   └── todo.css         # Main stylesheet with all styles
│   ├── js/
│   │   ├── auth.js          # Authentication logic
│   │   ├── todo.js          # Todo functionality
│   │   └── utils.js         # Utility functions
│   └── index.html           # Main HTML file
├── server/
│   ├── config/
│   │   └── db.js           # Database configuration
│   ├── routes/
│   │   ├── auth.js         # Authentication routes
│   │   └── todos.js        # Todo routes
│   ├── models/
│   │   ├── Todo.js         # Todo model
│   │   └── User.js         # User model
│   └── server.js           # Main server file
└── README.md               # Project documentation

```

## Color Scheme

The application uses a cute pastel color scheme:

- Background: Soft pink to light blue gradient
- Sticky Notes:
  - Pink: #FFE5E5
  - Blue: #E5F2FF
  - Magenta: #FFE5F9
  - Green: #E5FFE5
  - Peach: #FFE5CC
  - Mint: #E5FFF4

Personal Tasks:
  - Pink: #FFE5E5
  - Purple: #F9E5FF
  - Lavender: #E5E5FF
  - Sage: #E5FFE8
  - Coral: #FFE8E5
  - Cyan: #E5FFFF

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables
4. Start the server:
   ```bash
   npm start
   ```

## Dependencies

- Express.js
- MongoDB
- Node.js
- Google Fonts (Poppins and Quicksand)
