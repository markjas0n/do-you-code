# CodeSpace_ Project

Overview

CodeSpace_ 

## Table of Contents

- Features
- Installation
- Usage
- API Endpoints
- Technologies Used
- License
- Acknowledgments
- Features

## User Authentication: 
- Secure user login and signup with session management.
- Post Creation: Users can create new posts with titles, descriptions, and project links.
- Tag Management: Users can associate tags with posts and search for posts by tag.
- Search Functionality: Users can search for posts by username or tag name using two distinct search bars.
- Responsive Design: The application is fully responsive, providing a seamless experience across devices.
## Installation

## Prerequisites
- Node.js (v14.17.0 or higher)
- PostgreSQL (v12.0 or higher)
- Git
## Steps
1. Clone the Repository
    ```bash 
    git clone https://github.com/your-username/codespace_.git
    cd codespace_
2. Install Dependencies
    ```bash
    npm i 
3. Set Up Environment Variables
    - Create a .env file in the root directory and add your PostgreSQL credentials:
    ```bash
    DB_NAME=your_database_name
    DB_USER=your_database_username
    DB_PASSWORD=your_database_password
    DB_URL=your_database_url # Optional for deployment
    SECRET=your_session_secret
4. Start the Application
    ```bash
    psql -U your_database_username -d your_database_name -f db/schema.sql
    npm run seed
The application will be available at http://localhost:3001.
