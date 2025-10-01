# Portfolio Fullstack  

A **fullstack personal portfolio application** showcasing projects, skills, and resume — built with **React (frontend)** and **Spring Boot + MySQL (backend)**.  

### Live Demo  
🖥️ Frontend: [Portfolio Website](https://fastidious-lebkuchen-4a01e6.netlify.app/)  
⚙️ Backend: [Portfolio API](https://portfolio-backend-cg2j.onrender.com)  

---

## 🛠️ Tech Stack  

**Frontend**  
- JavaScript
- React.js  
- Bootstrap  
- Netlify (deployment)  

**Backend**  
- Java Spring Boot  
- Hibernate (JPA)  
- MySQL Database  
- Render (deployment)  

**Tools**  
- Maven 
- Postman (API testing)  
- Git & GitHub (version control)  

---

## ✨ Features  

- Home section for introduction and overview  
- Projects section showcasing portfolio work (fetched dynamically)  
- Skills section displaying technical expertise  
- Contact form integrated with backend API  
- Resume section with easy access  

---

## ⚙️ Local Setup  

### 1. Clone Repositories  

#### Frontend
```bash
git clone https://github.com/kamranxqrs/portfolio-fullstack.git
cd portfolio-fullstack/frontend
npm install
npm start
```
#### Backend
```bash
git clone https://github.com/kamranxqrs/portfolio-fullstack.git
cd portfolio-fullstack/backend
mvn spring-boot:run
```
### 2. Configure Database

Install and start MySQL

Create a new database:
```sql
CREATE DATABASE portfolio_db;
```
Update application.properties in the backend:
```bash
spring.datasource.url=jdbc:mysql://localhost:3306/portfolio_db
spring.datasource.username=your-username
spring.datasource.password=your-password
spring.jpa.hibernate.ddl-auto=update
```
### 3. Run the App

Backend → http://localhost:8080

Frontend → http://localhost:3000

---

## 📂 Project Structure  

### Frontend (React)
``` 
src/
 ├── components/
 ├── pages/
 ├── App.js
 └── index.js
```
### Backend (Spring Boot)
```
src/main/java/com/portfolio/
 ├── controller/
 ├── model/
 ├── repository/
 ├── service/
 └── PortfolioApplication.java
```
