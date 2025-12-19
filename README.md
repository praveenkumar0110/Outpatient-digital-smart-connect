# 🏥 Smart OPD Digital System  
### Python + React

<p align="center">
  <img src="https://raw.githubusercontent.com/github/explore/main/topics/python/python.png" width="90"/>
  <img src="https://raw.githubusercontent.com/github/explore/main/topics/react/react.png" width="90"/>
</p>

---

## 📖 About

This is **my own idea** — a **compact OPD (Outpatient Department) digital architecture** designed to remove manual registration and waiting confusion in hospitals.

The system allows **patients to control doctor selection, slot, and time digitally**, using a **single Digital Health ID** that connects **hospital, doctor, pharmacy, lab, and patient** into one unified workflow.

With **real-time token generation** and **live ETA prediction**, the entire OPD flow becomes **transparent, fast, and predictable**.

---

## 🧠 Problem Statement

<p align="center">

</p>

Traditional OPD systems suffer from:
- Manual registration queues  
- No clarity on doctor availability  
- Long waiting times  
- Poor coordination between lab, pharmacy, and consultation  
- No real-time updates for patients  

---

## 💡 Solution Overview

<p align="center">

</p>

This system introduces:
- **Single Digital OPD ID** per patient  
- **Doctor & slot selection** via UI  
- **Real-time token assignment**  
- **Live ETA calculation**  
- **End-to-end OPD flow tracking**  

---

## 🔄 OPD Workflow

<p align="center">

</p>

1. Patient logs in using Digital OPD ID  
2. Selects hospital, department, and doctor  
3. Chooses available time slot  
4. System generates real-time token  
5. Live ETA updates based on doctor speed  
6. Consultation completes  
7. Lab / Pharmacy linked automatically  
8. OPD visit history stored digitally  

---

## ✨ Key Features

- 🆔 Single Digital OPD ID  
- 👨‍⚕️ Doctor & slot selection  
- ⏱️ Live token & ETA prediction  
- 📡 Real-time OPD status updates  
- 🔗 Hospital–Lab–Pharmacy integration  
- 📊 Transparent OPD queue system  

---

## 🛠️ Tech Stack

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" width="80"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="80"/>
</p>

### Backend
- Python  
- REST APIs (Django / FastAPI – concept based)  

### Frontend
- React.js  
- Real-time UI updates  

### Concepts Used
- Token-based queue system  
- ETA prediction logic  
- Digital health ID mapping  

---

## 📂 Project Architecture

smart-opd-system/
│
├── backend/
│ ├── api/
│ ├── token-engine/
│ └── eta-calculator/
│
├── frontend/
│ ├── doctor-slot-ui/
│ ├── live-token-dashboard/
│ └── patient-portal/
│
└── README.md
