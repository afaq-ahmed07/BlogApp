# 📖 Blogify

Blogify is a simple yet powerful blogging application built with **Node.js**, **Express.js**, **MongoDB**, and **EJS**.  
It allows users to create accounts, sign in, write blogs, upload cover images, and comment on posts.  
Authentication and authorization are handled using **JWT**.

<img width="3514" height="2346" alt="Blogify-Home" src="https://github.com/user-attachments/assets/a582fccd-b889-4e5c-9e81-04dbe2502147" />

![Blogify-Welcome](https://github.com/user-attachments/assets/b4ac9ebc-8b42-4b4c-948f-8737a7f5e386)

---

## ✨ Features

- User authentication and authorization using **JWT**  
- Sign up, Sign in, and Logout functionality  
- Create, view, and manage blogs with cover images  
- Comment on blogs  
- Responsive UI with **Bootstrap**  
- RESTful APIs following best practices  

---

## ⚙️ Environment Variables

Create a `.env` file in the root of your project with the following:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=8000

---

## 🚀 Run Locally

1. **Clone the repository**

```bash
git clone https://github.com/your-username/blogify.git
cd blogify
```
2. **Install dependencies

```bash
npm install
```
3. **Create .env file

Add your MONGO_URI, JWT_SECRET, and PORT values as shown above.

4. **Start the server

```bash
npm start
```
5. **Visit the app

Open http://localhost:8000 in your browser.
