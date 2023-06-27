# nodejs-mongodb-auth-api
A secure authentication API built with Node.js and MongoDB for user authentication and authorization. Implements user registration, login, and protected routes using JSON Web Tokens (JWT) for authentication and MongoDB as the database. Includes password hashing using bcrypt for enhanced security.

```markdown
# Project Name

Short project description

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/shaffaprawira/nodejs-mongodb-auth-api.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project's root directory with the following environment variables:

   ```
   API_PORT=your-port
   MONGO_URI=mongodb+srv://username:password@your-cluster.mongodb.net/your-database?retryWrites=true&w=majority
   TOKEN_KEY=your-secret-key
   ```

   - `API_PORT`: The port number on which the API will run (e.g., 3000).
   - `MONGO_URI`: The connection URI for your MongoDB database. Replace `username`, `password`, `your-cluster`, and `your-database` with your actual MongoDB credentials and database information.
   - `TOKEN_KEY`: A secret key used for token generation and validation. You can choose any random string as your secret key.

   Note: Ensure that the `.env` file is not committed to version control and keep your actual sensitive information private.

4. Start the application:

   ```bash
   npm run dev
   ```
