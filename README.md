# Galarm

This repository contains the **backend** for a group alarm application. The React Native client should live in a separate repository.

## Backend

The `backend` folder hosts a Node.js + Express server connected to MongoDB. It supports:
- user signup
- group creation and invitation flows
- adding alarms to groups

### Running the backend
```bash
cd backend
npm install
MONGODB_URI="mongodb://localhost:27017/galarm" npm start
```

Adjust `MONGODB_URI` to point to your MongoDB instance.
