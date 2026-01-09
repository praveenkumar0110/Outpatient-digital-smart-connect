# 🏥 Smart OPD Digital System  
### Python + React + MongoDB

<p align="center">
  <img src="https://raw.githubusercontent.com/github/explore/main/topics/python/python.png" width="90"/>
  <img src="https://raw.githubusercontent.com/github/explore/main/topics/react/react.png" width="90"/>
  <img src="https://raw.githubusercontent.com/github/explore/main/topics/mongodb/mongodb.png" width="90"/>
</p>

---

## 📖 About

This is **my own idea** — a **compact OPD (Outpatient Department) digital architecture** designed to eliminate **manual registration**, **long waiting queues**, and **lack of transparency** in hospitals.

The system enables patients to **select doctors, slots, and consultation time digitally**, using a **single Digital Health ID** that connects **hospital, doctor, lab, pharmacy, and patient** into one unified ecosystem.

With **real-time token generation**, **MongoDB-powered data storage**, and **live ETA prediction**, the OPD flow becomes **fast, predictable, and fully transparent**.

---

## 🧠 Problem Statement

Traditional OPD systems suffer from:
- Manual registration queues  
- No clarity on doctor availability  
- Long and unpredictable waiting times  
- Poor coordination between consultation, lab, and pharmacy  
- No real-time updates for patients  

---

## 💡 Solution Overview

This system introduces:
- **Single Digital OPD ID** per patient  
- **Doctor & slot selection** via React UI  
- **Real-time token assignment**  
- **Live ETA calculation**  
- **Centralized MongoDB data storage**  
- **End-to-end OPD flow tracking**  

---

## 🔄 OPD Workflow

1. Patient logs in using Digital OPD ID  
2. Selects hospital, department, and doctor  
3. Chooses an available time slot  
4. System generates a real-time OPD token  
5. ETA updates dynamically based on doctor speed  
6. Consultation completes  
7. Lab & pharmacy records are linked automatically  
8. OPD visit history is stored digitally  

---

## ✨ Key Features

- 🆔 Single Digital OPD ID  
- 👨‍⚕️ Doctor & slot selection  
- ⏱️ Live token & ETA prediction  
- 📡 Real-time OPD status updates  
- 🗄️ MongoDB-based centralized storage  
- 🔗 Hospital–Lab–Pharmacy integration  
- 📊 Transparent OPD queue system  

---

## 🛠️ Tech Stack

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" width="80"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="80"/>
  <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" width="80"/>
</p>

### Backend
- Python  
- REST APIs (Django / FastAPI)  
- Token & ETA calculation engine  

### Frontend
- React.js  
- Real-time dashboards & UI  

### Database
- MongoDB  
- Stores:
  - Patient profiles
  - Digital OPD IDs
  - Doctor schedules
  - Token & ETA data
  - OPD visit history

### Concepts Used
- Token-based queue system  
- ETA prediction logic  
- Digital Health ID mapping  
- Centralized NoSQL data model.

---
