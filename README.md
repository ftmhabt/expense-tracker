# Expense Tracker

## Overview
The **Expense Tracker** is a modern web application designed to help users efficiently track their incomes and expenses. Built with **Next.js, TypeScript, Prisma, and ShadCN**, it offers an intuitive interface for managing transactions with ease. This project demonstrates strong proficiency in **full-stack development**, handling CRUD operations, and integrating modern UI components.

## Features
- **User-Friendly UI:** Designed with ShadCN and TailwindCSS for a sleek and responsive experience.
- **Transaction Management:** Add, edit, and delete transactions with real-time updates.
- **Income & Expense Tracking:** View categorized financial summaries.
- **Data Persistence:** Utilizes **PostgreSQL** with **Prisma ORM** for efficient data storage.
- **Validation & Error Handling:** Ensures data integrity using **Zod & React Hook Form**.
- **Optimized Performance:** Server-side rendering with **Next.js App Router**.
- **Notifications:** Real-time feedback using **React Hot Toast**.

## Tech Stack
- **Frontend:** Next.js (App Router), React, TypeScript, TailwindCSS, ShadCN
- **Backend:** Next.js API Routes, Prisma ORM, PostgreSQL
- **Validation:** Zod, React Hook Form
- **State Management:** React Hooks
- **Notifications:** React Hot Toast
- **Deployment:** Vercel

## Installation
To set up the project locally:

```bash
# Clone the repository
git clone https://github.com/yourusername/expense-tracker.git
cd expense-tracker

# Install dependencies
npm install

# Set up environment variables (DATABASE_URL, etc.)
cp .env.example .env

# Run Prisma migrations
npx prisma migrate dev

# Start the development server
npm run dev
```

## Usage
1. **Add a Transaction:** Click "Add New Transaction" and enter details.
2. **Edit a Transaction:** Click the edit icon to modify existing transactions.
3. **Delete a Transaction:** Click the delete icon and confirm deletion.
4. **View Summary:** Track total income and expenses at a glance.

## Demo
[Live Demo](https://your-deployment-url.vercel.app)

## Future Enhancements
- User authentication for personalized tracking
- Monthly budget setting and financial insights
- CSV export for transaction history

## Contact
For inquiries or collaboration opportunities, reach out via [LinkedIn](https://www.linkedin.com/in/fatemeh-abtahi/) or [Email](mailto:ftmh.a78@gmail.com).

