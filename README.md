# Sweet Shop Management System

A full-stack Sweet Shop Management System built as part of a technical assignment.  
The application allows users to register, login, view available sweets, search sweets, add new sweets, and purchase sweets while managing inventory.

---

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Jest & Supertest (for testing)

### Frontend
- React.js
- React Router DOM
- Fetch API

---

## Features

### Authentication
- User Registration
- User Login (JWT based)

### Sweets Management
- Add new sweets
- View all available sweets
- Search sweets by name or category
- Purchase sweets (quantity decreases automatically)
- Purchase button disabled when stock is zero

### Inventory
- Automatic stock update on purchase

---

## API Endpoints

### Auth
- `POST /api/auth/register` – Register a user
- `POST /api/auth/login` – Login user

### Sweets
- `POST /api/sweets` – Add a new sweet
- `GET /api/sweets` – Get all sweets
- `GET /api/sweets/search?q=` – Search sweets
- `POST /api/sweets/:id/purchase` – Purchase a sweet

---

## How to Run the Project

### Backend
```bash
cd backend
npm install
npm start
