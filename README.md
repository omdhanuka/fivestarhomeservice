# Fivestar Electrical Repair Website

A modern, responsive electrical appliance repair website built with Vite + React and Firebase.

## 🚀 Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Firebase
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable **Authentication** (Email/Password)
4. Enable **Storage**
5. Copy your Firebase config and paste it in `src/firebase.js`

### 3. Update Business Information
Open `src/config.js` and update all values with your actual business information:
- Business name, contact details
- Services list
- Content for each section
- Brand colors

### 4. Run Development Server
```bash
npm run dev
```

### 5. Create Admin User
In Firebase Console:
1. Go to Authentication
2. Add a new user with email/password
3. Use these credentials to login at `/admin`

### 6. Build for Production
```bash
npm run build
```

## 📁 Project Structure
