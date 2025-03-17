# Lost and Found Web App

## Overview

The **Lost and Found Web App** is a full-stack application designed to help users report lost and found items, search for missing belongings, and contact item owners.

## Features

- **User Authentication** (Sign up, Login, JWT-based authentication)
- **Post Lost & Found Items** (With images and details)
- **Search & Filter Items** (Category, location, date, etc.)
- **Contact Owners** (Messaging system or contact info)
- **Admin Moderation Panel** (Optional feature for managing posts)

## Tech Stack

### Frontend

- React.js
- Tailwind CSS
- Axios (for API requests)

### Backend

- Node.js
- Express.js
- MongoDB (Mongoose ORM)
- JWT (Authentication)
- Cloudinary/Multer (For image uploads)

### Deployment

- Frontend: Vercel / Netlify
- Backend: Render / Heroku
- Database: MongoDB Atlas

## Installation Guide

### Prerequisites

Ensure you have the following installed:

- Node.js
- MongoDB (Local or Atlas connection)
- Git

### Backend Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/lost-and-found.git
   cd lost-and-found/backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   CLOUDINARY_API_KEY=your_api_key (if using Cloudinary)
   ```
4. Run the server:
   ```sh
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend folder:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm start
   ```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login

### Items

- `POST /api/items` - Add a new lost/found item
- `GET /api/items` - Fetch all items
- `GET /api/items/:id` - Fetch a specific item
- `PUT /api/items/:id` - Update item details
- `DELETE /api/items/:id` - Delete an item

## Deployment

1. **Frontend Deployment**
   - Deploy on Vercel/Netlify
   - Set environment variables
2. **Backend Deployment**
   - Deploy on Render/Heroku
   - Use MongoDB Atlas for database
   - Configure CORS & JWT secret

## Future Enhancements

- Email notifications for matched items
- Geolocation-based search
- Chat feature for direct communication

## License

This project is open-source under the MIT License.
