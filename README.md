# 🏥 Sehat-Saathi – AI Healthcare Assistant for India

> AI-powered healthcare assistance platform designed for rural and underserved communities in India, providing multilingual health information and guidance.

## ✨ Features

- **AI Health Chatbot** — Rule-based health engine with Google Gemini API integration for intelligent responses
- **Multilingual Support** — Available in 8 languages: English, Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, and Kannada
- **Disease Information** — Comprehensive details on Dengue, Malaria, Diabetes, Fever, Cold & Cough, and Typhoid including symptoms, prevention, and when to see a doctor
- **Modern UI** — Healthcare-themed interface with smooth animations powered by Framer Motion
- **Safety Disclaimers** — Every response includes a medical disclaimer to encourage professional consultation

## 🛠️ Tech Stack

| Layer    | Technologies                                                    |
| -------- | --------------------------------------------------------------- |
| Frontend | React 19, TypeScript, Vite 8, Tailwind CSS v4, Framer Motion, Lucide React, React Router 7 |
| Backend  | Node.js (≥18), Express 5, CORS, dotenv                         |
| AI       | Google Gemini API (with rule-based fallback)                    |

## 📁 Project Structure

```
Sehat--Saathii/
├── frontend/                   # React + Vite + TypeScript
│   ├── src/
│   │   ├── assets/             # Images (hero.png, etc.)
│   │   ├── components/         # Reusable UI components
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── DiseasesSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── Layout.tsx
│   │   │   └── Navbar.tsx
│   │   ├── hooks/
│   │   │   └── useLanguage.tsx  # Language context provider
│   │   ├── lib/
│   │   │   ├── diseases.ts     # Disease data & knowledge base
│   │   │   └── translations.ts # i18n translation strings
│   │   ├── pages/
│   │   │   ├── ChatPage.tsx    # AI chatbot interface
│   │   │   └── HomePage.tsx    # Landing page
│   │   ├── App.tsx             # Router & app shell
│   │   ├── main.tsx            # Entry point
│   │   └── index.css           # Global styles
│   ├── public/
│   ├── index.html
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── package.json
│
├── backend/                    # Node.js + Express API
│   ├── controllers/
│   │   └── chatController.js   # Chat logic & AI integration
│   ├── routes/
│   │   └── chat.js             # /api/chat route
│   ├── server.js               # Express server entry point
│   ├── .env.example            # Environment variable template
│   └── package.json
│
├── index.html                  # Original static version (legacy)
├── style.css                   # Original styles (legacy)
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **≥ 18**
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/AyushKrSingh000/Sehat--Saathii.git
cd Sehat--Saathii

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### Environment Variables

Create a `.env` file in the `backend/` directory (or copy from the template):

```bash
cp backend/.env.example backend/.env
```

Then configure the values:

```env
# backend/.env
PORT=3001
FRONTEND_URL=http://localhost:5173
GEMINI_API_KEY=your_gemini_api_key_here  # Optional – falls back to rule-based chatbot
```

> **Note:** The Gemini API key is optional. Without it, the chatbot uses the built-in rule-based health knowledge engine.

### Running Locally

Start both the backend and frontend in separate terminals:

```bash
# Terminal 1 – Start backend (from backend/)
cd backend
npm run dev
# → Runs on http://localhost:3001

# Terminal 2 – Start frontend (from frontend/)
cd frontend
npm run dev
# → Runs on http://localhost:5173
```

The frontend dev server automatically proxies `/api` requests to the backend.

### Building for Production

```bash
# Build frontend
cd frontend
npm run build
# Output: frontend/dist/

# Start backend in production
cd ../backend
npm start
```

### Linting

```bash
cd frontend
npm run lint
```

## 🏗️ Architecture

```
┌──────────┐       ┌──────────────┐       ┌──────────────────────────────┐
│          │       │              │       │                              │
│  User    │──────▶│  React App   │──────▶│  Express API (/api/chat)    │
│ Browser  │◀──────│  (Vite)      │◀──────│                              │
│          │       │  :5173       │       │  :3001                       │
└──────────┘       └──────────────┘       └──────────┬───────────────────┘
                                                     │
                                          ┌──────────▼───────────────────┐
                                          │  Google Gemini API           │
                                          │  (or rule-based fallback)    │
                                          └──────────────────────────────┘
```

### API Endpoints

| Method | Endpoint        | Description                          |
| ------ | --------------- | ------------------------------------ |
| GET    | `/api/health`   | Health check – returns service status |
| POST   | `/api/chat`     | Send a message – returns AI reply    |

#### POST `/api/chat`

**Request Body:**
```json
{
  "message": "What are the symptoms of dengue?",
  "language": "en"
}
```

**Response:**
```json
{
  "reply": "Common symptoms of dengue include...",
  "disclaimer": "This AI assistant provides general health information only..."
}
```

## 🌐 Deployment

### Frontend (Vercel / Netlify)

| Setting          | Value           |
| ---------------- | --------------- |
| Build command    | `npm run build` |
| Output directory | `dist`          |
| Root directory   | `frontend`      |

Set the backend API URL as an environment variable if needed.

### Backend (Render / Railway)

| Setting               | Value           |
| --------------------- | --------------- |
| Start command         | `npm start`     |
| Root directory        | `backend`       |
| Environment variables | See [Environment Variables](#environment-variables) |

## ⚠️ Safety Disclaimer

> **This AI assistant provides general health information only and does not replace professional medical advice. Always consult a qualified healthcare provider for diagnosis and treatment.**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT License](LICENSE).
