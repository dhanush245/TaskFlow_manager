<div align="center">

# �� TaskFlow Manager

A modern, full-stack task management application built with Angular, Node.js, Express, and MongoDB.

[![Angular](https://img.shields.io/badge/Angular-17-red?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![Node.js](https://img.shields.io/badge/Node.js-18-green?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6-green?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-black?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

</div>

## ✨ Features

### 🔐 Authentication & Security
- ✅ **User Registration** with email verification
- ✅ **Google OAuth** integration
- ✅ **Email-based password reset**
- ✅ **JWT-based authentication**
- ✅ **Session management**
- ✅ **Role-based access control** (Admin/User)

### 📋 Task Management
- ✅ **Create, Read, Update, Delete** tasks
- ✅ **Task status tracking** (Todo, In Progress, Review, Done, Cancelled)
- ✅ **Priority levels** (Low, Medium, High, Urgent)
- ✅ **Progress tracking** with visual indicators
- ✅ **Due date management**
- ✅ **Task assignment** to team members
- ✅ **Comments and collaboration**
- ✅ **File attachments** support
- ✅ **Task archiving**

### 📊 Dashboard & Analytics
- ✅ **Real-time statistics**
- ✅ **Task completion rates**
- ✅ **Overdue task tracking**
- ✅ **Priority distribution**
- ✅ **Productivity insights**

### 🎨 User Experience
- ✅ **Responsive design**
- ✅ **Modern UI/UX**
- ✅ **Real-time updates**
- ✅ **Search and filtering**
- ✅ **Export functionality**
- ✅ **Dark/Light theme support**

## 🛠️ Tech Stack

### 🎨 Frontend
- **Angular 17** - Modern web framework
- **TypeScript** - Type-safe JavaScript
- **SCSS** - Advanced styling
- **Angular Material** - UI components
- **RxJS** - Reactive programming
- **Chart.js** - Data visualization

### ⚙️ Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Passport.js** - Authentication
- **JWT** - Token-based auth
- **Nodemailer** - Email service
- **bcryptjs** - Password hashing

### 🗄️ Database
- **MongoDB Compass** - Database management

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **MongoDB** (v6 or higher)
- **MongoDB Compass** (for database management)
- **Angular CLI** (v17 or higher)

## 🚀 Quick Start

### 1️⃣ Clone the Repository
```bash
git clone <repository-url>
cd TaskFlow-Manager
```

### 2️⃣ Backend Setup

#### 📁 Navigate to API directory
```bash
cd taskflow-api
```

#### 📦 Install dependencies
```bash
npm install
```

#### ⚙️ Configure Environment Variables
Create a `.env` file in the `taskflow-api` directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/taskflow_db

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CALLBACK_URL=http://localhost:3000/api/auth/google/callback

# Email Configuration (Gmail SMTP)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=TaskFlow Manager <your-email@gmail.com>

# Frontend URL
FRONTEND_URL=http://localhost:4200

# Session Secret
SESSION_SECRET=your-super-secret-session-key-change-this-in-production
```

#### 🗄️ Start MongoDB
Make sure MongoDB is running on your system:
```bash
# Windows
mongod

# macOS/Linux
sudo systemctl start mongod
```

#### 🚀 Start the Backend Server
```bash
npm run dev
```

✅ The API will be available at `http://localhost:3000`

### 3️⃣ Frontend Setup

#### 📁 Navigate to project root
```bash
cd ..
```

#### 📦 Install dependencies
```bash
npm install
```

#### 🚀 Start the Development Server
```bash
ng serve
```

✅ The application will be available at `http://localhost:4200`

## 📧 Email Configuration

### Gmail Setup
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
3. Use the generated password in your `.env` file

### Email Templates
The application includes beautiful HTML email templates for:
- Account verification
- Password reset
- Welcome emails

## 🔐 Google OAuth Setup

### Google Cloud Console
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials:
   - Application type: Web application
   - Authorized redirect URIs: `http://localhost:3000/api/auth/google/callback`
5. Copy Client ID and Client Secret to your `.env` file

## 📊 Database Schema

### User Model
```javascript
{
  name: String,
  email: String (unique),
  username: String (unique),
  password: String (hashed),
  avatar: String,
  role: String (user/admin),
  isEmailVerified: Boolean,
  googleId: String,
  lastLogin: Date,
  preferences: Object
}
```

### Task Model
```javascript
{
  name: String,
  description: String,
  progress: Number (0-100),
  type: String (feature/bug/improvement/task),
  status: String (todo/in-progress/review/done/cancelled),
  priority: String (low/medium/high/urgent),
  owner: ObjectId (ref: User),
  assignee: ObjectId (ref: User),
  dueDate: Date,
  tags: [String],
  comments: [Object],
  attachments: [Object]
}
```

## 🔧 API Endpoints

### 🔐 Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/google` - Google OAuth
- `GET /api/auth/verify-email/:token` - Email verification
- `POST /api/auth/forgot-password` - Password reset request
- `POST /api/auth/reset-password/:token` - Password reset
- `POST /api/auth/logout` - User logout

### 👤 Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update profile
- `PUT /api/users/change-password` - Change password
- `DELETE /api/users/account` - Delete account

### 📋 Tasks
- `GET /api/tasks` - Get all tasks (with filtering)
- `POST /api/tasks` - Create new task
- `GET /api/tasks/:id` - Get task by ID
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task
- `PATCH /api/tasks/:id/progress` - Update progress
- `POST /api/tasks/:id/comments` - Add comment
- `GET /api/tasks/stats/overview` - Get statistics

## 🎯 Roadmap

- [ ] Real-time notifications
- [ ] Team collaboration features
- [ ] Advanced reporting
- [ ] Mobile app
- [ ] API documentation
- [ ] Unit tests
- [ ] E2E tests
- [ ] Docker support
- [ ] CI/CD pipeline

---

<div align="center">

## 🎉 Happy Task Management!

**Made with ❤️ by the TaskFlow Team**

*Transform your workflow, boost your productivity!*

</div>
