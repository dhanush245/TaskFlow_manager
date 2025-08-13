
# TaskFlow Manager

_A modern, responsive task management application built with Angular and Angular Material._

# Screenshot
**Login Page**
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/0e94ec17-894f-48e6-86de-97c417d1337a" />

**Board View**
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e7cde4b1-d7dd-4c1b-8f81-1721fc41e2b9" />

**Table View**
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/3e01925b-594f-447e-a97c-4d391030ecfd" />





## 📌 Overview
TaskFlow Manager helps you efficiently manage your tasks and workflow with both **Table View** and **Kanban Board View**.  
Features include task creation, editing, filtering, dynamic column control, and exporting data to Excel.

## ✨ Features
- **📋 Dual View Modes**
Easily toggle between a detailed table view and a visually intuitive kanban board.

- **➕ Full CRUD Abilities**
Create new tasks, update their properties, or delete completed/obsolete ones.

- **🔍 Advanced Filtering**
Filter tasks by workflow Status, task Priority, or assigned Owner to focus on relevant work.

- **👁 Dynamic Column Visibility**
Hide or show specific columns in the table for a tailored view.

- **📤 Export to Excel**
Export your current task data (filtered and showing only visible columns) as an Excel file for reporting or backup.

- **📱 Responsive UI**
Designed with Angular Material, the application adapts seamlessly from desktops to mobile devices.

- **🔐 Basic Authentication Flow**
Includes simple user login/logout features (can be expanded further for production use).

## 🛠 Tech Stack
- **Frontend:** Angular 16+, Angular Material
- **Language:** TypeScript, SCSS
- **Data Handling:** In‑memory service (static data, no backend)
- **Export:** xlsx + file-saver libraries



---

# Tasklist

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.


## 🚀 Getting Started

### Prerequisites
- **Node.js** v18+
- **Angular CLI** v16+
- Git

### Installation
1. **Clone** the repository:


## 📂 Project Structure
```src/
├── app/
│ ├── components/ # UI components (toolbar, pages, dialogs)
│ ├── guards/ # Route guards
│ ├── models/ # Interfaces & types
│ ├── services/ # In‑memory data & auth services
│ ├── app.module.ts # Main Angular module
│ └── app-routing.module.ts
├── assets/ # Static assets
├── styles.scss # Global styles
└── index.html```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
