# Lab Auth API

## Overview

This project is a simple authentication API built with Node.js, Express, MySQL, and JWT.  
It lets users **signup, login, access a protected profile**, and **logout** with token revocation.

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
```
