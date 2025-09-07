
<div align="center">

# 🚀 TaskFlow Manager

<div style="
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.2em;
  font-weight: 300;
  margin: 20px 0;
  animation: fadeInUp 1s ease-out;
">

A modern, full-stack task management application built with Angular, Node.js, Express, and MongoDB.

</div>

<div style="
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 30px 0;
  flex-wrap: wrap;
">

<img src="https://img.shields.io/badge/Angular-17-red?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" style="animation: bounce 2s infinite;">

<img src="https://img.shields.io/badge/Node.js-18-green?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" style="animation: bounce 2s infinite 0.2s;">

<img src="https://img.shields.io/badge/MongoDB-6-green?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" style="animation: bounce 2s infinite 0.4s;">

<img src="https://img.shields.io/badge/Express.js-black?style=for-the-badge&logo=express&logoColor=white" alt="Express" style="animation: bounce 2s infinite 0.6s;">

</div>

</div>

<style>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(102, 126, 234, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.8), 0 0 30px rgba(102, 126, 234, 0.6);
  }
}

.feature-card {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 15px;
  padding: 20px;
  margin: 15px 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  animation: slideInLeft 0.8s ease-out;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  animation: glow 2s infinite;
}

.tech-stack {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
  padding: 25px;
  margin: 20px 0;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  animation: slideInRight 0.8s ease-out;
}

.code-block {
  background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
  color: #e2e8f0;
  border-radius: 10px;
  padding: 20px;
  margin: 15px 0;
  border-left: 4px solid #667eea;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  animation: fadeInUp 0.6s ease-out;
}

.section-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.5em;
  font-weight: bold;
  margin: 30px 0 20px 0;
  padding: 10px 0;
  border-bottom: 3px solid transparent;
  border-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%) 1;
  animation: fadeInUp 0.8s ease-out;
}

.endpoint-item {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 8px;
  padding: 12px 15px;
  margin: 8px 0;
  border-left: 4px solid #28a745;
  transition: all 0.3s ease;
  animation: slideInLeft 0.5s ease-out;
}

.endpoint-item:hover {
  transform: translateX(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.roadmap-item {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  border-radius: 8px;
  padding: 10px 15px;
  margin: 8px 0;
  border-left: 4px solid #ffc107;
  transition: all 0.3s ease;
  animation: slideInRight 0.5s ease-out;
}

.roadmap-item:hover {
  transform: translateX(-10px);
  box-shadow: 0 5px 15px rgba(255, 193, 7, 0.3);
}

.emoji {
  font-size: 1.2em;
  animation: pulse 2s infinite;
}

.progress-bar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  height: 4px;
  border-radius: 2px;
  margin: 10px 0;
  animation: slideInLeft 1s ease-out;
}
</style>

<div class="section-header">🚀 Features</div>

<div class="feature-card">
<h3 style="color: #667eea; margin-bottom: 15px;">🔐 Authentication & Security</h3>
<ul style="list-style: none; padding: 0;">
<li style="margin: 8px 0; padding: 8px 12px; background: linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%); border-radius: 8px; border-left: 4px solid #28a745;">✅ <strong>User Registration</strong> with email verification</li>
<li style="margin: 8px 0; padding: 8px 12px; background: linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%); border-radius: 8px; border-left: 4px solid #28a745;">✅ <strong>Google OAuth</strong> integration</li>
<li style="margin: 8px 0; padding: 8px 12px; background: linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%); border-radius: 8px; border-left: 4px solid #28a745;">✅ <strong>Email-based password reset</strong></li>
<li style="margin: 8px 0; padding: 8px 12px; background: linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%); border-radius: 8px; border-left: 4px solid #28a745;">✅ <strong>JWT-based authentication</strong></li>
<li style="margin: 8px 0; padding: 8px 12px; background: linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%); border-radius: 8px; border-left: 4px solid #28a745;">✅ <strong>Session management</strong></li>
<li style="margin: 8px 0; padding: 8px 12px; background: linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%); border-radius: 8px; border-left: 4px solid #28a745;">✅ <strong>Role-based access control</strong> (Admin/User)</li>
</ul>
</div>

<div class="feature-card">
<h3 style="color: #667eea; margin-bottom: 15px;">📋 Task Management</h3>
<ul style="list-style: none; padding: 0;">
<li style="margin: 8px 0; padding: 8px 12px; background: linear-gradient(135deg, #e3f2fd 0%, #f0f8ff 100%); border-radius: 8px; border-left: 4px solid #2196f3;">✅ <strong>Create, Read, Update, Delete</strong> tasks</li>
<li style="margin: 8px 0; padding: 8px 12px; background: linear-gradient(135deg, #e3f2fd 0%, #f0f8ff 100%); border-radius: 8px; border-left: 4px solid #2196f3;">✅ <strong>Task status tracking</strong> (Todo, In Progress, Review, Done, Cancelled)</li>
<li style="margin: 8px 0; padding: 8px 12px; background: linear-gradient(135deg, #e3f2fd 0%, #f0f8ff 100%); border-radius: 8px; border-left: 4px solid #2196f3;">✅ <strong>Priority levels</strong> (Low, Medium, High, Urgent)</li>
<li style="margin: 8px 0; padding: 8px 12px; background: linear-gradient(135deg, #e3f2fd 0%, #f0f8ff 100%); border-radius: 8px; border-left: 4px solid #2196f3;">✅ <strong>Progress tracking</strong> with visual indicators</li>
<li style="margin: 8px 0; padding: 8px 12px; background: linear-gradient(135deg, #e3f2fd 0%, #f0f8ff 100%); border-radius: 8px; border-left: 4px solid #2196f3;">✅ <strong>Due date management</strong></li>
<li style="margin: 8px 0; padding: 8px 12px; background: linear-gradient(135deg, #e3f2fd 0%, #f0f8ff 100%); border-radius: 8px; border-left: 4px solid #2196f3;">✅ <strong>Task assignment</strong> to team members</li>
<li style="margin: 8px 0; padding: 8px 12px; background: linear-gradient(135deg, #e3f2fd 0%, #f0f8ff 100%); border-radius: 8px; border-left: 4px solid #2196f3;">✅ <strong>Comments and collaboration</strong></li>
<li style="margin: 8px 0; padding: 8px 12px; background: linear-gradient(135deg, #e3f2fd 0%, #f0f8ff 100%); border-radius: 8px; border-left: 4px solid #2196f3;">✅ <strong>File attachments</strong> support</li>
<li style="margin: 8px 0; padding: 8px 12px; background: linear-gradient(135deg, #e3f2fd 0%, #f0f8ff 100%); border-radius: 8px; border-left: 4px solid #2196f3;">✅ <strong>Task archiving</strong></li>
</ul>
</div>

<div class="feature-card">
<h3 style="color: #667eea; margin-bottom: 15px;">📊 Dashboard & Analytics</h3>
<ul style="list-style: none; padding: 0;">
<li style="margin: 8px 0; padding: 8px 12px; background: linear-gradient(135deg, #fff3e0 0%, #fff8f0 100%); border-radius: 8px; border-left: 4px solid #ff9800;">✅ <strong>Real-time statistics</strong></li>
<li style="margin: 8px 0; padding: 8px 12px; background: linear-gradient(135deg, #fff3e0 0%, #fff8f0 100%); border-radius: 8px; border-left: 4px solid #ff9800;">✅ <strong>Task completion rates</strong></li>
<li style="margin: 8px 0; padding: 8px 12px; background: linear-gradient(135deg, #fff3e0 0%, #fff8f0 100%); border-radius: 8px; border-left: 4px solid #ff9800;">✅ <strong>Overdue task tracking</strong></li>
<li style="margin: 8px 0; padding: 8px 12px; background: linear-gradient(135deg, #fff3e0 0%, #fff8f0 100%); border-radius: 8px; border-left: 4px solid #ff9800;">✅ <strong>Priority distribution</strong></li>
<li style="margin: 8px 0; padding: 8px 12px; background: linear-gradient(135deg, #fff3e0 0%, #fff8f0 100%); border-radius: 8px; border-left: 4px solid #ff9800;">✅ <strong>Productivity insights</strong></li>
</ul>
</div>

<div class="feature-card">
<h3 style="color: #667eea; margin-bottom: 15px;">🎨 User Experience</h3>
<ul style="list-style: none; padding: 0;">
<li style="margin: 8px 0; padding: 8px 12px; background: linear-gradient(135deg, #f3e5f5 0%, #faf0ff 100%); border-radius: 8px; border-left: 4px solid #9c27b0;">✅ <strong>Responsive design</strong></li>
<li style="margin: 8px 0; padding: 8px 12px; background: linear-gradient(135deg, #f3e5f5 0%, #faf0ff 100%); border-radius: 8px; border-left: 4px solid #9c27b0;">✅ <strong>Modern UI/UX</strong></li>
<li style="margin: 8px 0; padding: 8px 12px; background: linear-gradient(135deg, #f3e5f5 0%, #faf0ff 100%); border-radius: 8px; border-left: 4px solid #9c27b0;">✅ <strong>Real-time updates</strong></li>
<li style="margin: 8px 0; padding: 8px 12px; background: linear-gradient(135deg, #f3e5f5 0%, #faf0ff 100%); border-radius: 8px; border-left: 4px solid #9c27b0;">✅ <strong>Search and filtering</strong></li>
<li style="margin: 8px 0; padding: 8px 12px; background: linear-gradient(135deg, #f3e5f5 0%, #faf0ff 100%); border-radius: 8px; border-left: 4px solid #9c27b0;">✅ <strong>Export functionality</strong></li>
<li style="margin: 8px 0; padding: 8px 12px; background: linear-gradient(135deg, #f3e5f5 0%, #faf0ff 100%); border-radius: 8px; border-left: 4px solid #9c27b0;">✅ <strong>Dark/Light theme support</strong></li>
</ul>
</div>

<div class="section-header">🛠️ Tech Stack</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 20px 0;">

<div class="tech-stack">
<h3 style="color: white; margin-bottom: 15px; text-align: center;">🎨 Frontend</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px;">
<div style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 8px; text-align: center;">
<strong>Angular 17</strong><br><small>Modern web framework</small>
</div>
<div style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 8px; text-align: center;">
<strong>TypeScript</strong><br><small>Type-safe JavaScript</small>
</div>
<div style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 8px; text-align: center;">
<strong>SCSS</strong><br><small>Advanced styling</small>
</div>
<div style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 8px; text-align: center;">
<strong>Angular Material</strong><br><small>UI components</small>
</div>
<div style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 8px; text-align: center;">
<strong>RxJS</strong><br><small>Reactive programming</small>
</div>
<div style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 8px; text-align: center;">
<strong>Chart.js</strong><br><small>Data visualization</small>
</div>
</div>
</div>

<div class="tech-stack">
<h3 style="color: white; margin-bottom: 15px; text-align: center;">⚙️ Backend</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px;">
<div style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 8px; text-align: center;">
<strong>Node.js</strong><br><small>JavaScript runtime</small>
</div>
<div style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 8px; text-align: center;">
<strong>Express.js</strong><br><small>Web framework</small>
</div>
<div style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 8px; text-align: center;">
<strong>MongoDB</strong><br><small>NoSQL database</small>
</div>
<div style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 8px; text-align: center;">
<strong>Mongoose</strong><br><small>MongoDB ODM</small>
</div>
<div style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 8px; text-align: center;">
<strong>Passport.js</strong><br><small>Authentication</small>
</div>
<div style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 8px; text-align: center;">
<strong>JWT</strong><br><small>Token-based auth</small>
</div>
<div style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 8px; text-align: center;">
<strong>Nodemailer</strong><br><small>Email service</small>
</div>
<div style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 8px; text-align: center;">
<strong>bcryptjs</strong><br><small>Password hashing</small>
</div>
</div>
</div>

<div class="tech-stack">
<h3 style="color: white; margin-bottom: 15px; text-align: center;">🗄️ Database</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px;">
<div style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 8px; text-align: center;">
<strong>MongoDB Compass</strong><br><small>Database management</small>
</div>
</div>
</div>

</div>

<div class="section-header">📋 Prerequisites</div>

<div class="feature-card">
<p style="text-align: center; margin-bottom: 20px; font-size: 1.1em; color: #667eea;">Before running this application, make sure you have the following installed:</p>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
<div style="background: linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%); padding: 15px; border-radius: 10px; border-left: 4px solid #28a745; text-align: center;">
<strong>Node.js</strong><br><small style="color: #666;">v18 or higher</small>
</div>
<div style="background: linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%); padding: 15px; border-radius: 10px; border-left: 4px solid #28a745; text-align: center;">
<strong>npm</strong><br><small style="color: #666;">v9 or higher</small>
</div>
<div style="background: linear-gradient(135deg, #e3f2fd 0%, #f0f8ff 100%); padding: 15px; border-radius: 10px; border-left: 4px solid #2196f3; text-align: center;">
<strong>MongoDB</strong><br><small style="color: #666;">v6 or higher</small>
</div>
<div style="background: linear-gradient(135deg, #e3f2fd 0%, #f0f8ff 100%); padding: 15px; border-radius: 10px; border-left: 4px solid #2196f3; text-align: center;">
<strong>MongoDB Compass</strong><br><small style="color: #666;">Database management</small>
</div>
<div style="background: linear-gradient(135deg, #fff3e0 0%, #fff8f0 100%); padding: 15px; border-radius: 10px; border-left: 4px solid #ff9800; text-align: center;">
<strong>Angular CLI</strong><br><small style="color: #666;">v17 or higher</small>
</div>
</div>
</div>

<div class="section-header">🚀 Quick Start</div>

<div class="feature-card">
<h3 style="color: #667eea; margin-bottom: 15px;">1️⃣ Clone the Repository</h3>
<div class="code-block">
<code style="color: #4ade80;">git clone</code> <span style="color: #fbbf24;">&lt;repository-url&gt;</span><br>
<code style="color: #4ade80;">cd</code> <span style="color: #fbbf24;">TaskFlow-Manager</span>
</div>
</div>

<div class="feature-card">
<h3 style="color: #667eea; margin-bottom: 15px;">2️⃣ Backend Setup</h3>

<h4 style="color: #667eea; margin: 15px 0 10px 0;">📁 Navigate to API directory</h4>
<div class="code-block">
<code style="color: #4ade80;">cd</code> <span style="color: #fbbf24;">taskflow-api</span>
</div>

<h4 style="color: #667eea; margin: 15px 0 10px 0;">📦 Install dependencies</h4>
<div class="code-block">
<code style="color: #4ade80;">npm install</code>
</div>

<h4 style="color: #667eea; margin: 15px 0 10px 0;">⚙️ Configure Environment Variables</h4>
<p style="margin-bottom: 10px;">Create a <code style="background: #f1f5f9; padding: 2px 6px; border-radius: 4px;">.env</code> file in the <code style="background: #f1f5f9; padding: 2px 6px; border-radius: 4px;">taskflow-api</code> directory:</p>

<div class="code-block">
<code style="color: #94a3b8;"># Server Configuration</code><br>
<code style="color: #4ade80;">PORT</code><span style="color: #fbbf24;">=3000</span><br>
<code style="color: #4ade80;">NODE_ENV</code><span style="color: #fbbf24;">=development</span><br><br>
<code style="color: #94a3b8;"># MongoDB Configuration</code><br>
<code style="color: #4ade80;">MONGODB_URI</code><span style="color: #fbbf24;">=mongodb://localhost:27017/taskflow_db</span><br><br>
<code style="color: #94a3b8;"># JWT Configuration</code><br>
<code style="color: #4ade80;">JWT_SECRET</code><span style="color: #fbbf24;">=your-super-secret-jwt-key-change-this-in-production</span><br>
<code style="color: #4ade80;">JWT_EXPIRES_IN</code><span style="color: #fbbf24;">=7d</span><br><br>
<code style="color: #94a3b8;"># Google OAuth Configuration</code><br>
<code style="color: #4ade80;">GOOGLE_CLIENT_ID</code><span style="color: #fbbf24;">=1087576659478-7cj5fiulovtrrm1l2h54khnrm9uf442i.apps.googleusercontent.com</span><br>
<code style="color: #4ade80;">GOOGLE_CLIENT_SECRET</code><span style="color: #fbbf24;">=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</span><br>
<code style="color: #4ade80;">GOOGLE_CALLBACK_URL</code><span style="color: #fbbf24;">=http://localhost:3000/api/auth/google/callback</span><br><br>
<code style="color: #94a3b8;"># Email Configuration (Gmail SMTP)</code><br>
<code style="color: #4ade80;">EMAIL_HOST</code><span style="color: #fbbf24;">=smtp.gmail.com</span><br>
<code style="color: #4ade80;">EMAIL_PORT</code><span style="color: #fbbf24;">=587</span><br>
<code style="color: #4ade80;">EMAIL_USER</code><span style="color: #fbbf24;">=your-email@gmail.com</span><br>
<code style="color: #4ade80;">EMAIL_PASS</code><span style="color: #fbbf24;">=sjnc biwb roqr nmia</span><br>
<code style="color: #4ade80;">EMAIL_FROM</code><span style="color: #fbbf24;">=TaskFlow Manager &lt;your-email@gmail.com&gt;</span><br><br>
<code style="color: #94a3b8;"># Frontend URL</code><br>
<code style="color: #4ade80;">FRONTEND_URL</code><span style="color: #fbbf24;">=http://localhost:4200</span><br><br>
<code style="color: #94a3b8;"># Session Secret</code><br>
<code style="color: #4ade80;">SESSION_SECRET</code><span style="color: #fbbf24;">=your-super-secret-session-key-change-this-in-production</span>
</div>

<h4 style="color: #667eea; margin: 15px 0 10px 0;">🗄️ Start MongoDB</h4>
<p style="margin-bottom: 10px;">Make sure MongoDB is running on your system:</p>
<div class="code-block">
<code style="color: #94a3b8;"># Windows</code><br>
<code style="color: #4ade80;">mongod</code><br><br>
<code style="color: #94a3b8;"># macOS/Linux</code><br>
<code style="color: #4ade80;">sudo systemctl start mongod</code>
</div>

<h4 style="color: #667eea; margin: 15px 0 10px 0;">🚀 Start the Backend Server</h4>
<div class="code-block">
<code style="color: #4ade80;">npm run dev</code>
</div>
<p style="margin-top: 10px; padding: 10px; background: linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%); border-radius: 8px; border-left: 4px solid #28a745;">
✅ The API will be available at <code style="background: #d4edda; padding: 2px 6px; border-radius: 4px;">http://localhost:3000</code>
</p>
</div>

<div class="feature-card">
<h3 style="color: #667eea; margin-bottom: 15px;">3️⃣ Frontend Setup</h3>

<h4 style="color: #667eea; margin: 15px 0 10px 0;">📁 Navigate to project root</h4>
<div class="code-block">
<code style="color: #4ade80;">cd</code> <span style="color: #fbbf24;">..</span>
</div>

<h4 style="color: #667eea; margin: 15px 0 10px 0;">📦 Install dependencies</h4>
<div class="code-block">
<code style="color: #4ade80;">npm install</code>
</div>

<h4 style="color: #667eea; margin: 15px 0 10px 0;">🚀 Start the Development Server</h4>
<div class="code-block">
<code style="color: #4ade80;">ng serve</code>
</div>
<p style="margin-top: 10px; padding: 10px; background: linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%); border-radius: 8px; border-left: 4px solid #28a745;">
✅ The application will be available at <code style="background: #d4edda; padding: 2px 6px; border-radius: 4px;">http://localhost:4200</code>
</p>
</div>

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

<div class="section-header">🔧 API Endpoints</div>

<div class="feature-card">
<h3 style="color: #667eea; margin-bottom: 15px;">🔐 Authentication</h3>
<div class="endpoint-item">
<code style="background: #dc3545; color: white; padding: 2px 6px; border-radius: 4px; margin-right: 10px;">POST</code>
<code style="background: #f8f9fa; padding: 2px 6px; border-radius: 4px;">/api/auth/register</code>
<span style="margin-left: 10px;">User registration</span>
</div>
<div class="endpoint-item">
<code style="background: #dc3545; color: white; padding: 2px 6px; border-radius: 4px; margin-right: 10px;">POST</code>
<code style="background: #f8f9fa; padding: 2px 6px; border-radius: 4px;">/api/auth/login</code>
<span style="margin-left: 10px;">User login</span>
</div>
<div class="endpoint-item">
<code style="background: #28a745; color: white; padding: 2px 6px; border-radius: 4px; margin-right: 10px;">GET</code>
<code style="background: #f8f9fa; padding: 2px 6px; border-radius: 4px;">/api/auth/google</code>
<span style="margin-left: 10px;">Google OAuth</span>
</div>
<div class="endpoint-item">
<code style="background: #28a745; color: white; padding: 2px 6px; border-radius: 4px; margin-right: 10px;">GET</code>
<code style="background: #f8f9fa; padding: 2px 6px; border-radius: 4px;">/api/auth/verify-email/:token</code>
<span style="margin-left: 10px;">Email verification</span>
</div>
<div class="endpoint-item">
<code style="background: #dc3545; color: white; padding: 2px 6px; border-radius: 4px; margin-right: 10px;">POST</code>
<code style="background: #f8f9fa; padding: 2px 6px; border-radius: 4px;">/api/auth/forgot-password</code>
<span style="margin-left: 10px;">Password reset request</span>
</div>
<div class="endpoint-item">
<code style="background: #dc3545; color: white; padding: 2px 6px; border-radius: 4px; margin-right: 10px;">POST</code>
<code style="background: #f8f9fa; padding: 2px 6px; border-radius: 4px;">/api/auth/reset-password/:token</code>
<span style="margin-left: 10px;">Password reset</span>
</div>
<div class="endpoint-item">
<code style="background: #dc3545; color: white; padding: 2px 6px; border-radius: 4px; margin-right: 10px;">POST</code>
<code style="background: #f8f9fa; padding: 2px 6px; border-radius: 4px;">/api/auth/logout</code>
<span style="margin-left: 10px;">User logout</span>
</div>
</div>

<div class="feature-card">
<h3 style="color: #667eea; margin-bottom: 15px;">👤 Users</h3>
<div class="endpoint-item">
<code style="background: #28a745; color: white; padding: 2px 6px; border-radius: 4px; margin-right: 10px;">GET</code>
<code style="background: #f8f9fa; padding: 2px 6px; border-radius: 4px;">/api/users/profile</code>
<span style="margin-left: 10px;">Get user profile</span>
</div>
<div class="endpoint-item">
<code style="background: #ffc107; color: black; padding: 2px 6px; border-radius: 4px; margin-right: 10px;">PUT</code>
<code style="background: #f8f9fa; padding: 2px 6px; border-radius: 4px;">/api/users/profile</code>
<span style="margin-left: 10px;">Update profile</span>
</div>
<div class="endpoint-item">
<code style="background: #ffc107; color: black; padding: 2px 6px; border-radius: 4px; margin-right: 10px;">PUT</code>
<code style="background: #f8f9fa; padding: 2px 6px; border-radius: 4px;">/api/users/change-password</code>
<span style="margin-left: 10px;">Change password</span>
</div>
<div class="endpoint-item">
<code style="background: #dc3545; color: white; padding: 2px 6px; border-radius: 4px; margin-right: 10px;">DELETE</code>
<code style="background: #f8f9fa; padding: 2px 6px; border-radius: 4px;">/api/users/account</code>
<span style="margin-left: 10px;">Delete account</span>
</div>
</div>

<div class="feature-card">
<h3 style="color: #667eea; margin-bottom: 15px;">📋 Tasks</h3>
<div class="endpoint-item">
<code style="background: #28a745; color: white; padding: 2px 6px; border-radius: 4px; margin-right: 10px;">GET</code>
<code style="background: #f8f9fa; padding: 2px 6px; border-radius: 4px;">/api/tasks</code>
<span style="margin-left: 10px;">Get all tasks (with filtering)</span>
</div>
<div class="endpoint-item">
<code style="background: #dc3545; color: white; padding: 2px 6px; border-radius: 4px; margin-right: 10px;">POST</code>
<code style="background: #f8f9fa; padding: 2px 6px; border-radius: 4px;">/api/tasks</code>
<span style="margin-left: 10px;">Create new task</span>
</div>
<div class="endpoint-item">
<code style="background: #28a745; color: white; padding: 2px 6px; border-radius: 4px; margin-right: 10px;">GET</code>
<code style="background: #f8f9fa; padding: 2px 6px; border-radius: 4px;">/api/tasks/:id</code>
<span style="margin-left: 10px;">Get task by ID</span>
</div>
<div class="endpoint-item">
<code style="background: #ffc107; color: black; padding: 2px 6px; border-radius: 4px; margin-right: 10px;">PUT</code>
<code style="background: #f8f9fa; padding: 2px 6px; border-radius: 4px;">/api/tasks/:id</code>
<span style="margin-left: 10px;">Update task</span>
</div>
<div class="endpoint-item">
<code style="background: #dc3545; color: white; padding: 2px 6px; border-radius: 4px; margin-right: 10px;">DELETE</code>
<code style="background: #f8f9fa; padding: 2px 6px; border-radius: 4px;">/api/tasks/:id</code>
<span style="margin-left: 10px;">Delete task</span>
</div>
<div class="endpoint-item">
<code style="background: #17a2b8; color: white; padding: 2px 6px; border-radius: 4px; margin-right: 10px;">PATCH</code>
<code style="background: #f8f9fa; padding: 2px 6px; border-radius: 4px;">/api/tasks/:id/progress</code>
<span style="margin-left: 10px;">Update progress</span>
</div>
<div class="endpoint-item">
<code style="background: #dc3545; color: white; padding: 2px 6px; border-radius: 4px; margin-right: 10px;">POST</code>
<code style="background: #f8f9fa; padding: 2px 6px; border-radius: 4px;">/api/tasks/:id/comments</code>
<span style="margin-left: 10px;">Add comment</span>
</div>
<div class="endpoint-item">
<code style="background: #28a745; color: white; padding: 2px 6px; border-radius: 4px; margin-right: 10px;">GET</code>
<code style="background: #f8f9fa; padding: 2px 6px; border-radius: 4px;">/api/tasks/stats/overview</code>
<span style="margin-left: 10px;">Get statistics</span>
</div>
</div>

## 🎨 UI Components

### Login Page
- Modern gradient background
- Google OAuth integration
- Form validation
- Loading states
- Error handling

### Dashboard
- Task statistics cards
- Recent tasks list
- Quick actions
- Progress indicators
- Filter options

### Task Management
- Kanban board view
- Table view
- Task creation modal
- Edit task dialog
- Progress tracking

## 🔒 Security Features

- **Password Hashing** - bcryptjs with salt rounds
- **JWT Tokens** - Secure authentication
- **Input Validation** - Express-validator
- **Rate Limiting** - API protection
- **CORS Configuration** - Cross-origin security
- **Helmet.js** - Security headers
- **Session Management** - Secure sessions

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🚀 Deployment

### Backend Deployment
1. Set up a MongoDB Atlas cluster
2. Deploy to Heroku, Vercel, or AWS
3. Configure environment variables
4. Set up domain and SSL

### Frontend Deployment
1. Build the application: `ng build --prod`
2. Deploy to Netlify, Vercel, or AWS S3
3. Configure API endpoints
4. Set up custom domain

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:

1. Check the console for error messages
2. Verify MongoDB is running
3. Ensure all environment variables are set
4. Check network connectivity
5. Review the logs for detailed error information

<div class="section-header">🎯 Roadmap</div>

<div class="feature-card">
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px;">
<div class="roadmap-item">
<span style="color: #ffc107; font-size: 1.2em; margin-right: 10px;">⏳</span>
<strong>Real-time notifications</strong>
</div>
<div class="roadmap-item">
<span style="color: #ffc107; font-size: 1.2em; margin-right: 10px;">⏳</span>
<strong>Team collaboration features</strong>
</div>
<div class="roadmap-item">
<span style="color: #ffc107; font-size: 1.2em; margin-right: 10px;">⏳</span>
<strong>Advanced reporting</strong>
</div>
<div class="roadmap-item">
<span style="color: #ffc107; font-size: 1.2em; margin-right: 10px;">⏳</span>
<strong>Mobile app</strong>
</div>
<div class="roadmap-item">
<span style="color: #ffc107; font-size: 1.2em; margin-right: 10px;">⏳</span>
<strong>API documentation</strong>
</div>
<div class="roadmap-item">
<span style="color: #ffc107; font-size: 1.2em; margin-right: 10px;">⏳</span>
<strong>Unit tests</strong>
</div>
<div class="roadmap-item">
<span style="color: #ffc107; font-size: 1.2em; margin-right: 10px;">⏳</span>
<strong>E2E tests</strong>
</div>
<div class="roadmap-item">
<span style="color: #ffc107; font-size: 1.2em; margin-right: 10px;">⏳</span>
<strong>Docker support</strong>
</div>
<div class="roadmap-item">
<span style="color: #ffc107; font-size: 1.2em; margin-right: 10px;">⏳</span>
<strong>CI/CD pipeline</strong>
</div>
</div>
</div>

---

<div style="
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px 20px;
  border-radius: 20px;
  text-align: center;
  margin: 40px 0;
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
  animation: fadeInUp 1s ease-out;
">

<h2 style="margin: 0 0 20px 0; font-size: 2.5em; animation: pulse 2s infinite;">Happy Task Management! 🎉</h2>

<div style="
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 30px 0;
  flex-wrap: wrap;
">

<div style="
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: bounce 2s infinite;
">
<h3 style="margin: 0 0 10px 0; color: #fff;">🚀 Built with</h3>
<p style="margin: 0; opacity: 0.9;">Angular • Node.js • MongoDB</p>
</div>

<div style="
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: bounce 2s infinite 0.2s;
">
<h3 style="margin: 0 0 10px 0; color: #fff;">💡 Features</h3>
<p style="margin: 0; opacity: 0.9;">Real-time • Secure • Modern</p>
</div>

<div style="
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: bounce 2s infinite 0.4s;
">
<h3 style="margin: 0 0 10px 0; color: #fff;">🎯 Goal</h3>
<p style="margin: 0; opacity: 0.9;">Productivity • Efficiency • Success</p>
</div>

</div>

<div style="
  margin-top: 30px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
">
<p style="margin: 0; font-size: 1.1em; opacity: 0.9;">
Made with ❤️ by the TaskFlow Team
</p>
<p style="margin: 10px 0 0 0; opacity: 0.7;">
Transform your workflow, boost your productivity!
</p>
</div>

</div>
#
