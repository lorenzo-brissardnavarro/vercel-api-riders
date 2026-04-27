# 🚴 Tour de France 2025 API

API REST construite avec  Vercel permettant d’accéder aux données du Tour de France 2025 : étapes, coureurs, maillots et classements.

---

## 🌐 Base URL

https://<ton-projet>.vercel.app/api


---

## 📍 Routes disponibles

### 🔹 Étapes

- `GET /stages`  
  → Liste des 21 étapes (version brute)

- `GET /stages/:id`  
  → Détail d’une étape avec podium enrichi (coureurs inclus)

---

### 🔹 Coureurs

- `GET /riders`  
  → Liste de tous les coureurs

- `GET /riders/:id`  
  → Détail d’un coureur

---

### 🔹 Maillots

- `GET /jerseys`  
  → Présentation des maillots (jaune, vert, pois, blanc)

---

### 🔹 Classements

- `GET /classifications`  
  → Gagnants des classements avec :
  - informations du coureur
  - statistiques (temps, points…)
  - meilleure équipe (avec logo)


---

## ⚙️ Structure des données

- `stages` → étapes du Tour
- `riders` → coureurs
- `jerseys` → présentation des maillots
- `classifications` → résultats et statistiques

---

## 📌 Notes

- API en lecture seule (GET uniquement)
- Images servies statiquement via Vercel