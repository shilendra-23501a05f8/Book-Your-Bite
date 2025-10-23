Converted MERN Restaurant Reservation (CRA frontend + backend)

Structure:
- backend/  (original Express server)
- frontend/ (converted to Create React App format)

How to run:
1. Install dependencies for backend:
   cd backend
   npm install

2. Install dependencies for frontend:
   cd ../frontend
   npm install

3. Run backend (in backend folder):
   npm start   # or node server.js depending on package.json

4. Run frontend (in frontend folder):
   npm start

Note: I converted the Vite frontend to a CRA-compatible structure. You may need to:
- Install react-scripts (it will be installed when you run npm install in frontend).
- Check environment variables: Vite's import.meta.env usage (if any) was replaced manually where found.

If you want, I can further:
- Create a root package.json to run both with one command
- Adjust env variables
