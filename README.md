# Lab Auth API

## Overview

This project is a simple authentication API built with **Node.js, Express, MySQL, and JWT**.  
It lets users **signup, login, access a protected profile**, and **logout** with token revocation.  
For Lab 4, additional **SQL JOIN queries** and **report endpoints** were implemented.

---

## Part 1 — Database Setup

I created a MySQL database called `lab_auth` with the following tables:

- `users` → stores user info like email, password hash, full name, role, and creation time.
- `revoked_tokens` → keeps track of tokens that have been revoked after logout.

**Evidence:** Screenshots of the database and tables in phpMyAdmin.

---

## Part 2 — Project Setup & Health

- Installed dependencies:

```bash
npm install
Health check endpoint confirms the server and DB are running:
GET /api/health → returns status, DB connection, and timestamp.

Part 3 — JOIN Queries (SQL)
A) INNER JOIN — Users with Roles
👉 Shows only users who have at least one role assigned, since INNER JOIN only returns matching records from both tables.

B) LEFT JOIN — Users with Profiles
👉 Lists all users, and shows profile details if they exist. If a user doesn’t have a profile, profile fields appear as NULL.

C) RIGHT JOIN — Roles (even unassigned)
👉 Displays all roles, including ones not assigned to any user. Users without roles will not appear.

D) FULL OUTER JOIN (emulated)
👉 Combines both LEFT and RIGHT joins, so you see all users and all profiles, even if some don’t match.

E) CROSS JOIN — User–Role Combinations
👉 Produces every possible pairing of users and roles, regardless of whether they’re actually linked in the database.

F) SELF JOIN — Referrals
👉 Joins the users table with itself to show which user referred another (e.g., user_id matched with referrer_id).

G) Latest Login
👉 Selects each user with their most recent login time, showing who logged in last.

Part 4 — API Endpoints (Reports)
These endpoints are JWT-protected. A valid login token is required.

GET /api/reports/users-with-roles → Lists users with their roles (INNER JOIN).

GET /api/reports/users-with-profiles → Lists all users and their profiles (LEFT JOIN).

GET /api/reports/roles-right-join → Shows all roles, even unassigned (RIGHT JOIN).

GET /api/reports/profiles-full-outer → Combines LEFT and RIGHT (FULL OUTER JOIN).

GET /api/reports/user-role-combos → Every possible user-role combo (CROSS JOIN).

GET /api/reports/referrals → Shows referral relationships (SELF JOIN).

GET /api/reports/latest-login → Latest login activity.

Part 5 — Postman Results
✅ Successful login returns a JWT token.

✅ Each /api/reports/... endpoint returns 200 OK with token.

❌ Without token, endpoints return 401 Unauthorized.

Evidence: Screenshots in the PDF (login, authorized requests, negative test).

Part 6 — Environment Setup
Create a .env file with the following variables:

env
Copy code
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASS=your_mysql_password
DB_NAME=lab_auth
JWT_SECRET=your_jwt_secret
JWT_EXPIRES=1h
SERVER_PORT=3000
```
