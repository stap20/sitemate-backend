Backend README (backend/README.md)
markdown
Copy code
# Issue Tracker Backend

## Overview

This is a simple REST API server for managing issues. It supports Create, Read, Update, and Delete (CRUD) operations.

## Technologies Used

- Node.js
- Express
- TypeScript
- Custom Logger for logging

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
Navigate to the backend directory:

bash
Copy code
cd backend
Install dependencies:

bash
Copy code
npm install
Start the server:

bash
Copy code
npm run start
By default, the server runs on http://localhost:5000.

API Endpoints
Create Issue

POST /issues
Request Body: { "title": "Issue Title", "description": "Issue Description" }
Response: Created issue object
Read All Issues

GET /issues
Response: Array of issue objects
Update Issue

PUT /issues/:id
Request Body: { "title": "Updated Title", "description": "Updated Description" }
Response: Updated issue object
Delete Issue

DELETE /issues/:id
Response: Success message
Logging
Logs are printed to the console and can be found in logs/app.log.